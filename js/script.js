function initMap() {
  const lithuania = { lat: 54.6867, lng: 25.2906 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: lithuania,
  });
  const marker = new google.maps.Marker({
    position: lithuania,
    map: map,
  });
}