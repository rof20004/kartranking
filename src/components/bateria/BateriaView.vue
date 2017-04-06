<template>
  <div class="bateria-details">
    <h2>{{ title }}</h2>
    <div class="table-responsive">
      <table class="table table-hover" width="100%" v-if="baterias.length > 0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>DA</th>
            <th>DL</th>
            <th>KART</th>
            <th>POS</th>
            <th>TMV</th>
            <th>TT</th>
            <th>TV</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="bateria in baterias">
            <td>{{ bateria['.key'] }}</td>
            <td>{{ bateria.da }}</td>
            <td>{{ bateria.dl }}</td>
            <td>{{ bateria.kart }}</td>
            <td>{{ bateria.pos }}</td>
            <td>{{ bateria.tmv }}</td>
            <td>{{ bateria.tt }}</td>
            <td>{{ bateria.tv }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h2>Sem registros</h2>
      </div>
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
  padding-bottom: 50px;
}
</style>
