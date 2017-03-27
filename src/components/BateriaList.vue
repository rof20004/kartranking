<template>
  <div class="bateria-list">
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

          <md-button class="md-icon-button md-list-action" @click.native="bateriaDetail(bateria['.key'])">
            <md-icon>visibility</md-icon>
            <md-tooltip md-direction="right">Detalhar a bateria</md-tooltip>
          </md-button>
        </md-list-item>
      </md-list>
    </md-table-card>
  </div>
</template>

<script>
import Database from '../database'
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
  },
  methods: {
    bateriaDetail (bateriaId) {
      this.$router.push({name: 'BateriaDetail', params: {bateriaId: bateriaId}})
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
