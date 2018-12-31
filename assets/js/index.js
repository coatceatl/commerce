var map, pos, marker, circle, circleOptions, setCenter, users, title;
//var markers = [];

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
        //icon: currentIcon
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

      users = [
        ['User1',32.283054, 34.839627],
        ['User2',32.278959, 34.847759],
        ['User3',32.279023, 34.840034]
      ]

      for (i=0; i<users.length; i++) {
        var location = new google.maps.LatLng(users[i][1], users[i][2]);
        var icon = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";

        var markers = new google.maps.Marker({
          position: location,
          map:map,
          icon: icon,
          title: users[i][0],
        });

        var infoWindow = new google.maps.InfoWindow({
          content: '<div class="infobar-content"></div>',
        });

        markers.addListener('click', function() {
          console.log( "ready!" );
          $('.infobar').addClass("visible");
        });
//          infoWindow.open(map, markers[i]);
      }
    });
  }
}

