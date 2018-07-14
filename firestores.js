// Initialize Firebase
let config = {
    apiKey: "AIzaSyCby0lBsEtADjRL0odxx5uaqCZKVA0KGHk",
      authDomain: "gdgmoipwa.firebaseapp.com",
      databaseURL: "https://gdgmoipwa.firebaseio.com",
      projectId: "gdgmoipwa",
      storageBucket: "gdgmoipwa.appspot.com",
      messagingSenderId: "202011378148"
  };
  firebase.initializeApp(config);
  let firestore = firebase.firestore();
  console.log("Firestores Loaded")
  
  var db = firebase.firestore();

  const timestamps = firebase.firestore();
  const settings = { timestampsInSnapshots: true};
  firestore.settings(settings);
  
// Create an initial document to update.
var meetupsmeetupsDocRef = db.collection("meetups").doc("next");
meetupsmeetupsDocRef.set({
    desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    title: "Next '18 Extended 2018",
    year: 2018
})

var meetupsmeetupsDocRef = db.collection("meetups").doc("recent");
meetupsmeetupsDocRef.set({
    desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    title: "Next '18 Extended 2018",
    year: 2018
});

// To update age and favorite color:
db.collection("meetups").doc("next").update({
    desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    title: "Next '18 Extended 2018",
    year: 2018
})

.then(function() {
    console.log("Document successfully updated!");
});

var meetupsDocRef = db.collection('meetups').doc('next');

// Update the timestamp field with the value from the server
var updateTimestamp = meetupsDocRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});

console.log(updateTimestamp)

// Read data

var meetupsDocRef = db.collection("meetups").doc("next");

meetupsDocRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    
}).catch(function(error) {
    console.log("Error getting document:", error);
});

