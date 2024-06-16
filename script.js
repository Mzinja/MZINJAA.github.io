// Initialize Leaflet map centered on Emirates Stadium
var mymap = L.map('map').setView([51.5549, -0.1084], 15);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Add a marker for Emirates Stadium
var emiratesMarker = L.marker([51.5549, -0.1084]).addTo(mymap);

// Custom popup content for Emirates Stadium marker
var popupContent = "<b>Emirates Stadium</b><br>Home of Arsenal FC.";

// Bind popup to marker
emiratesMarker.bindPopup(popupContent).openPopup();
