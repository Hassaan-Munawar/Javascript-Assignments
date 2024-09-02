var month = new Date().getMonth()

document.write("<h1>K-Electric Bill</h1>Customer Name: Muhammad Hassaan <br> Number of units: 450 <br> Charges per unit: 14 <br>")
if(month == 0 ){
    document.write(" Month: January")
}
else if (month == 1 ){
    document.write(" Month: Feburary")
}
else if (month == 2 ){
    document.write(" Month: March")
}
else if (month == 3 ){
    document.write(" Month: April")
}
else if (month == 4 ){
    document.write(" Month: May")
}
else if (month == 5 ){
    document.write(" Month: June")
}
else if (month == 6 ){
    document.write(" Month: July")
}
else if (month == 7 ){
    document.write(" Month: August")
}
else if (month == 8 ){
    document.write(" Month: September")
}
else if (month == 9 ){
    document.write(" Month: October")
}
else if (month == 10 ){
    document.write(" Month: November")
}
else if (month == 11 ){
    document.write(" Month: December")
}
document.write("<br><br> Net amount payable (within due date): 6300<br>Late payment surcharge: 500 <br> Gross amount payable (after due date): 6800")