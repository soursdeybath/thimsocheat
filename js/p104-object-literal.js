// Set up the object    
var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  // Need "this" because inside function
  checkAvailability : function() {
    return this.rooms - this.booked;
  }
};

// Update the HTML get element
var elName = document.getElementById('hotelName');
// Update HTML with property of the object
elName.textContent = hotel.name;                   

// Get element
var elRooms = document.getElementById('rooms');
// Update HTML with property of the object
elRooms.textContent = hotel.checkAvailability();

/* NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note
the security issues on p228-231 */