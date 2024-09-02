var celTemp =prompt("Enter temperature in celsius")
var farTemp =prompt("Enter temperature in Farenheit")
var far =(celTemp*9/5)+32
var cel =(farTemp-32)*5/9
document.write(+ celTemp +" <sup>o</sup> C is "+far+" <sup>o</sup> F <br>"+farTemp+" <sup>o</sup> F is "+cel.toFixed(1)+" <sup>o</sup> C")