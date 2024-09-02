var time = new Date()
var datem = new Date().getHours()-1
var time2 = new Date().toString()
var time3 = time2.slice(0,16)+datem+time2.slice(18)
document.write("Current date: "+time+"<br> 1 hour ago it was "+time3)