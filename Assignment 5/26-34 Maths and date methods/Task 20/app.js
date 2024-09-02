var time = new Date()
var date = new Date("1 January , 2024").getTime()
var date2 =new Date().getTime()
var minus = date2-date
var convert = minus/(1000)
var convert2 =convert.toFixed(0)
document.write("On reference date "+time+",<br>"+convert2+" seconds had been passed since begining of 2024")