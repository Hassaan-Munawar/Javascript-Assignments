var teamname1 =prompt("Enter team 1 name")
var teamname2 =prompt("Enter team 2 name")
var score1 =prompt("Enter team 1 total score")
var score2 =prompt("Enter team 2 total score")
if(score1>score2){
    alert("Team "+teamname1+" won the game")
}
else if(score1<score2){
    alert("Team "+teamname2+" won the game")
}
else if(score1==score2){
    alert("Game was tied")
}