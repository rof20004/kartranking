<template>
  <div class="home">
    <md-toolbar>
      <h2 class="md-title">{{ title }}</h2>
      <span style="flex: 1"></span>
      <md-button href="#/" class="md-icon-button">
        <md-icon>home</md-icon>
        <md-tooltip md-direction="bottom">Ir para tela inicial</md-tooltip>
      </md-button>
      <md-button href="#/bateria" class="md-icon-button">
        <md-icon>note_add</md-icon>
        <md-tooltip md-direction="bottom">Cadastrar bateria</md-tooltip>
      </md-button>
      <span style="flex: 20"></span>
      <md-button @click.native="logOut" class="md-icon-button">
        <md-icon>exit_to_app</md-icon>
        <md-tooltip md-direction="left">Sair da aplicação</md-tooltip>
      </md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Auth from '../auth'

export default {
  name: 'home',
  data () {
    return {
      title: 'Kart Ranking - PRODAM'
    }
  },
  methods: {
    logOut () {
      Auth.signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
