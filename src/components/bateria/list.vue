<template>
  <div class="bateria-list">
    <div class="container">
      <h2>Baterias</h2>
      <div class="row">
        <div class="table-responsive">
          <table class="table table-hover" v-if="baterias.length > 0">
            <thead>
              <tr>
                <th class="col-sm-6">Data</th>
                <th class="col-sm-4">Hora</th>
                <th class="col-sm-2">#</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="bateria in baterias">
                <td>{{ bateria['.key'] | data }}</td>
                <td>{{ bateria['.key'] | hora }}</td>
                <td>
                  <router-link class="btn btn-primary" :to="{ path: '/bateria/' + bateria['.key'] }">Visualizar</router-link>
                </td>
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
  name: 'bateria-list',
  filters: {
    data (value) {
      return Moment(value, 'YYYYMMDDHHmmss').format('DD/MM/YYYY')
    },
    hora (value) {
      return Moment(value, 'YYYYMMDDHHmmss').format('HH:mm')
    }
  },
  firebase () {
    return {
      baterias: Database.getBaterias()
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
