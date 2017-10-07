// const functions = require('firebase-functions');
import * as functions from "firebase-functions";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export let helloWorld = functions.https.onRequest((req, res) =>{
  let world= `form ES6 in Cloud Functions!`
  res.status(200).send(`Hello ${world}`)
})
