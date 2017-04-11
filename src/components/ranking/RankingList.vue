<template>
  <div class="bateria-list">
    <div class="container">
      <h2>Ranking</h2>
      <div class="row">
        <div class="table-responsive">
          <table class="table table-hover" v-if="leaderboard.length > 0">
            <thead>
              <tr>
                <th>#</th>
                <th>Piloto</th>
                <th>Tempo</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(leader, ranking) in leaderboard">
                <td>{{ ranking }}</td>
                <td>{{ leader['.key'] }}</td>
                <td>{{ leader.tmv | tempo }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <h2>Sem registros</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Database from '../../database'
import Moment from 'moment'

export default {
  name: 'ranking-list',
  filters: {
    tempo (value) {
      return Moment(value, 'HH:mm:ss.SSS').format('HH:mm:ss.SSS')
    }
  },
  firebase () {
    return {
      leaderboard: Database.getRankings().orderByChild('score').limitToLast(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  padding-bottom: 50px;
}
</style>
