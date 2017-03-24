import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDmx4koJ5D-AoOU--gNp4FE9SgIeV9VCRE',
  authDomain: 'kartranking-cf8a5.firebaseapp.com',
  databaseURL: 'https://kartranking-cf8a5.firebaseio.com',
  storageBucket: 'kartranking-cf8a5.appspot.com',
  messagingSenderId: '884801912852'
}

let firebase = Firebase.initializeApp(config)

export default {
  // Auth service
  auth: firebase.auth(),
  // Database service
  database: firebase.database(),
  // calls callback when user signs in or out
  onAuthStateChanged (authCallback) {
    return this.auth.onAuthStateChanged(authCallback)
  },
  // get's authenticated user
  getAuth () {
    return this.auth.currentUser
  },
  signInWithEmailAndPassword (email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  },
//   signUpWithPassword (credentials) {
//     return this.auth.createUser(credentials) // this will create a Firebase user for authentication, this is separate from our own user objects
//   },
//   signInWithProvider (provider, callback) {
//     // provider => 'google', 'facebook', 'github', etc.
//     this.auth.authWithOAuthPopup(provider, (error, authData) => {
//       if (error) {
//         if (error.code === 'TRANSPORT_UNAVAILABLE') {
//           // fall-back to browser redirects, and pick up the session
//           // automatically when we come back to the origin page
//           this.auth.authWithOAuthRedirect(provider, (error) => {
//             if (callback) callback(error, authData)
//           })
//         }
//       } else if (authData) {
//         if (callback) callback(null, authData)
//       }
//     })
//  },
  signOut () {
    this.auth.signOut()
  },
  bateriasRef () {
    return this.database.ref('baterias')
  }
}
