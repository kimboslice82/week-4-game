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
    
$("#win-counter").html(wins); 
$("#loss-counter").html(losses);  

function reset()  {
        $("#main-number").html(mainNumber);
        $("#crystal1").html(crystalNumber1);
        $("#crystal2").html(crystalNumber2);
        $("#crystal3").html(crystalNumber3);
        $("#crystal4").html(crystalNumber4); 
        counter = 0;
        
    };


//click events to add the scores in the counter
$("#crystal1").click(function() {
  counter = counter + crystalNumber1;
    console.log("New counter= " + counter);
    
    $("#total-score").text(counter); 
    
    if (counter === mainNumber) {
 	wins++; reset(); 

    }
    else if (counter > mainNumber) {
    	losses++; reset();
                      
    }
     }); 
    
$("#crystal2").click(function() {
    counter = counter + crystalNumber2;
    $("#total-score").text(counter);
    
    if (counter === mainNumber) {
 	wins++; reset(); 

    }
    else if (counter > mainNumber) {
    losses++; reset();
                      
    }
    }); 
    
$("#crystal3").click(function() {
    counter = counter + crystalNumber3;
    $("#total-score").text(counter);
    
    if (counter === mainNumber) {
 	wins++; reset(); 

    }
    else if (counter > mainNumber) {
    	losses++;reset();                      
    }
    }); 
    
$("#crystal4").click(function() {
    counter = counter + crystalNumber4;
    $("#total-score").text(counter);
    
    if (counter === mainNumber) {
 wins++; reset(); 

    }
    else if (counter > mainNumber) {
    	losses++; reset();
                      
    }
    }); 
    
 
 
    
});

