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
  
  firebase.firestore().enablePersistence()
  
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
        
    })
    
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
            
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

    
// Create an initial document to update.
var docRef = db.collection("meetups").doc("categ");
docRef.set({
    next_title: "Next '18 Extended 2018",
    next_desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    recent_title: "Google IO Extended Eldoret 2018",
    recent_desc: "I/O Extended events help developers from around the world take part in the I/O experience from wherever they are. We had Talks, Hands-on sessions and I/O 18 Recap viewing",
})

.then(function() {
    console.log("Document successfully updated!");
});

var docRef = db.collection('meetups').doc('categ');
// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});
console.log(updateTimestamp)

// Read data
db.collection("meetups").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        const meetups=doc.data();
        next_title.innerText=meetups.next_title;
        next_desc.innerText=meetups.next_desc;
        recent_title.innerText=meetups.recent_title;
        recent_desc.innerText=meetups.recent_desc;
    });
});


  
  
    