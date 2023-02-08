
var map = L.map('map').setView([-25.92253, 32.61006], 17);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}
	).addTo(map);

	L.marker([-25.92253,32.61006 ]).addTo(map)
    .bindPopup('Minha Casa, +258 84 041 0143')
    .openPopup();