/* The script is placed inside an immediately 
invoked function expression which helps
protect the scope of variables */

(function() {
  // PART ONE: CREATE HOTEL OBJECT AND WRITE
  // OUT THE OFFER DETAILS

  // Create a hotel object using object
  // literal syntax
  var hotel = {
    name: 'Park',
    roomRate: 240, // Amount in dollars
    discount: 15,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * (
	  			(100 - this.discount) / 100);
      return offerRate;
    }
  };

  // Write out the hotel name, standard rate,
  // and the special rate declare variables
  var hotelName, roomRate, specialRate;

  // Get elements
  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  // Write hotel name
  hotelName.textContent = hotel.name;
  // Write room rate
  roomRate.textContent =  '$' + hotel.roomRate.toFixed(2);
  // Write offer price
  specialRate.textContent = '$' + hotel.offerPrice();

  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY
  // DETAILS FOR THE OFFER. Message displayed to users
  var expiryMsg;
  // Today's date
  var today;
  // The element that shows the message about
  // the offer ending
  var elEnds;

  function offerExpires(today) {
    // Declare variables within the
	  // function for local scope
    var weekFromToday, day, date, month, year,
			dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 *
          24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
				'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April',
				'May', 'June', 'July', 'August', 'September',
				'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month +
				' ' + year + ')';
    return expiryMsg;
  }

  // Put today's date in variable
  today = new Date();
  // Get the offerEnds element
  elEnds = document.getElementById('offerEnds');
  // Add the expiry message
  elEnds.innerHTML = offerExpires(today);

  // Finish the immediately invoked function expression

}());