var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })

exports.updateRanking = functions.database.ref('/baterias/{bateriaId}')
  .onWrite(event => {
    console.log(event);
    if (event.data.previous.exists()) {
      console.log('incluído',event.data);
    } else {
      console.log('alterado',event.data);
    }
    console.log('id', event.params.bateriaId);
  });