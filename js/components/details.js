import { fetchEventDetails } from '../api.js';

export const showEventDetails = async (id) => {
  const detailsContainer = document.getElementById('event-details');
  const data = await fetchEventDetails(id);

  detailsContainer.innerHTML = `
    <h2>${data.name.text}</h2>
    <p>${data.description.text}</p>
    <p><strong>Date:</strong> ${data.start.local}</p>
    <a href="${data.url}" target="_blank">Event Page</a>
  `;

  detailsContainer.classList.remove('hidden');
};
