//                      Crystal Collector Game
// Psuedocode
//1. Assign/define variables.
     var playerCorrect = 0;
    var playerIncorrect = 0;
    var playerScore = 0;
    var count=30;
     
    //d. Timer countdown from 30 secs 
    var counter = setInterval(timer, 1000);
        function timer()
         {
            count=count-1;
        if (count <=0) {
            clearInterval(counter);
            $(".lead").text("Time is up: " + count);
            $(".score").text("Score (Correct/Incorrect): " + playerCorrect + "/" + playerIncorrect + "=" + playerScore + "%");
        }
        else {
            $(".lead").text("Time Remaining: " + count);
        }
    }

//      ***********************Question 1***********************
$(".btn1").on("click", function() {
        var btn1 = $(this).attr("value");
        console.log (btn1);
    if (btn1 === "false") {
        playerCorrect++
        playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
        console.log (playerCorrect);
        console.log (playerIncorrect);         
        console.log (playerScore);
        
    }
        
    else {
        playerIncorrect++
        console.log (playerCorrect);
        console.log (playerIncorrect);
    
        playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
         console.log (playerScore); 
    }
           
})
//      ***********************Question 2***********************
$(".btn2").on("click", function() {
    var btn2 = $(this).attr("value");
    console.log (btn2);
if (btn2 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 1***********************
$(".btn3").on("click", function() {
    var btn3 = $(this).attr("value");
    console.log (btn3);
if (btn3 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 4***********************
$(".btn4").on("click", function() {
    var btn4 = $(this).attr("value");
    console.log (btn4);
if (btn4 === "false") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 5***********************
$(".btn5").on("click", function() {
    var btn5 = $(this).attr("value");
    console.log (btn5);
if (btn5 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 1***********************
$(".btn6").on("click", function() {
    var btn6 = $(this).attr("value");
    console.log (btn6);
if (btn6 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 7***********************
$(".btn7").on("click", function() {
    var btn7 = $(this).attr("value");
    console.log (btn7);
if (btn7 === "false") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}

//      ***********************Question 8***********************
$(".btn8").on("click", function() {
    var btn8 = $(this).attr("value");
    console.log (btn8);
if (btn8 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 9***********************
$(".btn9").on("click", function() {
    var btn9 = $(this).attr("value");
    console.log (btn9);
if (btn9 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})

//      ***********************Question 10***********************
$(".btn10").on("click", function() {
    var btn10 = $(this).attr("value");
    console.log (btn10);
if (btn10 === "true") {
    playerCorrect++
    playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
    console.log (playerCorrect);
    console.log (playerIncorrect);         
    console.log (playerScore);
    
}
    
else {
    playerIncorrect++
    console.log (playerCorrect);
    console.log (playerIncorrect);

     playerScore = ((playerCorrect / (playerCorrect + playerIncorrect)) *100);
     console.log (playerScore); 
}
       
})
       
})

function reset() {
     playerScore = 0;
    $("#playerScore").text(playerScore);}




