<template>
  <div class="bateria-details">
    <md-button @click.native="voltar">Voltar</md-button>
    {{ parametro }}
    <ul>
      <li v-for="bateria in baterias">
        {{ bateria }}
      </li>
    </ul>
  </div>
</template>

<script>
import Auth from '../auth'

export default {
  name: 'bateria-details',
  data () {
    return {
      title: 'Bateria Detalhes'
    }
  },
  firebase () {
    return {
      baterias: Auth.getDatabase().ref('baterias/' + this.$route.params.bateriaId)
    }
  },
  methods: {
    voltar () {
      this.$router.go(-1)
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
