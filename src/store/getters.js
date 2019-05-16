export default {
  myIndexInRoom (state) {
    // find index of this player in this users array
    if (state.room.users) {
      return state.room.users.findIndex(user => {
        return user.username === state.me.username
      })
    } else { return undefined }
  },

  nplayers (state) {
    if (state.room.users) {
        return state.room.users.length
    }
  },

  userleft (state, getters) {
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 1) % 4]
    } else {
        return false
    }
  },

  usertop (state, getters) {
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 2) % 4]
    } else {
        return false
    }
  },

  userright (state, getters) {
    if (getters.myIndexInRoom !== undefined) {
        return state.room.users[(getters.myIndexInRoom + 3) % 4]
    } else {
        return false
    }
  }
}
