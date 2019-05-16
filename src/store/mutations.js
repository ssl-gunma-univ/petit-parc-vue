export default {
  roomJoined (state, createdRoom) {
    state.room = createdRoom
  },

  userLogedIn (state, user) {
    state.me = user
  },

  setAllRooms (state, rooms) {
    state.rooms = rooms
  }
}
