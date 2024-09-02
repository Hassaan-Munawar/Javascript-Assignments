var first =+prompt("Enter first number")
var second =+prompt("Enter second number")
var operator =prompt("Enter operator")
if(operator=="+"){
    alert(first+second)
}
else if(operator=="-"){
    alert(first-second)
}
else if(operator=="*"){
    alert(first*second)
}
else if(operator=="/"){
    alert(first/second)
}
else if(operator=="%"){
    alert(first%second)
}
else {
    alert("Please enter input")
}