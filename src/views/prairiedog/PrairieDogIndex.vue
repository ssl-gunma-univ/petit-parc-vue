<template>
<main class="container shadow bg-white pb-5">
            <div class="jumbotron">
                <h1>プレーリードッグ</h1>
                <hr>
                <h2>ルール</h2>
                <ul>
                  <li>前の人よりも「大きい数字」を宣言</li>
                  <li>前の人の宣言が合計値を超えたと思ったら「プレーリードッグ！」と宣言</li>
                </ul>
            </div>

            <div class="row">
                <div class="col-lg-4 mb-3">
                    <div class="card mx-auto" style="width: 20rem;">
                        <div class="card-body">
                            <h5 class="card-title">Create a Room here</h5>
                            <div id="status_room01">
                                <div id="status_room01" class="spinner-border text-primary mb-2" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <input v-model="username" id="name_room01" type="text" placeholder="Your Name" class="form-control mb-2">
                            <button @click="createRoom"
                                id="create_room01" type="button" class="btn btn-sm btn-primary" >
                                Create a room
                            </button>
                        </div>
                    </div>
                </div>
                <div v-for="(room, index) in rooms" :key="room.id" class="col-lg-4 mb-3">
                    <div class="card mx-auto" style="width: 20rem;">
                        <div class="card-body">
                            <h5 class="card-title">Room {{ index + 1 }}</h5>
                            <div id="status_room01">
                                <h6 v-if="room.status !== 'empty'" id="status_room01" class="card-subtitle mb-2 text-muted"> {{ room.status }}: {{ room.nplayers }} / 4 </h6>
                                <div v-else id="status_room01" class="spinner-border text-primary mb-2" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <input v-model="username" id="name_room01" type="text" placeholder="Your Name" class="form-control mb-2">
                            <button :disabled="room.status !== 'empty'" @click="createRoom"
                                id="create_room01" type="button" class="btn btn-sm btn-primary" >
                                Create a room
                            </button>
                            <button :disabled="room.nplayers == 0 ||  room.nplayers == 4"  @click="joinRoom(room.id, index)"
                                id="join_room01" type="button" class="btn btn-sm btn-primary">
                                Join a room
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>


<script>

import { db } from '@/main'
import { mapState } from 'vuex'

export default {
  name: 'prairie-dog',
  data() {
      return {
          roomStatus: 'empty', /* possible values: hosted, full, empty */
          roomPlayers: 0,
          username: ''
      }
  },
  computed: {
      ...mapState([
          'rooms',
          'room' // always update when state changes
          ])
  },
  watch: {
      room: function(oldRoom, newRoom){
          if(this.room.id){
              console.log('room.id', this.room.id)
              this.joinRoom()
          }
      }
  },
  methods: {
      createRoom: function() {
          /** Create room in firestore, register the host's name
            * and navigate to the waiting room */

          // initializing room
          const room = {
            users: [ {username: this.username, role: 'host', score: 0} ],
            events: [
                // events have action and author properties
                // action can be an object
                {
                    action: "room_created",
                    author: this.username
                }
            ]
          }

          // add room to firstore and update state.room
          // and state.me
          this.$store.dispatch('createRoom', room)
      },

      joinRoom: function(roomId = false, index = false){
          /** Register the user name to the room,
           * and navigate to the waiting room */
          console.log('navigating to playroom')

          if (!roomId){
              // the room has just been created in db
              roomId = this.room.id
          } else {
              // user is trying to join an already created room
              const user = {
                  username: this.username,
                  role: 'guest',
                  score: 0
              }
              this.$store.dispatch('addUserToRoom', {'roomId': roomId, 'user': user, 'index': index})
          }
    
          // navigate to playroom
          this.$router.push({
              name: 'prairiedogplayroom',
              params: {'roomId': roomId}
          })
      }

  },
  created(){
      //TODO: fetch first room from db and
      //      initialize interface accordingly
      this.$store.dispatch('fetchRooms')
  }
}
</script>
