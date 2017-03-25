<template>
  <div class="login">
    <div class="form">
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Kart Ranking Login</div>
                    <div class="md-subhead">Seja bem vindo ao sistema de rankeamento do Kart</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <form novalidate @submit.stop.prevent="login">
                    <md-input-container>
                        <label>E-mail</label>
                        <md-input v-model="email"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Password</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-input-container>
                </form>
            </md-card-content>

            <md-card-actions>
                <md-button style="flex: 1" class="md-raised md-primary" @click.native="login">Entrar</md-button>
            </md-card-actions>
        </md-card>
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
      password: ''
    }
  },
  methods: {
    login () {
      Auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        toastr.success('Signed successfully')
      }).catch(function (error) {
        toastr.error(error.message)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
    width: 500px;
    margin: 0 auto;
}

.md-title {
    text-align: center
}

.md-subhead {
    text-align: center
}
</style>
