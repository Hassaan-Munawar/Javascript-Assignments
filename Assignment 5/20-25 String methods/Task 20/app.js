var userInp = prompt("Enter password")
var arr =["!","@",".",",","#","$","%","^","&","*","(",")","_","-","=","+","/","?",">","<","`","~"]
for(var i = 0 ; i<arr.length ; i++){
    if(userInp[0] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
   else if (userInp[1] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[2] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[3] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[4] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password") 
        break
    }
    else if (userInp[5] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[6] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[7] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[8] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[9] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
    else if (userInp[10] == arr[i]){
       document.write("Enter paswword: "+userInp+"<br>Password cannot contain special characters <br>Please enter a valid password")
        break
    }
}
if(userInp[0] >= 0){
   document.write("Enter paswword: "+userInp+"<br>Password cannot begin with number <br>Please enter a valid password")
}
else if (userInp.length < 6){
   document.write("Enter paswword: "+userInp+"<br>Password must contain 6 characters <br>Please enter a valid password")
}
else{
  document.write(" Enter paswword: "+userInp+"<br> Congratulations <br> Your password is valid")
}