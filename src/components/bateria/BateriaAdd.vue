<template>
  <div class="bateria-add">
    <h2>{{ title }}</h2>
    <div class="container">
      <form novalidate @submit.stop.prevent="add">
          <div class="form-group">
            <div class="row">
              <div class="col-3">
                <label>Data do Evento</label>
                <input type="text" class="form-control" v-model="bateria.dataHora" />
              </div>
              <div class="col-2">
                <label>&nbsp;</label><br>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Inserir Participante</button>
              </div>
              <div class="col-1">
                <label>&nbsp;</label><br>
                <button type="button" class="btn btn-success" :disabled="!isValid">Finalizar Cadastro</button>
              </div>
            </div>
          </div>
      </form>

      <div class="table-responsive" v-if="participantes.length > 0">
        <table class="table table-hover" width="100%">
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
            <tr v-for="participante in participantes" :key="participante.nome">
              <td>{{ participante.nome }}</td>
              <td>{{ participante.da }}</td>
              <td>{{ participante.dl }}</td>
              <td>{{ participante.kart }}</td>
              <td>{{ participante.pos }}</td>
              <td>{{ participante.tmv }}</td>
              <td>{{ participante.tt }}</td>
              <td>{{ participante.tv }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="sem-participantes">
        <h2>Sem participantes</h2>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cadastro de Participantes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form novalidate @submit.stop.prevent="createParticipante">
              <div class="form-group">
                <div class="row">
                  <div class="col-4">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="participante.nome" />
                  </div>
                  <div class="col-3">
                    <label>DA</label>
                    <input type="text" class="form-control" v-model="participante.da" />
                  </div>
                  <div class="col-3">
                    <label>DL</label>
                    <input type="text" class="form-control" v-model="participante.dl" />
                  </div>
                  <div class="col-2">
                    <label>Kart</label>
                    <input type="text" class="form-control" v-model="participante.kart" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-4">
                    <label>Posição</label>
                    <input type="text" class="form-control" v-model="participante.pos" />
                  </div>
                  <div class="col-3">
                    <label>TM</label>
                    <input type="text" class="form-control" v-model="participante.tmv" />
                  </div>
                  <div class="col-3">
                    <label>TV</label>
                    <input type="text" class="form-control" v-model="participante.tt" />
                  </div>
                  <div class="col-2">
                    <label>TT</label>
                    <input type="text" class="form-control" v-model="participante.tv" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="clearParticipanteForm">Limpar</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="addParticipante" :disabled="!isValidParticipante">Concluir</button>
          </div>
        </div>
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
      },
      participante: {
        nome: '',
        da: '',
        dl: '',
        kart: '',
        pos: '',
        tmv: '',
        tt: '',
        tv: ''
      },
      participantes: []
    }
  },
  computed: {
    validation () {
      return {
        dataHora: !!this.bateria.dataHora.trim() && this.bateria.dataHora.trim().length === 12
      }
    },
    isValid () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
    validationParticipante () {
      return {
        nome: !!this.participante.nome.trim(),
        da: !!this.participante.da.trim(),
        dl: !!this.participante.dl.trim(),
        kart: !!this.participante.kart.trim(),
        pos: !!this.participante.pos.trim(),
        tmv: !!this.participante.tmv.trim(),
        tt: !!this.participante.tt.trim(),
        tv: !!this.participante.tv.trim()
      }
    },
    isValidParticipante () {
      var validation = this.validationParticipante
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    add () {
      if (this.isValid) {
        if (this.participantes.length !== 0) {
          let saveRef = Database.getBaterias().child(this.bateria.dataHora)
          this.participantes.forEach((participante) => {
            let p = this.deepCopy(participante)
            let key = p.nome
            delete p.nome
            saveRef.child(key).set(p)
          })
        } else {
          Database.getBaterias().child(this.bateria.dataHora).set(true)
        }

        toastr.success('Bateria cadastrada com sucesso')

        this.bateria.dataHora = ''
        this.participantes = []
      }
    },
    addParticipante () {
      let participante = {
        nome: this.participante.nome,
        da: this.participante.da,
        dl: this.participante.dl,
        kart: this.participante.kart,
        pos: this.participante.pos,
        tmv: this.participante.tmv,
        tt: this.participante.tt,
        tv: this.participante.tv
      }

      this.participantes.push(participante)

      toastr.success('Participante cadastrado com sucesso')

      this.clearParticipanteForm()
    },
    clearParticipanteForm () {
      this.participante.nome = ''
      this.participante.da = ''
      this.participante.dl = ''
      this.participante.kart = ''
      this.participante.pos = ''
      this.participante.tmv = ''
      this.participante.tt = ''
      this.participante.tv = ''
    },
    deepCopy (oldObj) {
      var newObj = oldObj
      if (oldObj && typeof oldObj === 'object') {
        newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {}
        for (var i in oldObj) {
          newObj[i] = this.deepCopy(oldObj[i])
        }
      }
      return newObj
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

.sem-participantes {
  margin-top: 100px;
}
</style>
