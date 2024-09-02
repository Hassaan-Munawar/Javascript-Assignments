var date = new Date()
var time = new Date().getTime()
var mins = time/(1000*60)
document.write("Current date: "+date+"<br>Elapsed milliseconds since January 1,1970: "+time+"<br>Elapsed minutes since January 1,1970: "+mins)