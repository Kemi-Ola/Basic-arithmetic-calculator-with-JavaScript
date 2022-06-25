
var operator= window.prompt("Enter operator(either +, -, *, or /):");

var number1= parseFloat(window.prompt("Enter first number:"));

var number2= parseFloat(window.prompt("Enter second number:"));

if(operator=="+"){
			alert(number1 + number2);
}
else if(operator=="-"){
			alert(number1 - number2);
}
else if(operator=="*"){
			alert(number1 * number2);
}
else if(operator=="/"){
			alert(number1 / number2);
}
else{
			alert("invalid operator, use +, -, *, or /");
}