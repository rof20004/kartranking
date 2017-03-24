<template>
  <div class="bateria-details">
    <h2>ACERTOU</h2>
  </div>
</template>

<script>
import Auth from '../auth'
import Moment from 'moment'

export default {
  name: 'bateria-details',
  data () {
    return {
      title: 'Kart Ranking - PRODAM',
      rank: {
        posicao: '',
        nome: '',
        tempo: ''
      },
      usuario: {
        email: ''
      }
    }
  },
  filters: {
    data (value) {
      return Moment(value, 'YYYYMMDDHHmmss').format('DD/MM/YYYY')
    },
    hora (value) {
      return Moment(value, 'YYYYMMDDHHmmss').format('HH:mm')
    }
  },
  firebase: {
    baterias: Auth.bateriasRef()
  },
  methods: {
    bateriaDetails () {
      this.$router.go('/baterias')
    },
    logOut () {
      Auth.signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tbl {
  margin-top: 60px;
  margin-left: 25%;
  width: 600px;
}
</style>
