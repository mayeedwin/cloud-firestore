let summits = [
  {
    title: "Web Summit Africa",
    description:
      "Meet passionate Students, Professionals, Designers, Developers and Educators shaping the Web in Africa!",
    rsvp: "https://pwafire.org/events"
  },
  {
    title: "Mobile Summit Africa",
    description:
      "Meet passionate Students, Professionals, Designers, Developers and Educators shaping the Mobile Industry in Africa!",
    rsvp: "https://pwafire.org/events"
  },
  {
    title: "AI Summit Africa",
    description:
      "Meet passionate Students, Professionals, Designers, Developers and Educators shaping AI in Africa!",
    rsvp: "https://pwafire.org/events"
  },
  {
    title: "Jenga Summit Africa",
    description:
      "Meet passionate Students, Professionals, Designers, Developers and Educators shaping the Web in Africa!",
    rsvp: "https://pwafire.org/events"
  }
];

const add = document.querySelector(".add-data");

// post data on click
add.addEventListener("click", event => {
  event.preventDefault();

  let result = confirm(
    "Click OK if ONLY you've updated Data.js with new data to prevent duplicates!"
  );

  // if Ok, add data!
  if (result) {
    // loop to get each summit from Data.json fetch
    for (let summit of summits) {
      // add a new document with a generated id.
      db.collection("events")
        .add({
          title: summit.title,
          description: summit.description,
          rsvp: summit.rsvp,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(doc => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    }
  }
});
