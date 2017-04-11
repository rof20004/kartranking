var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("Hello World!", request, response);
 })

var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updateRanking = functions.database.ref('/baterias/{bateriaId}')
  .onWrite(event => {
    console.log(event);
    if (event.data.previous.exists()) {
      console.log('incluído',event.data.val());
    } else {
      console.log('alterado',event.data.val());
    }
    console.log('id', event.params.bateriaId);
  });