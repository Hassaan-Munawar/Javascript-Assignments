var favSnack =prompt("Enter your favourite snack")
var currentAge =prompt("Enter your current age")
var maxAge =prompt("Enter maximum age")
var maxAmount =prompt("Amount of favourite snacks per day")
var totalAge =maxAge*365
var total =maxAmount*totalAge
document.write(`<h1>The life time supply calculator</h1> Favourite Snacks: ${favSnack} <br> Current Age:${currentAge} <br> Estimated maximum age:${maxAge} <br> Amount of snacks per day: ${maxAmount} <br> You will need ${total} ${favSnack} to last you until the ripe old age of ${maxAge}`)