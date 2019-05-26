import { db } from '@/main'
import firebase from 'firebase'

export default {
 createRoom({commit, dispatch, state}, room){
      // writing room information to db
        /* card objects have type and cardsLeft properties */

        // make list of card objects
        const cards = state.cardsType.map( (type, typeIdx) => {
            return {
                type: type,
                cardsLeft: state.initialCardNumbers[typeIdx]
            }
        })
     room.cards = cards
     db.collection("rooms").add(room)
         .then(docRef => {
             /* saving the id of the room on firestore */
             room.id = docRef.id

             // commit room to state
             //commit('roomJoined', room)
             dispatch('watchRoom', room.id)

             // also commit player on this client who is also the host
             // that is why he is indexed by 0
             commit('userLogedIn', room.users[0])
         })
        .catch( (err) => { console.error(err) } )
 },

 fetchRooms({commit}){
      db.collection("rooms").onSnapshot(querySnapshot => {
                let allRooms = []
                querySnapshot.forEach(doc => {
                    let room = doc.data()
                    room.id = doc.id // for local use
                    //TODO: move this to a getter
                    room.nplayers = room.users.length

                    if (room.nplayers == 0)
                        room.status = 'empty'
                    else if (room.nplayers < 4)
                       room.status = 'hosted'
                    else
                        room.status = 'full'

                    allRooms.push(room)
                })
                // commit all rooms to initial state
                commit('setAllRooms', allRooms)
            })
    },

 addUserToRoom({ commit, state, dispatch }, payload){
     db.collection("rooms").doc(payload.roomId).update({
         // see firestore doc for details
         users: firebase.firestore.FieldValue.arrayUnion(payload.user),
         events: firebase.firestore.FieldValue.arrayUnion({
             action: 'user_joined',
             author: payload.user.username
         })
     })
     commit('userLogedIn', payload.user)
 },

 watchRoom({ commit, state }, roomId){
	//TODO: maybe better to have events stored in subcollection
    // that could be watched seperately
    // or simply keep the lastest event in firestore.
	db.collection("rooms").doc(roomId)
    .onSnapshot(doc => {
        let room = doc.data()
        room.id = roomId
        commit('roomJoined', room);
        //NOTE: Many properties used in the view may be computed
        //at each update
    });
 },

 resetCards({ commit, state }){
     /* Set the cards to their initial state in db */
     const cards = state.cardsType.map( (type, typeIdx) => {
            return {
                type: type,
                cardsLeft: state.initialCardNumbers[typeIdx]
            }
     })

     db.collection("rooms").doc(state.room.id).update(
         {
             cards: cards,
             events: firebase.firestore.FieldValue.arrayUnion({
                 action: 'new_game',
             })
          }
     )
 },

 drawCards({ commit, state }, cards){
     /* Only called from `host`.
      *
      * Assign a currentCard property to each user.
      * Also update the remaining cards.
      * */

    let users = state.room.users.slice()
                // make copy to avoid accidentaly updating views
    console.log('cards to draw from', cards)

    var randomDraw = () => {
        let cardDrawn = false
        while ( ! cardDrawn ){
            const cardTypeIdx = Math.floor(Math.random() * cards.length)
            if ( cards[cardTypeIdx].cardsLeft ){
                cardDrawn = cards[cardTypeIdx].type
                cards[cardTypeIdx].cardsLeft -= 1
            }
            else
                // no cards of this type, remove from consideration
                cards.splice(cardTypeIdx, 1)
        }
        return cardDrawn
    }

    for (let user of users){
        // assign each user a card
        user.currentCard = randomDraw()
    }
        //update db
        db.collection("rooms").doc(state.room.id).update({
                users: users,
                cards: cards,
                events: firebase.firestore.FieldValue.arrayUnion({
                     action: 'new_round',
                 })
            })
        //NOTE: state is updated when db is updated
        .then(() => console.log('users have drawn cards'))
 }
}
