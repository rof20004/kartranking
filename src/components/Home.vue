<template>
  <div class="home">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
    </md-toolbar>
    <h2>{{ usuario.email }}</h2>
    <md-button @click.native="logOut" class="md-raised md-primary">Logout</md-button>
    <div v-for="(row, index) in baterias" :key="index">
        {{ row['.key'] }}
        <div v-for="registro in row[index]" >
          {{ registro[index] }}
        </div>
    </div>
    <md-button @click.native="addRank">Mostrar Baterias</md-button>
  </div>
</template>

<script>
import Auth from '../auth'

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
  firebase: {
    baterias: Auth.bateriasRef()
  },
  methods: {
    addRank () {
      console.log(this.baterias)
      // ranksRef.push(this.rank)
      // this.rank.posicao = ''
      // this.rank.nome = ''
      // this.rank.tempo = ''
    },
    logOut () {
      Auth.signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
