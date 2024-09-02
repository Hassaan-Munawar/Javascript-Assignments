var userInp = +prompt("Enter a number between 1 to 10")
var ran = Math .random()*11
var ran2 =ran.toFixed(0)
if(ran2 == userInp){
    alert("Congrats!You guess the right number..")
}
else{
    alert("Try Again..")
}