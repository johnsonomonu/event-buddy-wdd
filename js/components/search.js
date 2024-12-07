export const renderEvents = (events) => {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = '';
  
    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.setAttribute('data-id', event.id);
  
      eventCard.innerHTML = `
        <h3>${event.name.text}</h3>
        <p>${event.description.text?.slice(0, 100)}...</p>
        <button data-id="${event.id}">View Details</button>
      `;
  
      eventsContainer.appendChild(eventCard);
    });
  };
  