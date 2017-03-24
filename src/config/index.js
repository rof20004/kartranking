const LOGIN_URL = 'http://localhost:3000/v1/login'

function loginApi () {
  return LOGIN_URL
}

export default {
  api: {
    login_url: loginApi()
  }
}
