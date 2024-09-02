var arr =["cake", "apple","pie", "cookie", "chips", "patties"]
var userinp =prompt("Welcome to ABC bakery.What do you want to order sir/ma'am")
var flag =false
for(var i =0;i<arr.length;i++){
    if(userinp==arr[i]){
        flag =true
        alert(userinp+" is available at index "+i+" in our bakery...")
        break
    }
}
if(flag==false){
    alert("We are sorry."+userinp+" is not available in our bakery....")
}