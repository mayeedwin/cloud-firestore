### [Firebase Cloud Firestore Web Codelab](https://pwafire.org/developer/codelabs/firestore-for-web)
In this codelab, we're going to learn how to add [Firebase](https://firebase.google.com/docs/) to your [web app](https://pwafire.org/developer/codelabs/pwafire/) and serve content from the [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore/) and make your web app work offline as well.

### [Tools needed](https://firebase.google.com/docs/hosting/deploying)
We shall be using Firebase in this codelab. Make sure you install firebase tools as in [this guide here](https://pwafire.org/developer/codelabs/firebase-hosting-web/#add-firebase) before we begin. Just install and leave it there.

#### [1. Create a Cloud Firestore project](https://console.firebase.google.com/)
Open the [Firebase Console](https://console.firebase.google.com/) and create a new project. In the Database section, click the Get Started button for Cloud Firestore.

#### [2. Select a starting mode for your Cloud Firestore Security Rules]()
To get started with the Web, select **test mode** and click **Enable.** Test Mode is good for getting started with the mobile and web client libraries, but allows anyone to **read** and **overwrite** your data. Make sure to see how to [secure](https://firebase.google.com/docs/firestore/quickstart?authuser=0#secure_your_data) in cloud firestore.

### [Getting started with the code](https://pwafire.org/developer/codelabs/firestore-for-web)
The default **index.html** page in our **work** folder is already set ready to configure our project for Firebase use. At the bottom of our page, we have added the Firebase and Cloud Firestore libraries we need to set up.

We also have **service-worker.js** in our project that allows us to add progressive web app offline features. [Learn more](https://pwafire.org/developer/codelabs/pwafire/#sw-config) about the service worker and its features.

#### [1. Adding Firebase to our Web app](https://console.firebase.google.com)
Go to your [firebase console](https://console.firebase.google.com) here and select your project. Click **Settings** icon on the top left side just beside **Project Overview** and select **Project Settings.** Scroll down the view and click **Add Firebase to your web app** icon. Do not close the tab.

- Make sure you are in the **work** folder. Open the **app** folder. Here we have **main.css** and **faqbeta.js** which styles up our web app and empty javascript files; **app.js**, **firestores.js** and **data.js**. We are going to add some code to them.

- Open **firestores.js** and copy the code snippet below to it. Replace the firebase data values with the ones in the firebase console tab you left open above.

```javascript

// Initialize Firebase
let config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    projectId: "projectId",
    storageBucket: "bucket.appspot.com"
    messagingSenderId: "messagingSenderId"
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
console.log("Cloud Firestores Loaded")

var db = firebase.firestore();

const timestamps = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

```
#### [2. Enable offline data]()
This feature caches a copy of the Cloud Firestore data that your app is actively using, so your app can access the data when the device is offline. The code snippet below does that for us. Copy and add it below the code above in firestore.js file.

```javascript

// Enable offline capabilities
firebase.firestore().enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a a time.

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

```
#### [3. Read firestore data from database in the meetups collection]()

The code below allows us to read firestore data from our database in the meetups collection created; Add it below the code above

```javascript

var docRef = db.collection('meetups').doc('categ');
// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});
console.log(updateTimestamp)

// Read firestore data from database in the meetups collection
db.collection("meetups").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        const meetups = doc.data();
        next_title.innerText = meetups.next_title;
        next_desc.innerText = meetups.next_desc;
        recent_title.innerText = meetups.recent_title;
        recent_desc.innerText = meetups.recent_desc;
    });
});

```

**Explanation :** The *next_title.innerText* code for instance, gets the **next meetup** title value and passes it to our **data.js** which then is displayed into our web app in the paragraph element; i.e 

```html 
<p class="faqbeta_accordion" id="next_title"></p>
```
The update the timestamp field with the value from the server code allows to record in the database when we last updated our entire collection;

#### [4. Create "meetups" document in our database]()
Cloud Firestore stores data in Documents, which are stored in Collections. Cloud Firestore creates collections and documents implicitly the first time you add data to the document. In the **app** folder, open **data.js** file and copy the code snippet below to it.

```javascript
// Create meetups document
var docRef = db.collection("meetups").doc("categ");
docRef.set({
    next_title: "Next '18 Extended 2018",
    next_desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    recent_title: "Google IO Extended Eldoret 2018",
    recent_desc: "I/O Extended events help developers from around the world take part in the I/O experience from wherever they are. We had Talks, Hands-on sessions and I/O 18 Recap viewing",
    timestamp: ""
})

.then(function() {
    console.log("Document successfully created!");
});

```
#### [5. Display data into our web app]()
In the **app** folder again, open **app.js** and add the code snippet below to it.

```javascript
/**
 * Copyright 2018 PWAFire.Org. All Rights Reserved.
 */
// Display data into our web app
const next_title=document.querySelector("#next_title");
const next_desc=document.querySelector("#next_desc");
const recent_title=document.querySelector("#recent_title");
const recent_desc=document.querySelector("#recent_desc");

```
**Explanation :** The *next_title.innerText* code in **stage 3** for gets the **next meetup** title value and passes it to our **data.js** which then is displayed into our web app in the paragraph element; i.e our paragraph element has its **id** as **next_title** and we use this **id** to display the data into our paragraph element.

```html 
<p class="faqbeta_accordion" id="next_title"></p>
```
### [Firebase hosting](https://pwafire.org/developer/codelabs/firebase-hosting-web/#firebase-hosting)
We are done! Let's now deploy our cloud firestore web app to firebase ! Follow [this guide here](https://pwafire.org/developer/codelabs/firebase-hosting-web/#firebase-hosting) to deploy our web app.

### [What next?]()
You got any **bug?** Report it [here for support.](https://github.com/mayeedwin/firestore/issues/new) You want to contribute? Create your [feature here.](https://github.com/mayeedwin/firestore/issues/new) 


