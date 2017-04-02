$(document).ready(function() {


var mainNumber = [];
var crystalNumber1 = [];
var crystalNumber2 = [];
var crystalNumber3 = [];
var crystalNumber4 = [];
var wins = 0;
var losses = 0;
var counter = 0;


//this generates the number to be guessed between 19-120
mainNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19; {
    console.log(mainNumber);
}

//the following generate the hidden crystal numbers from 1-12
crystalNumber1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1; {
    console.log(crystalNumber1);
}

crystalNumber2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1; {
    console.log(crystalNumber2);
}
crystalNumber3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1; {
    console.log(crystalNumber3);
}
crystalNumber4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1; {
    console.log(crystalNumber4);
}
 
//the calls the random number and displays on the DOM    
$("#main-number").html(mainNumber);
    
//assigns the random numbers to the crystals..might be redundant
$("#crystal1").html(crystalNumber1);
$("#crystal2").html(crystalNumber2);
$("#crystal3").html(crystalNumber3);
$("#crystal4").html(crystalNumber4);
    
$("#total-score").html(counter); {
    console.log(counter);
}



$("#crystal1").click(function() {
   $("#total-score").html(crystalNumber1);
    }); 
    
$("#crystal2").click(function() {
   $("#total-score").html(crystalNumber2);
    }); 
    
$("#crystal3").click(function() {
   $("#total-score").html(crystalNumber3);
    }); 
    
$("#crystal4").click(function() {
   $("#total-score").html(crystalNumber4);
    }); 
    
    


});