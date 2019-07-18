//If you drive a car, it's useful to know how much fuel your car consumes so that you can take the necessary steps to reduce excessive fuel consumption. In this exercise, you will calculate fuel consumption. Please create a nice layout with the form which will have two input fields. In the first field, a user should provide a number of kilometers and the second filed number of liters. Based on these two parameters you should calculate the fuel consumption in liters per 100 kilometers and output the result under the form with the input fields,  

function consumption() {
	//create new variables kilometer and fuel. Put the value from the input "kilometer" in this variable. How to find this value? Look in document - look up all forms - look up the form with the name "data" - look up the input with the name "kilometer"
	var kilometer = document.forms["data"] ["kilometer"].value;
	var fuel = document.forms["data"] ["fuel"].value;

	//calculate the fuel consumption per 100km and store it in a variable calc
	var calc = ((Number(fuel)/Number(kilometer))) * 100;

	//get the element with the id "ourdiv" and store it in variable so we can use it later easier
	var result = document.getElementById("ourdiv");

	//in the HTML element ourdiv(which we now packed in a variable reult) write the h2 with following content:
	result.innerHTML = "<h2> Your consumption per 100km is " + calc + "</h2>";

////oder wenn man keine "result" variable machen möchte, könnte man das machen:
//document.getElementById("result").innerHTML = "<h2> Your consumption per 100km is " + calc + "</h2>";
}
