var map, pos, marker, circle, circleOptions, setCenter, users, title;

function initMap() {
  myMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 32.0992549, lng: 34.8132114},
  });


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      myPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker = new google.maps.Marker({
        position: myPosition,
        map: myMap,
      });
      marker.setPosition(myPosition);
      myMap.setCenter(myPosition);

      var radius = 5;
      circleOptions = {
        center: myPosition,
        fillColor: "#cceeff",
        fillOpacity: 0.5,
        strokeColor: "#99ddff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        clickable: false,
        radius: radius*100
      }

      circle = new google.maps.Circle(circleOptions);
      circle.setMap(myMap);

      var popupContent =
        '<div class="avatar-block">' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-2.jpg">' +
        '</a>' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-3.jpg">' +
        '</a>' +
        '<span class="map-avatar">' +
        '<a href="#" class="map-link-avatar">' +
        '+7' +
        '</a>' +
        '</span>' +
        '</div>';

     var popupContent1 =
        '<div class="avatar-block">' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-4.jpg">' +
        '</a>' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-5.jpg">' +
        '</a>' +
        '<span class="map-avatar">' +
        '<a href="#" class="map-link-avatar">' +
        '+3' +
        '</a>' +
        '</span>' +
        '</div>';

     var popupContent2 =
        '<div class="avatar-block">' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-1.jpg">' +
        '</a>' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-6.jpg">' +
        '</a>' +
        '<span class="map-avatar">' +
        '<a href="#" class="map-link-avatar">' +
        '12' +
        '</a>' +
        '</span>' +
        '</div>';

      var icon = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";
      var markers = [
        {
          coordinates: {lat: 32.280054, lng: 34.839627},
          info: popupContent,
        },
        {
          coordinates: {lat: 32.278959, lng: 34.847759},
          info: popupContent1,
        },
        {
          coordinates: {lat: 32.272023, lng: 34.840034},
          info: popupContent2,
        }
      ]

      for (var i=0; i<markers.length; i++) {
        addMarker(markers[i]);
      }

      function addMarker(properties) {
        var markers = new google.maps.Marker({
          position: properties.coordinates,
          map: myMap,
          icon: icon,
        });

        var infoWindow = new google.maps.InfoWindow({
          content: properties.info
        });

        infoWindow.open(myMap, markers);

        markers.addListener('click', function() {
          infoWindow.open(myMap, markers);
        });
      }
    });
  }
}

