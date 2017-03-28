<template>
  <div class="home">
    <nav class="navbar navbar-fixed-top navbar-toggleable-md navbar-inverse bg-primary">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">{{ title }}</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item">
            <a class="nav-link"  href="#/" title="Ir para tela inicial">
              <span class="fa fa-home" aria-hidden="true"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/bateria" title="Cadastrar Bateria">
              <span class="fa fa-plus-square" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link"  href="#" @click="logOut" title="Sair da aplicação">
              <span class="fa fa-sign-out" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
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
