var sub1 =+prompt("Enter Marks of first subject out of 100")
var sub2 =+prompt("Enter Marks of second subject out of 100")
var sub3 =+prompt("Enter Marks of third subject out of 100")
var obtainedMarks =sub1 +sub2 +sub3
var perc = obtainedMarks/300*100
document.write(`<h1>Marksheet</h1> Total marks:300 <br> Obtained marks:${obtainedMarks} <br> Percentage:${perc.toFixed(2)} <br>`)
if(perc>=80){
    document.write("Grade:A+ <br> Remarks:Tremendous")
}
else if(perc>=70){
    document.write("Grade:A <br> Remarks:You need to improve")
}
else if(perc>=60){
    document.write("Grade:B <br> Remarks:Focus on studies")
}
else if(perc>=50){
    document.write("Grade:C <br> Remarks:poor")
}
else if(perc>=40){
    document.write("Grade:F <br> Remarks:Fail..")
}
