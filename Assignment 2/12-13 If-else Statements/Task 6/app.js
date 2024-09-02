var input =prompt("Enter")
var firstAplha = input.slice(0).toUpperCase()
var secondAplha = input.slice(0).toLowerCase()
if(input>=0){
    alert("It is a number")
}
else if(input==firstAplha){
    alert("It is a upper case")
}
else {
    alert("It is a lower case")
}