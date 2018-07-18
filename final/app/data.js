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