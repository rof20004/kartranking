<template>
  <div class="home">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
    </md-toolbar>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head md-tooltip="A posição final no rank">Posição</md-table-head>
          <md-table-head>Nome</md-table-head>
          <md-table-head>Tempo</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="rank in ranks" :key="rank.posicao">
          <md-table-cell>{{ rank.posicao }}</md-table-cell>
          <md-table-cell>{{ rank.nome }}</md-table-cell>
          <md-table-cell>{{ rank.tempo }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
import { database } from '../firebase.config'

let ranksRef = database.ref('ranks')

export default {
  name: 'home',
  data () {
    return {
      title: 'Kart Ranking - PRODAM',
      rank: {
        posicao: '',
        nome: '',
        tempo: ''
      }
    }
  },
  firebase: {
    ranks: ranksRef
  },
  methods: {
    addRank () {
      ranksRef.push(this.rank)
      this.rank.posicao = ''
      this.rank.nome = ''
      this.rank.tempo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
