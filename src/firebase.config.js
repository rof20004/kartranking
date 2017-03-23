import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDmx4koJ5D-AoOU--gNp4FE9SgIeV9VCRE',
  authDomain: 'kartranking-cf8a5.firebaseapp.com',
  databaseURL: 'https://kartranking-cf8a5.firebaseio.com',
  storageBucket: 'kartranking-cf8a5.appspot.com',
  messagingSenderId: '884801912852'
}

let app = Firebase.initializeApp(config)
let db = app.database()

export const database = db
