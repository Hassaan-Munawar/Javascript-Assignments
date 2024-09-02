var totalMarks =prompt("Enter total marks")
var obtainedMarks =prompt("Enter obtained marks")
var percentage =obtainedMarks/totalMarks*100
document.write(`<h1>Marksheet<h1>Total Marks: ${totalMarks}<br>Obtained Marks: ${obtainedMarks}<br>Percentage:${percentage.toFixed(2)}`)