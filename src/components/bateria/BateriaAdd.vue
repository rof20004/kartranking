<template>
  <div class="bateria-add">
    <h2>{{ title }}</h2>
    <div class="container">
      <div class="row">
        <div class="form-group">
          <button class="btn btn-success">Cadastrar</button>
        </div>
      </div>
      <div class="row">
        <form novalidate @submit.stop.prevent="add">
            <div class="form-group">
              <label>Data do Evento</label>
              <input type="text" class="form-control" v-model="bateria.dataHora" />
            </div>
            <button class="btn btn-primary btn-block" type="submit" :disabled="!isValid">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Database from '../../database'
import toastr from 'toastr'

export default {
  name: 'bateria-add',
  data () {
    return {
      title: 'Cadastrar Bateria',
      bateria: {
        dataHora: ''
      }
    }
  },
  computed: {
    validation () {
      return {
        dataHora: !!this.bateria.dataHora.trim()
      }
    },
    isValid () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    add () {
      if (this.isValid) {
        Database.getBaterias().child(this.bateria.dataHora).set(true)
        toastr.success('Bateria cadastrada com sucesso')
        this.bateria.dataHora = ''
      }
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

form {
    width: 600px;
    margin: 0 auto;
}

.errors {
  color: #f00;
}
</style>
