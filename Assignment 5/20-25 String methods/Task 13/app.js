var user = prompt("Enter")
var res = user.slice(0,1).toUpperCase()
var res2 =user.slice(1).toLowerCase()
var concat = res+res2
document.write("User inp: "+user+"<br> Title case: "+concat)