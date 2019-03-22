// Initialize Firebase
var config = {
    authDomain: "faq-beta.firebaseapp.com",
    databaseURL: "https://faq-beta.firebaseio.com",
    projectId: "faq-beta",
  };
  firebase.initializeApp(config);
  let firestore = firebase.firestore();
  console.log("[ Cloud Firestore ] Loaded");
  
  var db = firebase.firestore();

  // Enable offline capabilities
firebase.firestore().enablePersistence()
.then(function () {
    // Initialize Cloud Firestore through firebase
    var db = firebase.firestore();
})
.catch(function (err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.

    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});
