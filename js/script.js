function initMap() {
  const castle = { lat: 54.6867, lng: 25.2906 }; 
  const flag = { lat: 54.68, lng: 25.06 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: castle,
  });
  const marker1 = new google.maps.Marker({
    position: castle,
    map: map,
  });
  
  const marker2 = new google.maps.Marker({
	position: flag,
	map: map,
	animation: google.maps.Animation.BOUNCE,
	icon: 'images/lithuaniatiny.jpg'
  });
}

google.maps.event.addDomListener(window, 'load', initMap);