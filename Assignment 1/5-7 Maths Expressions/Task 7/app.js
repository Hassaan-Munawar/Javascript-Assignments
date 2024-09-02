var item1 =+prompt("Price of item 1")
var item2 =+prompt("Price of item 2")
var quan1 =+prompt("Ordered quantity of item 1")
var quan2 =+prompt("Ordered quantity of item 2")
var shipCharges = 150
var total1 =item1*quan1 
var total2 =item2*quan2
var finalTotal =total1+total2
document.write(`<h1>Shopping Cart</h1><br><br>Price of item 1 is ${item1} <br> Quantity of item 1 is ${quan1} <br> Price of item 2 is ${item2} <br> Quantity of item 2 is ${quan2}<br><br>Shipping Charges ${shipCharges} <br><br> Total cost of your order is ${finalTotal} PKR `)
