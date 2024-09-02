var string1 = prompt("Input string 1")
var string2 = prompt("Input string 2")
if(string1.length > string2.length){
    alert(string1+" is greater than "+string2)
}
else if(string1.length < string2.length){
    alert(string2+" is greater than "+string1)
}
else {
    alert(string1+" and "+string2+" are equal")
}