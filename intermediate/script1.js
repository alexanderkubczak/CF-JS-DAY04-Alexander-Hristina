//If you drive a car, it's useful to know how much fuel your car consumes so that you can take the necessary steps to reduce excessive fuel consumption. In this exercise, you will calculate fuel consumption. Please create a nice layout with the form which will have two input fields. In the first field, a user should provide a number of kilometers and the second filed number of liters. Based on these two parameters you should calculate the fuel consumption in liters per 100 kilometers and output the result under the form with the input fields,  

function consumption() {
	var kilometer = document.forms["data"] ["kilometer"].value;
	var fuel = document.forms["data"] ["fuel"].value;

	var calc = ((Number(fuel)/Number(kilometer))) * 100;

	var result = document.getElementById("result");

	result.innerHTML = "<h2> Your consumption per 100km is " + calc + "</h2>";

}
