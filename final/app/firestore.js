/**
 * Copyright 2019 pwafire.org 
 * All Rights Reserved.
 */

// Initialize Firebase
let config = {
    databaseURL: "https://firestoresbeta.firebaseio.com",
    projectId: "firestoresbeta",
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
console.log("Cloud Firestores Loaded");

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

var docRef = db.collection('meetups').doc('categ');

// Read firestore data from database in the meetups collection
db.collection("meetups").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        const meetups = doc.data();
        next_title.innerText = meetups.next_title;
        next_desc.innerText = meetups.next_desc;
        next_rsvp_url.href = meetups.next_rsvp_url;
        recent_title.innerText = meetups.recent_title;
        recent_desc.innerText = meetups.recent_desc;
        recent_rsvp_url.href = meetups.recent_rsvp_url;
    });
});