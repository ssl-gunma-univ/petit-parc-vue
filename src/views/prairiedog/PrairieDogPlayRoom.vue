<template>
	<main class="container">
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
                <div id="rest-10" class="col"></div>
                <div id="rest-5" class="col"></div>
                <div id="rest0" class="col"></div>
                <div id="rest1" class="col"></div>
                <div id="rest2" class="col"></div>
                <div id="rest3" class="col"></div>
                <div id="rest4" class="col"></div>
                <div id="rest5" class="col"></div>
                <div id="rest10" class="col"></div>
                <div id="rest15" class="col"></div>
                <div id="rest20" class="col"></div>
                <div id="restx2" class="col"></div>
                <div id="restmax" class="col"></div>
                <div id="rest?" class="col"></div>
            </div>
            <hr>
            <div class="row">

                <div class="col-lg-4 mb-3">
                </div>

                <div v-if="usertop"
                    class="col-lg-4 mb-3 text-center back rounded shadow" id="playerDiv2">
                    <h3 id="name_p2">{{ usertop.username }}</h3>
                    <p id="player2"></p>
                    <div id="damage_p2" class="mt-3">
                        {{ usertop.score }}
                    </div>
                </div>

                <div class="col-lg-4 mb-3">
                </div>

                <div v-if="userleft"
                    class="col-lg-4 mb-3 text-center back rounded shadow" id="playerDiv1">
                    <h3 id="name_p1">{{ userleft.username }}</h3>
                    <p id="player1"></p>
                    <div id="damage_p1" class="mt-3">
                        {{ userleft.score }}
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="card">
                        <div class="card-body align-self-stretch overflow-auto" style="height: 10rem;">
                            <p id="gameMaster" class="card-text">simple test</p>
                        </div>
                    </div>
                </div>

                <div v-if="userright"
                    class="col-lg-4 mb-3 text-center back rounded shadow" id="playerDiv3">
                    <h3 id="name_p3">{{ userright.username }}</h3>
                    <p id="player3"></p>
                    <div id="damage_p3" class="mt-3">
                        {{ userright.score }}
                    </div>
                </div>

                <div class="col-lg-4 mb-3">
                </div>

                <div class="col-lg-4 mb-3 text-center back rounded shadow" id="playerDiv0">
                    <h3 id="name_p0">{{ me.username }}</h3>
                    <p id="myCard"></p>
                    <input v-model="attempt" type="number" id="textBox">
                    <input type="button" id="callButton" value="数字宣言" @click="call"><br>
                    <button id="prairie" type="button" class="btn btn-warning mt-3" @click="coyote">プレーリードッグ！</button>
                    <div id="damage_p0" class="mt-3">
                        {{ me.score }}
                    </div>
                </div>
                <div v-if="me.role == 'host'"
                    class="col-lg-4 mb-3 text-center mback rounded shadow">
                    <h3 class="text-white">GAME MENU</h3>
                    <button id="start" type="button" class="btn btn-primary mb-2 w-50" disabled>GAME START</button><br>
                    <button id="next" type="button" class="btn btn-success mb-2 w-50" disabled>NEXT GAME</button><br>
                    <button id="remove" type="button" class="btn btn-danger w-50">部屋解散</button>
                </div>
            </div>
        </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      attempt: ''
    }
  },
  computed: {
    ...mapState([
      'me',
      'room'
    ]),
    ...mapGetters([
      'userleft',
      'usertop',
      'userright'
    ])
  },
  methods: {
    call () {
      console.log('called')
    },
    coyote () {
      console.log('coyote')
    }
  },
  created () {
    this.$store.dispatch('watchRoom', this.$route.params.roomId)
  }
}
</script>
