/** This is where to define the only functions that can directly update
 * the state. */

export default {
    roomJoined(state, createdRoom){
        /** Set the initial state of the room joined by current user */
        state.room = createdRoom
    },

    /** Set the initial state for the current user */
    userLogedIn(state, user){
        state.me = user
    },

    /** Set state.rooms to mirror all rooms in firestore */
	setAllRooms(state, rooms){
		state.rooms = rooms
	}
}
