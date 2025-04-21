const map= L.map('map').setView([28.7041, 77.1025], 13);  // Bangalore coords

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false  // Disable automatic marker when searching
}).addTo(map);



// Add a marker
const marker = L.marker([28.7041, 77.1025]).addTo(map)
  .bindPopup('You are here!')
  .openPopup();