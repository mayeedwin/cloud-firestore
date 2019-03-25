### What we are going to learn?

  - How to render data from firebase cloud firestore to your web app ( Creating a custom framework )
  
  - How to search, filter and sort the data 
  
  - Here is the [final working demo app](https://faq-beta.firebaseapp.com/) 
  
 ### [Tools needed](https://firebase.google.com/docs/hosting/deploying)
We shall be using Firebase in this codelab. Make sure you install firebase tools as in [this guide here](https://pwafire.org/developer/codelabs/firebase-hosting-web/#add-firebase) before we begin. Just install and leave it there.

#### [1. Create a Cloud Firestore project](https://console.firebase.google.com/)
Open the [Firebase Console](https://console.firebase.google.com/) and create a new project. In the Database section, click the Get Started button for Cloud Firestore.

#### [2. Select a starting mode for your Cloud Firestore Security Rules]()
To get started with the Web, select **test mode** and click **Enable.** Test Mode is good for getting started with the mobile and web client libraries, but allows anyone to **read** and **overwrite** your data. Make sure to see how to [secure](https://firebase.google.com/docs/firestore/quickstart?authuser=0#secure_your_data) in cloud firestore.

### [Getting started with the code](https://pwafire.org/developer/codelabs/rendering-data-from-firebase-cloud-firestore-and-sorting)

The default [index.html](https://github.com/mayeedwin/cloud-firestore/tree/master/lessons/102-rendering-data/work/app/index.html) page in our **lessons/102-rendering-data/work** folder is already set ready to configure our project for Firebase use. At the bottom of our page, we have added the Firebase and Cloud Firestore libraries we need to set up.

We also have [service-worker.js](https://github.com/mayeedwin/cloud-firestore/blob/master/work/service-worker.js) in our project that allows us to add progressive web app offline features. [Learn more](https://pwafire.org/developer/docs/service-worker/) about the service worker and its features.

#### [1. Adding Firebase to our Web app](https://console.firebase.google.com)

Go to your [firebase console](https://console.firebase.google.com) here and select your project. Click **Settings** icon on the top left side just beside **Project Overview** and select **Project Settings.** Scroll down the view and click **Add Firebase to your web app** icon. Do not close the tab.

- Make sure you are in the **work** folder. Open the **app** folder. Here we have **index.html** and **assets** folder which has our demo app styles and javascript (where our magic is gonna be)

- Open **index.html**, here we have some little code. If you serve the app with a local web server, there is no much you will see. Below is the section tag we are going to render data in.

```html

 <!-- render events -->

      <section class="events">

      </section>

 ```

-  After rendering data this is what shall be rendered i.e auto creating elements displaying data

```html
 <!-- render events -->

      <section class="events">
        <!-- auto created on rendering data for each event -->
          <div class="meetup" data-id="Serp7BJaItjtivHCoira">
          <p class="faq-accordion active" onclick="openClose()">firebase dev summit 2019</p>
            <div class="faq-panel show" onclick="openClose()">
                 <p>Meet awesome firebase developers and designers for a two-day developer summit.</p>
                 <a href="https://pwafire.org/events/" target="_blank" rel="noopener">Reserve Seat</a>
            </div>
          </div>
      </section>

```

- 

#### [Adding firebase to our web app]()

In **js** folder, open **app.firestore.js** and add your firebase project configuration as shown below


```javascript

// Initialize Firebase
var config = {
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "project-id",
  };

```

#### [Adding data to our ]()

In **js** folder, open **app.firestore.js** and add your firebase project configuration as shown below


```javascript

// Initialize Firebase
var config = {
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "project-id",
  };

```

Still creating the codelab...not ready

