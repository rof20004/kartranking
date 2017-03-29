<template>
  <div class="bateria-details">
    <h2>{{ title }} </h2>
    <md-table v-if="baterias.length > 0">
      <md-table-header>
        <md-table-row>
          <md-table-head>Nome</md-table-head>
          <md-table-head md-tooltip="Diferença para o anterior">DA</md-table-head>
          <md-table-head md-tooltip="Diferença para o líder">DL</md-table-head>
          <md-table-head md-tooltip="Número do competidor">KART</md-table-head>
          <md-table-head md-tooltip="Posição">POS</md-table-head>
          <md-table-head md-tooltip="Tempo da melhor volta">TMV</md-table-head>
          <md-table-head md-tooltip="Tempo total">TT</md-table-head>
          <md-table-head md-tooltip="Total de voltas">TV</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="bateria in baterias" :key="bateria.key">
          <md-table-cell>{{ bateria['.key'] }}</md-table-cell>
          <md-table-cell>{{ bateria['da'] }}</md-table-cell>
          <md-table-cell>{{ bateria['dl'] }}</md-table-cell>
          <md-table-cell>{{ bateria['kart'] }}</md-table-cell>
          <md-table-cell>{{ bateria['pos'] }}</md-table-cell>
          <md-table-cell>{{ bateria['tmv'] }}</md-table-cell>
          <md-table-cell>{{ bateria['tt'] }}</md-table-cell>
          <md-table-cell>{{ bateria['tv'] }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    <div v-else>
      <h2>Sem registros</h2>
    </div>
  </div>
</template>

<script>
import Database from '../../database'

export default {
  name: 'bateria-details',
  data () {
    return {
      title: 'Rank da Bateria'
    }
  },
  firebase () {
    return {
      baterias: Database.getBateriasByKey(this.$route.params.bateriaId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
}
</style>
