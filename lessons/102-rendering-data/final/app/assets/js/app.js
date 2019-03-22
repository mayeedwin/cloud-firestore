
// getting documents
const events = document.querySelector('.events');

// create element & render meetup
function renderMeetup(doc){
    let meetup = document.createElement('div');
    let title = document.createElement('p');
    let panel = document.createElement('div');
    let desc = document.createElement('p');
    let url = document.createElement('a');

    meetup.setAttribute('class', 'meetup');
    meetup.setAttribute('data-id', doc.id);
    title.setAttribute('class', 'faq-accordion');
    title.setAttribute('onclick', 'openClose()');
    panel.setAttribute('class', 'faq-panel');
    panel.setAttribute('onclick', 'openClose()');
    url.setAttribute('href', doc.data().url);
    url.setAttribute('target', '_blank');
    url.setAttribute('rel', 'noopener');

    title.textContent = doc.data().title;
    desc.textContent = doc.data().desc;
    url.textContent = 'Reserve Seat';

    meetup.appendChild(title);
    meetup.appendChild(panel);
    
    panel.appendChild(desc);
    panel.appendChild(url);

    events.appendChild(meetup);

  /* // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('meetup').doc(id).delete();
    }); */
}

// real-time listener, order by timestamp and in descending order
db.collection('events').orderBy("timestamp", "desc").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {

    // print to console
    console.log(change.doc.data());
        if(change.type == 'added'){
            renderMeetup(change.doc);
        } else if(change.type == 'removed'){
            let meetup = events.querySelector('[data-id='+ change.doc.id +']');
            events.removeChild(meetup);
        }
    });
});



