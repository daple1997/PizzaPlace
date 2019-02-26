
    
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById("date").innerHTML = today.toString();

    function calculateTotal(){
        var pizzaQuant = parseFloat(document.getElementById("quantityPizza").value);
        var sandwichQuant = parseFloat(document.getElementById("quantitySandwich").value);
        var sandwichType = parseFloat(document.getElementById("typeSandwich").value);
        var sizePizza = parseFloat(document.getElementById("sizePizza").value);
        var sizeDrink = parseFloat(document.getElementById("sizeDrink").value);
        var address = document.getElementById("address").value;
        var Total = (pizzaQuant * sizePizza + 
            sandwichType * sandwichQuant + sizeDrink) * 1.05;
        var message = "Thank you for visiting City Delicatessen\n";
        message += ("Your total with tax is $" + Total + "\n");
        message += ("Your order will be delivered to "  + address);
        alert(message);
    }

    function register() {
        var name=document.getElementById("firstname").value;
        alert("Welcome "+name+"\nPlease pick from the pizza menu, sandwich menu " +
            "and the drinks menu");
	
    }
