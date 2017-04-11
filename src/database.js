import { firebase } from './config/firebase-config'

export default {
  // Auth service
  database: firebase.database(),

  // Get baterias reference
  getBaterias () {
    return this.database.ref('baterias')
  },

  // Get baterias reference by key
  getBateriasByKey (key) {
    return this.database.ref('baterias/' + key)
  },

  // Get rankings reference
  getRankings () {
    return this.database.ref('rankings')
  }
}
