import { Event } from "./components/Event.js";

const App = document.querySelector(".app");

// rendering components
const Render = doc => {
  /* add the render components or could import a render functional 
  component and pass "doc as the argument" */
  // to get a particular value of a document, use "doc.data().value"
  App.appendChild(Event(doc));
};

// get all firestore documents
db.collection("events")
  .orderBy("timestamp", "desc")
  .get()
  .then(querySnapshot => {
    // loop through each document
    querySnapshot.forEach(doc => {
      // call the "Render" function and pass "doc" as the argument
      Render(doc);
    });
  })
  .catch(error => {
    // do something with the error
    console.log("Error getting documents: ", error);
  });
