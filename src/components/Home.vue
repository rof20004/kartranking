<template>
  <div class="home">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
      <md-button @click.native="logOut" class="md-icon-button">
        <md-icon>exit_to_app</md-icon>
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
