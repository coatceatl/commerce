var map, pos, marker, circle, circleOptions, setCenter, users, title;

function initMap() {
  myMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 32.0992549, lng: 34.8132114},
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false
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
        radius: radius*70
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
        '<span class="map-avatar border-green">' +
        '<a href="#" class="map-link-avatar">' +
        '+7' +
        '</a>' +
        '</span>' +
        '</div>';

     var popupContent1 =
        '<div class="avatar-block">' +
        '<a href="#" class="map-link-avatar">' +
        '<img class="map-avatar" src="assets/img/img3.jpg">' +
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
        '+12' +
        '</a>' +
        '</span>' +
        '</div>';

      var icon = "assets/img/marker-blue.png";
      var markers = [
        {
          coordinates: {lat: 32.280054, lng: 34.838627},
          info: popupContent,
        },
        {
          coordinates: {lat: 32.273259, lng: 34.840759},
          info: popupContent1,
        },
        {
          coordinates: {lat: 32.271023, lng: 34.837034},
          info: popupContent2,
        }
      ]

      for (var i=0; i<markers.length; i++) {
        addMarker(markers[i]);
      }

      google.maps.event.addListener(addMarker, 'domready', function() {
          var visible = $('.map-link-avatar');
          visible.click(function() {
            $(".infobar").addClass("visible");
          });
        });

      function addMarker(properties) {
        var markers = new google.maps.Marker({
          position: properties.coordinates,
          map: myMap,
          icon: icon,
        });

        var infoWindow = new google.maps.InfoWindow({
          content: properties.info,
        });

        google.maps.event.addListener(infoWindow, 'domready', function() {
          var elem = $('.gm-style-iw').siblings();
          elem.css("display", "none");

          $('.map-link-avatar').click(function() {
            $(".infobar").toggleClass("visible");
          });
        });

        infoWindow.open(myMap, markers);

        markers.addListener('click', function() {
          infoWindow.open(myMap, markers);
          $('.gm-style-iw').siblings().css("display", "none");
        });
      }
    });
  }
}


