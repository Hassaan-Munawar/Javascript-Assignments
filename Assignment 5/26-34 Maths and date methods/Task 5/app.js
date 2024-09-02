var userInp = prompt("Enter value")
var copy = userInp.slice(1)
var absolute =userInp.startsWith("-")
if(absolute == true ){
    document.write("The absolute value of "+userInp+" is "+copy)
} 
else{
    document.write("The absolute value of "+userInp+" is "+userInp)
}