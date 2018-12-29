var map, pos, marker, circle, circleOptions, setCenter;
//var markers = [];

/*map.markers = [
  {title: 'Raanana Park Amphitheater', location: {lat: 32.188737, lng: 34.8527066}},
  {title: 'Caesaria National Park', location: {lat: 32.5086606, lng: 34.9001683}},
  {title: 'Irus Argaman Reserve', location: {lat: 32.283054, lng: 34.839627}},
  {title: 'Carmel Mountain National Park', location: {lat: 32.7290981, lng:34.9992672}},
  {title: 'Bahai Gardens', location: {lat: 32.8119338, lng: 34.9866286}}
];*/

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 32.0992549, lng: 34.8132114},
  });


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker = new google.maps.Marker({
        position: pos,
        map: map,
      });
      marker.setPosition(pos);
      map.setCenter(pos);

      var radius = 5;
      circleOptions = {
        center: pos,
        fillColor: "#cceeff",
        fillOpacity: 0.5,
        strokeColor: "#99ddff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        clickable: false,
        radius: radius*100
      }

      circle = new google.maps.Circle(circleOptions);
      circle.setMap(map);

    });
  }
}

