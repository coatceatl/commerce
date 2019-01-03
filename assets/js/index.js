var map, pos, marker, circle, circleOptions, setCenter, users, title;

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

      var popupContent =
        '<div class="avatar-block">' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-2.jpg">' +
        '</a>' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/avatar-3.jpg">' +
        '</a>' +
        '<div class="map-avatar">' +
        '<a href="#" class="map-link-avatar">' +
        '+7' +
        '</a>' +
        '</div>' +
        '</div>'

      users = [
        ['User1',32.280054, 34.839627],
 //       ['User2',32.278959, 34.847759],
   //     ['User3',32.272023, 34.840034]
      ]

      for (i=0; i<users.length; i++) {
        var location = new google.maps.LatLng(users[i][1], users[i][2]);
        var icon = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";

        var infoWindow = new google.maps.InfoWindow({
          content: popupContent
        });

        var markers = new google.maps.Marker({
          position: location,
          map:map,
          icon: icon,
          title: users[i][0],
        });

        infoWindow.open(map, markers);


        markers.addListener('click', function() {
          infoWindow.open(map, markers);
        });
      }
    });
  }
}

