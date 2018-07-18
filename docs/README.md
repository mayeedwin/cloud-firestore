### [Firebase Cloud Firestore Web Codelab](https://pwafire.org/developer/codelabs/firestore-for-web)
In this codelab, we're going to learn how to add [Firebase](https://firebase.google.com/docs/) to your [web app](https://pwafire.org/developer/codelabs/pwafire/) and serve content from the [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore/) and make your web app work offline as well.


#### 1. Create a Cloud Firestore project
Open the [Firebase Console](https://console.firebase.google.com/) and create a new project. In the Database section, click the Get Started button for Cloud Firestore.

#### 2. Select a starting mode for your Cloud Firestore Security Rules
To get started with the Web, select **test mode** and click **Enable.** Test Mode is good for getting started with the mobile and web client libraries, but allows anyone to **read** and **overwrite** your data. Make sure to see how to [secure](https://firebase.google.com/docs/firestore/quickstart?authuser=0#secure_your_data) in cloud firestore.

#### 3. AddIng Firebase to our Web app
Go to your [firebase console](https://console.firebase.google.com) here and select your project. Click **Settings** icon on the top left side just beside **Project Overview** and select **Project Settings.** Scroll down the view and click **Add Firebase to your web app** icon. Do not close the tab.

- Make sure you are in the **work** folder. Open the **app** folder. Here we have one file, the **main.css** which styles up our web app. We are going to create some more **javascript** files here.

- Create an empty javascript file called **firestores.js** and copy the code snippet below to it. Replace the firebase data values with the ones in the firebase console tab you left open above.

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
