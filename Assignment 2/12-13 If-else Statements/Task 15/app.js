var hour =prompt("Enter current hour in 24 hrs format")
if(hour<6){
    alert("Sorry you will have to wait or go to snacks")
}
else if(hour<9){
    alert("Breakfast is served")
}
else if(hour<13){
    alert("Time for lunch")
}
else if(hour<17){
    alert("Sorry you will have to wait or go to snacks")
}
else if (hour<20){
    alert("Time for dinner")
}
else if (hour<24){
    alert("Sorry you will have to wait or go to snacks")
}
else{
    alert("Please enter hours within 23")
}