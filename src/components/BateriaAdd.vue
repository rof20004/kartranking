<template>
  <div class="bateria-add">
    <h2>{{ title }}</h2>
    <div class="bateriaForm">
        <md-card>
            <md-card-content>
                <form novalidate>
                    <md-layout :md-gutter="8">
                        <md-layout md-flex="100">
                            <md-input-container>
                                <label>Data do Evento</label>
                                <md-input v-model="bateria.dataHora" required></md-input>
                                <span class="errors" v-if="!validation.dataHora">Data do evento não pode ser vazia</span>
                                <span class="md-caption" v-else>Formato: YYYYMMDDHHMM</span>
                            </md-input-container>
                        </md-layout>
                    </md-layout>
                    <md-layout md-gutter>
                        <md-layout>
                            <md-button class="md-raised md-primary form-button" style="flex: 1" @click.native="add">Salvar</md-button>
                        </md-layout>
                    </md-layout>
                </form>
            </md-card-content>
        </md-card>
    </div>
  </div>
</template>

<script>
import Auth from '../auth'
import toastr from 'toastr'

let bateriasRef = Auth.getDatabase().ref('baterias')

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
  firebase () {
    return {
      baterias: bateriasRef
    }
  },
  computed: {
    validation: function () {
      return {
        dataHora: !!this.bateria.dataHora.trim()
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    add () {
      if (this.isValid) {
        bateriasRef.child(this.bateria.dataHora).set(true)
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
}

.bateriaForm {
    width: 600px;
    margin: 0 auto;
}

.form-button {
    margin: 0 auto;
}

.errors {
  color: #f00;
}
</style>
