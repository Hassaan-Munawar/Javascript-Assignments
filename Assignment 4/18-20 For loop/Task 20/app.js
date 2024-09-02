// var userInp =prompt("Enter number of lines")
// for(var i = 1; i<=userInp ; i++){
//     for(var j = 1; j<=userInp ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// var userInp =prompt("Enter number of lines")
// for(var i = 1; i<=userInp ; i++){
//     for(var j = 1; j<=i ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }



var userInp =prompt("Enter number of lines")
for(var i = 1; i<=userInp ; i++){
    for(var j = i; j<=userInp ; j++){
        document.write("*")
    }
    document.write("<br>")
}