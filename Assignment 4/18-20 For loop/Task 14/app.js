var scores =[12, 45, 3, 22, 34, 50]
var userinp =prompt("Enter stop value")
var flag = false
for(var i=0;i<scores.length;i++){
    if(userinp==scores[i]){
        flag =true
        alert(i)
        break
     }
    for(var j = -1 ;j<=i;j++){
        document.write(scores[i]+" , ")
        break
    }
}
document.write(userinp)