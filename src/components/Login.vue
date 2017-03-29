<template>
  <div class="login">
    <div class="container">
      <div class="row">

        <div class="form">
          <div class="card">
              <div class="card-header">
                  <p>Kart Ranking Login</p>
                  <h6 class="card-title text-muted">Seja bem vindo ao sistema de rankeamento do Kart</h6>
              </div>

              <div class="card-block">
                  <form novalidate @submit.stop.prevent="login">
                      <div class="form-group">
                          <label for="email">E-mail</label>
                          <input id="email" type="text" class="form-control" v-model="email" :disabled="loading" />
                      </div>
                      <div class="form-group">
                          <label for="password">Password</label>
                          <input id="password" type="password" class="form-control" v-model="password" :disabled="loading" />
                      </div>
                      <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                        <span v-if="!loading">Entrar</span>
                        <span v-if="loading" ><img src="../assets/img/ripple.svg" width="30"></span>
                      </button>
                  </form>
              </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Auth from '../auth'
import toastr from 'toastr'

toastr.options.positionClass = 'toast-bottom-center'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      Auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        toastr.success('Autenticado com sucesso')
      }).catch((error) => {
        toastr.error(error.message)
        this.loading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
    margin: 0 auto;
}

.card-header {
    text-align: center
}

.card-title {
    text-align: center
}

.form-button {
  margin: 0 auto;
}
</style>
