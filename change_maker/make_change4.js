const $ = selector => document.querySelector(selector);


//this function will evaluate the entry from the input cents, the method 
//will be called when the user clicks on the button.
function processEntry()
{
    //entry will receive the value from the input cents as a string
    var entry = document.getElementById("cents")
    //in the variable cents we parseInt entry.value to an integer
    var cents = parseInt(entry.value)
    
    //we created 4 variables to connect to the different input elements 
    //for quarters, dimes, nickels and pennies in the HTML document
    var quarters = document.getElementById("quarters")
    var dimes = document.getElementById("dimes")
    var nickels = document.getElementById("nickels")
    var pennies = document.getElementById("pennies")
    
    
    //we evaluate if the entry is between 0 and 99 
    if(cents>=0 && cents<=99)
    {
        //if true, we call the method makeChange with cents as a pararmeter
        makeChange(cents)  
    }  
    //else we clean the results for the input boxes of the 
    //quarters, dimes, nickels and pennies
    else
    {
        alert("the entry must be a number between 0 and 99 ")
        quarters.value = ""
        dimes.value = ""
        nickels.value = ""
        pennies.value = ""
    }
}

//this function will calculate the amount of coins depending on the entry value
function makeChange(entry)
{
    //we created 4 variables to connect to the different input elements 
    //for quarters, dimes, nickels and pennies in the HTML document
    var quarters = document.getElementById("quarters")
    var dimes = document.getElementById("dimes")
    var nickels = document.getElementById("nickels")
    var pennies = document.getElementById("pennies")

    //we create a variable that will store the amount of coins from each type
    var change 

    //calculate the amount of quarters
    //change saves the result of entry/25 
    change = parseInt(entry / 25)
    //entry takes the value of entry%25, 
    entry = entry%25
    //we display the value of "change" in the quarters input box as a string
    quarters.value = change.toString()//25
    

    //calculate the amount of diems
    change = parseInt(entry / 10)
    entry = entry%10
    dimes.value = change.toString() //10


//calculate the amount of nickels
    change = parseInt(entry / 5)
    entry = entry%5
    nickels.value = change.toString() //5


 //calculate the amount of pennies
    pennies.value = entry.toString()//1
    
}