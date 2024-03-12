// Set up the object    
var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Update the HTML get element
var elName = document.getElementById('hotelName');
// Update HTML with property of the object
elName.textContent = hotel.name;

// Get element
var elPool = document.getElementById('pool');
// Update HTML with property of the object
elPool.className = hotel.pool;

// Get element
var elGym = document.getElementById('gym');        
// Update HTML with property of the object
elGym.className = hotel.gym;

/* NOTE: textContent does not work in IE8 or
earlier you can use innerHTML on line 14, but
note the security issues on p228-231 */