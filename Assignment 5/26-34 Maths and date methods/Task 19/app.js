var time = new Date("12 March , 2024").getTime()
var time2 = new Date().getTime()
var minus = time2-time 
var convert = minus/(1000*60*60*24)
var convert2 = convert.toFixed(0)
document.write(convert2+" days have been passed since 1st Ramadan, 2024")