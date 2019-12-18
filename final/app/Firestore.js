/* Copyright 2019 pwafire.org 
  All Rights Reserved.
 */

const config = {
  apiKey: "AIzaSyC2XasJ9hLLzXHqDS1QlMrUAUzmzCKykAk",
  authDomain: "firestoresbeta.firebaseapp.com",
  databaseURL: "https://firestoresbeta.firebaseio.com",
  projectId: "firestoresbeta"
};

firebase.initializeApp(config);
// initialize firestore
const db = firebase.firestore();

// enable offline persistence
db.enablePersistence().catch(err => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});
