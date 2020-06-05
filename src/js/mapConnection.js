export function mapConnection(lat, lon) {
  const map = new google.maps.Map(document.querySelector('.map'), { // eslint-disable-line no-undef, no-unused-vars
      center: { lat: +lat, lng: +lon },
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
      position: { lat: +lat, lng: +lon },
      map: map,
      title: "Hello World!",
      animation: google.maps.Animation.BOUNCE,
  });

}