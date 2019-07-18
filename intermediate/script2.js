//Create three objects of type hotel. Each of them shares some properties and methods. 
//The user should be able to insert a number of nights for each hotel and get back results, whether the hotel is available or not (for some number of nights).
//For each hotel generate random integers from 1-10 that store available nights.
//If the hotel is available, provide a button labeled "I'll reserve" otherwise provide a message with the text "Sorry, no free room for <number_of_nights> nights".
//Try to style the program with the colors #003580, #FFFFFF and #E9F0FA.

function HotelConstructor (name) {
	this.name = name;
	this.availableNights = Math.floor(Math.random() * 10) + 1;
	this.checkAvailability = function () {
		var nights = document.forms ["userNights"] ["nights"].value;
		return this.availableNights - nights;
	}
}
	var hiltonHotel = new HotelConstructor('Hilton');
	console.log(hiltonHotel);
	var holidayInn = new HotelConstructor("Holiday Inn" );
	console.log(holidayInn);

