
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.45750402,
            lng: 1.97753906
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let locations = [
        { lat: 53.95608553, lng: -8.21777344 },
        { lat: 43.45291889, lng: 3.03222656 },
        { lat: 39.90973623, lng: -0.30761719 },
        { lat: 50.79204706, lng: 9.79980469 },
    ]

    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}