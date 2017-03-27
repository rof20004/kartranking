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
    if (key) {
      return this.database.ref('baterias/' + key)
    }
    return this.database.ref('baterias')
  }
}
