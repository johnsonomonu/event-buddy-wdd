const API_KEY = 'your-eventbrite-api-key'; // Replace with your Eventbrite API key
const BASE_URL = 'https://www.eventbriteapi.com/v3/';

export const fetchEvents = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}events/search/?q=${query}&token=${API_KEY}`);
    const data = await response.json();
    return data.events;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const fetchEventDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}events/${id}/?token=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event details:', error);
  }
};
