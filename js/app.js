import { fetchEvents } from './api.js';
import { renderEvents } from './components/search.js';
import { showEventDetails } from './components/details.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const searchBar = document.getElementById('search-bar');

  // Search functionality
  searchBtn.addEventListener('click', async () => {
    const query = searchBar.value.trim();
    if (query) {
      const events = await fetchEvents(query);
      renderEvents(events);
    }
  });

  // Example: Event Details Listener
  document.getElementById('events').addEventListener('click', (e) => {
    const eventId = e.target.getAttribute('data-id');
    if (eventId) showEventDetails(eventId);
  });
});
