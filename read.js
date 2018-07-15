
var meetupsDocRef = db.collection("meetups").doc("next");

meetupsDocRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        const meetups=doc.data();
        nexttitle.innerText=meetups.title;
        nextdesc.innerText=meetups.desc;
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    
}).catch(function(error) {
    console.log("Error getting document:", error);
});

// To update age and favorite color:
db.collection("meetups").doc("next").update({
    desc: "Next ’18 is a three day global exhibition of inspiration, innovation, and education where we learn from one another how the cloud can transform how we work and power everyone’s successes.",
    title: "Next '18 Extended",
    year: 2018
})
