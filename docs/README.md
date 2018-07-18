### [Firebase Cloud Firestore Web Codelab](https://pwafire.org/developer/codelabs/firestore-for-web)
In this codelab, we're going to learn how to add [Firebase](https://firebase.google.com/docs/) to your [web app](https://pwafire.org/developer/codelabs/pwafire/) and serve content from the [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore/) and make your web app work offline as well.


#### 1. Create a Cloud Firestore project
Open the [Firebase Console](https://console.firebase.google.com/) and create a new project. In the Database section, click the Get Started button for Cloud Firestore.

#### 2. Select a starting mode for your Cloud Firestore Security Rules
To get started with the Web, select test mode. Test Mode is good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data. After testing, make sure to see how to [secure](https://firebase.google.com/docs/firestore/quickstart?authuser=0#secure_your_data) in cloud firestores.

#### 3. AddIng Firebase to our Web app
For our project, we are going to use our own configuartion file to add Firebase to our web app. 

- Make sure you are in the work folder. Open the app folder. Here we have one file, the main.css which styles up our web app.

- Create a new folder called app - all our web app firestore config files will be created here.
