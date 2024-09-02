var arr =[]
var numofitems =+prompt("Enter number of items")
for(var i=0;i<numofitems;i++){
    arr[i] =prompt("Enter value for index "+i)
}
document.write("Number of items:"+numofitems+"<br> Items:<br>")
for(var j=0;j<arr.length;j++){
    document.write(arr[j]+"<br>")
}