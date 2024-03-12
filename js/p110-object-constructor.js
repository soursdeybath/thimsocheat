// Set up the object	
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;  
};

// Get element
var elName = document.getElementById('hotelName');
// Update HTML with property of the object
elName.textContent = hotel.name;                   

// Get element
var elRooms = document.getElementById('rooms');
// Update HTML with result of method
elRooms.textContent = hotel.checkAvailability();

/* NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12 and 15, but note
the security issues on p228-231 */