var access_token = 'pk.eyJ1IjoiZmlyZW45OSIsImEiOiJjazNiZG5zbTMwbDMwM2tuM3pvYjd6amt0In0.6RJEcQsMFNFBwD3w8Dhtvg';

var mymap = L.map('problem_map').setView([56.656465, 23.779509], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: access_token
}).addTo(mymap);