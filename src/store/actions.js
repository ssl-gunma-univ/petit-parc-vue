import { db } from '@/main'
import firebase from 'firebase'

export default {
 createRoom({commit, dispatch}, room){
      // writing room information to db
      db.collection("rooms").add(room)
          .then(docRef => {
              /* saving the id of the room on firestore */
              room.id = docRef.id

              // commit room to state
              //commit('roomJoined', room)
              console.log('createRoom: roomID', room.id)
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
	db.collection("rooms").doc(roomId)
    .onSnapshot(doc => {
        let room = doc.data()
        room.id = roomId
        commit('roomJoined', room);
    });
 },

 resetCards({ commit, state }, cards){
     db.collection("rooms").doc(state.room.id).update(
         {
             cards: cards,
             events: firebase.firestore.FieldValue.arrayUnion({
                 action: 'new_game',
             })
          }
     )
       .then( () => console.log('cards successfuly reset') )
       .catch( (err) => console.error(err) )
 }
}
