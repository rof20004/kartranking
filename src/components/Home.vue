<template>
  <div class="home">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
      <md-button @click.native="logOut" class="md-icon-button">
        <md-icon>exit_to_app</md-icon>
      </md-button>
    </md-toolbar>
    <md-table-card class="tbl">
      <md-toolbar>
        <h1 class="md-title">Baterias</h1>
      </md-toolbar>
      <md-list class="md-double-line">
        <md-list-item v-for="bateria in baterias" :key="bateria.key">
          <md-icon class="md-primary">streetview</md-icon>

          <div class="md-list-text-container">
            <span>Data: {{ bateria['.key'] | data }}</span>
            <span>Hora: {{ bateria['.key'] | hora }}</span>
          </div>

          <md-button class="md-icon-button md-list-action" @click.native="bateriaDetails">
            <md-icon>visibility</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-table-card>
  </div>
</template>

<script>
import Auth from '../auth'
import Moment from 'moment'

export default {
  name: 'home',
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
      // this.$router.go('/bateria/detail')
      this.$router.replace(this.$route.query.redirect || '/bateria/detail')
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
