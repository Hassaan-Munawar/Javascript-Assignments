var a =prompt("Enter number")
var preinc =++a
var postinc =a++
var predec =--a
var postdec =a--
document.write(`Result:<br> The value of a is: ${a} <br> ..............<br> The value of ++a is ${preinc}<br> Now the value of a is ${preinc} <br><br> The value of a++ is ${postinc}<br> Now the value of a is ${postinc} <br><br> The value of --a is ${predec}<br> Now the value of a is ${predec} <br><br> The value of a++ is ${postdec}<br> Now the value of a is ${postdec} <br><br>`)