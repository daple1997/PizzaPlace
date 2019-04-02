
    function mydate(){
        var today = new Date();
        document.getElementById("mydate").innerHTML = today.toString();
    }
    var customer=[];
    var i=0;
    var totalCost = [];
    function newPizza(){
        
        var quantityPizza = document.querySelector("#quantityPizza1").value;
        var totalCostPizza = parseFloat(0);
        //Size pizza
        var sizePizza = "";    
        if(document.getElementById("sizePizza1").checked){
            sizePizza = "Small";
            totalCostPizza += parseFloat(document.getElementById("sizePizza1").value);
                totalCostPizza *= quantityPizza;
        }
        else if(document.getElementById("sizePizza2").checked){
            sizePizza = "Medium";
            totalCostPizza += parseFloat(document.getElementById("sizePizza2").value);
            totalCostPizza *= quantityPizza;
        }
        else if(document.getElementById("sizePizza3").checked){
            sizePizza = "Large";
            totalCostPizza += parseFloat(document.getElementById("sizePizza3").value);
            totalCostPizza *= quantityPizza;
        }
        else if(document.getElementById("sizePizza4").checked){
            sizePizza = "Extra-Large";
            totalCostPizza += parseFloat(document.getElementById("sizePizza4").value);
            totalCostPizza *= quantityPizza;    
        }
        //type pizza
        var typePizza = "";
        if(document.getElementById("typePizza1").checked){
            typePizza = document.getElementById("typePizza1").
                value;
        }
        else if(document.getElementById("typePizza2").checked){
            typePizza = document.getElementById("typePizza2").
                value;
        }
        else if(document.getElementById("typePizza3").checked){
            typePizza = document.getElementById("typePizza3").
                value;
        }
        // //topping
        var toppings = "";
        if(document.getElementById("pizzaTopping1").checked){
            toppings += " , " + document.getElementById("pizzaTopping1").
                value;
            totalCostPizza += 1.75;    
        }
        if(document.getElementById("pizzaTopping2").checked){
            toppings +=  " , " + document.getElementById("pizzaTopping2").
                value;
            totalCostPizza += 1.75;  
        }
        if(document.getElementById("pizzaTopping3").checked){
            toppings += " , " +  document.getElementById("pizzaTopping3").
                value;
            totalCostPizza += 1.75;      
        }
        totalCost.push(parseFloat(totalCostPizza));
        totalCostPizza = totalCostPizza.toFixed(2);
        
        totalCostPizza = totalCostPizza.toString();
        var newPizza = "";
        newPizza = quantityPizza + " " + sizePizza + " " + typePizza + toppings + " $" + totalCostPizza; 
        customer.push(newPizza);
        
	    displayList();
        alert("You have made an order!\n" +
        "Your latest order is at the bottom in the Customer orders menu\n" +
        "You can choose from the order menus\n" +
            "or edit this menu and resubmit the order!");
    }
    function newSandwich(){
        //totalCost
        var totalCostSandwich = parseFloat(0);
        //quantity
        var quantitySandwich = parseInt(document.getElementById("quantitySandwich").value);
        //type
        var typeSandwich = "";
        if(document.getElementById("typeSandwich1").checked){
            var typeSandwich = "All Garden Vagetarian";
            totalCostSandwich += parseFloat(document.getElementById("typeSandwich1").value);
            totalCostSandwich *= quantitySandwich;
        }
        if(document.getElementById("typeSandwich2").checked){
            var typeSandwich = "Big Beef on a Bun";
            totalCostSandwich += parseFloat(document.getElementById("typeSandwich2").value);
            totalCostSandwich *= quantitySandwich;
        }
        if(document.getElementById("typeSandwich3").checked){
            var typeSandwich = "Mixed Grill";
            totalCostSandwich += parseFloat(document.getElementById("typeSandwich3").value);
            totalCostSandwich *= quantitySandwich;
        }
        totalCostSandwich = totalCostSandwich.toFixed(2);
        totalCost.push(parseFloat(totalCostSandwich));
        totalCostSandwich = totalCostSandwich.toString();
        var newSandwich = quantitySandwich + " " +  typeSandwich + " $" + totalCostSandwich;
        customer.push(newSandwich);
        displayList();
        alert("You have made an order!\n" +
        "Your latest order is at the bottom in the Customer orders menu\n" +
        "You can choose from the order menus\n" +
            "or edit this menu and resubmit the order!");
    }
    function newDrink(){
        //total
        var totalCostDrink = parseFloat(0);
        //quantity
        var quantityDrink = parseInt(document.getElementById("quantityDrinks").value);
        //type drink
        var typeDrink = "";
        if(document.getElementById("typeDrink1").checked){
            typeDrink =  document.getElementById("typeDrink1").value;
        }
        if(document.getElementById("typeDrink2").checked){
            typeDrink =  document.getElementById("typeDrink2").value;
        }
        if(document.getElementById("typeDrink3").checked){
            typeDrink =  document.getElementById("typeDrink3").value;
        }
        //size
        var sizeDrink = "";
        if(document.getElementById("sizeDrink1").checked){
            sizeDrink =  "Small";
            totalCostDrink = parseFloat(document.getElementById("sizeDrink1").value);
            totalCostDrink *= quantityDrink;
        }
        if(document.getElementById("sizeDrink2").checked){
            typeDrink =  "Medium";
            totalCostDrink = parseFloat(document.getElementById("sizeDrink2").value);
            totalCostDrink *= quantityDrink;
        }
        if(document.getElementById("sizeDrink3").checked){
            typeDrink =  "Large";
            totalCostDrink = parseFloat(document.getElementById("sizeDrink3").value);
            totalCostDrink *= quantityDrink;
        }
        totalCost.push(parseFloat(totalCostDrink));
        console.log(totalCost);
        totalCostDrink = totalCostDrink.toFixed(2);
        
        totalCostDrink = totalCostDrink.toString();
        var newDrink = quantityDrink + " " +  typeDrink + " $" + totalCostDrink;
        customer.push(newDrink);
        //console.log(totalCost);
        displayList();
        alert("You have made an order!\n" +
        "Your latest order is at the bottom in the Customer orders menu\n" +
        "You can choose from the order menus\n" +
            "or edit this menu and resubmit the order!");
    }
    function displayList() {
        var pizzaOrder;
        var displayRadioButtons = "";
        
        for(var i=0; i< customer.length;i++)
        {
                 
             pizzaOrder = customer[i];
             
             //create radio button elements
             displayRadioButtons+="<input type=radio name=listitem ";
             displayRadioButtons+=" value=" + i + " ";
             displayRadioButtons+=" onchange=deleteItem(this.value)>";
             displayRadioButtons+=pizzaOrder+"<br>";
             
             
        }
             
    
    document.querySelector("#orders").innerHTML=displayRadioButtons;
    }
    
    function deleteItem(i) {
        customer.splice(i,1);
        totalCost.splice(i,1);
        console.log(totalCost);
        displayList();
        
    }

    function register() {
        var name=document.getElementById("firstname").value;
        alert("Welcome "+name+"\nPlease pick from the pizza menu, sandwich menu " +
            "and the drinks menu.");
	
    }
    function getFinalOrder(){
        if(totalCost.length != 0){
            var firstname = document.getElementById("firstname").value;
            var lastname = document.getElementById("lastname").value;
            var address = document.getElementById("address").value;
            var phone = document.getElementById("phone").value;
            var message = firstname + " " + lastname + "\n";
            var sumTotalCost = parseFloat(0);
            for(var x = 0; x < totalCost.length; x++){
                sumTotalCost += parseFloat(totalCost[x]);
            }
            message += address + "\n";
            message += phone + "\n";
            message += "Total Cost: $" + sumTotalCost.toFixed(2) + "\n";
            message += "Come again!";
            alert(message);
        }
        else{
            alert("Error!\nMust filled out an order from any of the menus");
        }    
    }
