const map = new maplibregl.Map({
container:"map",
style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,// stylesheet location
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 9 // starting zoom
});

// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//         'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
//         (error, image) => {
//             if (error) throw error;

//             // Add the image to the map style.
//             map.addImage('cat', image);

//             // Add a data source containing one point feature.
//             map.addSource('point', {
//                 'type': 'geojson',
//                 'data': {
//                     'type': 'FeatureCollection',
//                     'features': [
//                         {
//                             'type': 'Feature',
//                             'geometry': {
//                                 'type': 'Point',
//                                 'coordinates': listing.geometry.coordinates //Listing.geometry.coordinates[0],Listing.geometry.coordinates[1]
//                             }
//                         }
//                     ]
//                 }
//             });

//             // Add a layer to use the image to represent the data.
//             map.addLayer({
//                 'id': 'points',
//                 'type': 'symbol',
//                 'source': 'point', // reference the data source
//                 'layout': {
//                     'icon-image': 'cat', // reference the image
//                     'icon-size': 0.25
//                 }
//             });
//         }
//     );
// });


const marker= new maplibregl.Marker({color: "red"}, )
.setLngLat(listing.geometry.coordinates) //Listing.gemetry.coordinates[0],Listing.geometry.coordinates[1])
.setPopup(
    new maplibregl.Popup({offset: 25})
.setHTML(
    `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
)
.addTo(map);