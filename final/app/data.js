
/* Copyright 2019 pwafire.org 
   All Rights Reserved. */

// Create meetups document

var docRef = db.collection("meetups").doc("categ");
docRef.set({
        next_title: "pwa dev summit 2019",
        next_desc: "Meet awesome web developers and designers for a two-day developer summit.",
        next_rsvp_url: "https://pwafire.org/developer/codelabs/cloud-firestore-for-web/",
        recent_title: "pwa dev summit 2019",
        recent_desc: "Meet awesome web developers and designers for a two-day developer summit.",
        recent_rsvp_url: "https://pwafire.org/developer/codelabs/cloud-firestore-for-web/",
    })

    .then(function () {
        console.log("Document successfully created!");
    });

 