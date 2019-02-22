/**
 * Copyright 2018 pwafire.org 
 * All Rights Reserved.
 */

// Create meetups document
var docRef = db.collection("meetups").doc("categ");
docRef.set({
        next_title: "pwa dev summit 2019",
        next_desc: "Meet awesome web developers and designers for a two-day developer summit engaging on what's next for the web and the magical journey with progressive web apps",
        next_rsvp_url: "https://pwafire.org",
        recent_title: "pwa dev summit 2019",
        recent_desc: "Meet awesome web developers and designers for a two-day developer summit engaging on what's next for the web and the magical journey with progressive web apps",
        recent_rsvp_url: "https://pwafire.org",
        timestamp: ""
    })

    .then(function () {
        console.log("Document successfully created!");
    });