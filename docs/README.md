### [Firebase Cloud Firestore Web Codelab](https://pwafire.org/developer/codelabs/firestore-for-web)
In this codelab, we're going to learn how to add [Firebase](https://firebase.google.com/docs/) to your [web app](https://pwafire.org/developer/codelabs/pwafire/) and serve content from the [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore/) and make your web app work offline as well.


#### 1. Create a Cloud Firestore project
Open the [Firebase Console](https://console.firebase.google.com/) and create a new project. In the Database section, click the Get Started button for Cloud Firestore.

#### 2. Select a starting mode for your Cloud Firestore Security Rules
To get started with the Web, select **test mode** and click **Enable.** Test Mode is good for getting started with the mobile and web client libraries, but allows anyone to **read** and **overwrite** your data. Make sure to see how to [secure](https://firebase.google.com/docs/firestore/quickstart?authuser=0#secure_your_data) in cloud firestore.

#### 3. AddIng Firebase to our Web app
Go to your [firebase console](https://console.firebase.google.com) here and select your project. Click **Settings** icon on the top left side just beside Project Overview and select **Project Settings.** Scroll down the view and click **Add Firebase to your web app** icon. Do not close the tab.

- Make sure you are in the **work** folder. Open the **app** folder. Here we have one file, the **main.css** which styles up our web app. We are going to create some more **javascript** files here.

- Create an empty javascript file called **firestores.js**.

- Now to add firebase to our web app; 
