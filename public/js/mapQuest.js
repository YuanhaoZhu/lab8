function initMap() {
	// add your code here
	L.mapquest.key = 'Gu1fWckL6ztDLx9pdMInpAbJtgOuRHjM';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.879011, -117.235880],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl:false
	});

	//add  marker to the map
	L.marker([32.879011, -117.235880]).addTo(map);

}