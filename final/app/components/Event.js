export const Event = doc => {
  // return component
  const event = document.createElement("section");

  event.innerHTML = `
    <div class="event">
      <a href="${doc.data().rsvp}">
         <h2 class="title">${doc.data().title}</h2>
       </a>
        <p>${doc.data().description}</p>
    </div>
  `;

  return event;
};
