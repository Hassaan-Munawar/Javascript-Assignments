var table =prompt("Enter table number")
var len =prompt("Enter table length")
document.write("Multiplication table of "+table+"<br> Length "+len+"<br>")
for(var i=1;i<=len;i++){
    document.write(table+" x "+i+ "="+table*i+"<br>")
}