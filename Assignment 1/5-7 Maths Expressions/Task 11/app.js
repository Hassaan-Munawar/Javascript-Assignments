var currentYear =prompt("Enter current year")
var birthYear =prompt("Enter birth year")
var age =currentYear-birthYear
var optionalAge =currentYear-birthYear+1
document.write(`<h1>Age Calculator</h1> Current Year: ${currentYear} <br> Birth Year: ${birthYear} <br> You are either ${age} or ${optionalAge} year old`)