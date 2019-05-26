/** Values imported from this object should not be updated manually.
 * They are used to simplify access to some information that is
 * available from the state.  */

export default {
  myIndexInRoom (state) {
    /** Return the index of this player in this users array
     * of the room this user belongs to */
    if (state.room.users) {
      return state.room.users.findIndex(user => {
        return user.username === state.me.username
      })
    } else { return undefined }
  },

  nplayers (state) {
      /** Returns the number of players who have joined this room */
    if (state.room.users) {
        return state.room.users.length
    }
  },

  userleft (state, getters) {
    /** Return a reference to the user who should be displayed on the
     * left of the player in state.me */
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 1) % 4]
    } else {
        return false
    }
  },

  usertop (state, getters) {
    /** Return a reference to the user who should be displayed on the
     * top of the player in state.me */
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 2) % 4]
    } else {
        return false
    }
  },

  userright (state, getters) {
    /** Return a reference to the user who should be displayed on the
     * right of the player in state.me */
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 3) % 4]
    } else {
        return false
    }
  },

  cardsLeft(state){
      /** Return a reference a list of cards objects.
       * This list gives the cards currently available in the game. */
      return state.room.cards
  }
}
