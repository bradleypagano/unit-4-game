$(document).ready(function(){
    let wins = 0;
    let losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: "+ losses);
    let computerNumber = Math.floor(Math.random()*(120-19)+19);
    $(".randomNum").text(computerNumber);
    let playerNumber = 0;
    $(".yourNum").text(playerNumber);

    let randomNum1 = Math.floor(Math.random()*(12-1)+1);
    $("#choice1").val(randomNum1);
    let randomNum2 = Math.floor(Math.random()*(12-1)+1);
    $("#choice2").val(randomNum2);
    let randomNum3 = Math.floor(Math.random()*(12-1)+1);
    $("#choice3").val(randomNum3);
    let randomNum4 = Math.floor(Math.random()*(12-1)+1);
    $("#choice4").val(randomNum4);

    function reset(){
        computerNumber = Math.floor(Math.random()*(120-19)+19);
        $(".randomNum").text(computerNumber);
        playerNumber = 0;
        $(".yourNum").text(playerNumber);
        randomNum1 = Math.floor(Math.random()*(12-1)+1);
        $("#choice1").val(randomNum1);
        randomNum2 = Math.floor(Math.random()*(12-1)+1);
        $("#choice2").val(randomNum2);
        randomNum3 = Math.floor(Math.random()*(12-1)+1);
        $("#choice3").val(randomNum3);
        randomNum4 = Math.floor(Math.random()*(12-1)+1);
        $("#choice4").val(randomNum4);
    };

    $("#choice1").on("click", function(){
        playerNumber = randomNum1 + playerNumber;
        $(".yourNum").text(playerNumber);
        if (computerNumber === playerNumber){
            $(".emptyDiv").text("Congrats! You did it...");
            wins++;
            $(".wins").text("Wins: " + wins);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset(); 
        } else if (playerNumber > computerNumber){
            $(".emptyDiv").text("You are a disappointment to your species...");
            losses++;
            $(".losses").text("Losses: "+ losses);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset();
        };
    });
    $("#choice2").on("click", function(){
        playerNumber= randomNum2 + playerNumber;
        $(".yourNum").text(playerNumber);
        if (computerNumber === playerNumber){
            $(".emptyDiv").text("Congrats! You did it...");
            wins++;
            $(".wins").text("Wins: " + wins);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset(); 
        } else if (playerNumber > computerNumber){
            $(".emptyDiv").text("You are a disappointment to your species...");
            losses++;
            $(".losses").text("Losses: "+ losses);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset();
        };
    });
    $("#choice3").on("click", function(){
        playerNumber= randomNum3 + playerNumber;
        $(".yourNum").text(playerNumber);
        if (computerNumber === playerNumber){
            $(".emptyDiv").text("Congrats! You did it...");
            wins++;
            $(".wins").text("Wins: " + wins);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset(); 
        } else if (playerNumber > computerNumber){
            $(".emptyDiv").text("You are a disappointment to your species...");
            losses++;
            $(".losses").text("Losses: "+ losses);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset();
        };
    });
    $("#choice4").on("click", function(){
        playerNumber= randomNum4 + playerNumber;
        $(".yourNum").text(playerNumber);
        if (computerNumber === playerNumber){
        $(".emptyDiv").text("Congrats! You did it...");
            wins++;
            $(".wins").text("Wins: " + wins);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset(); 
        } else if (playerNumber > computerNumber){
            $(".emptyDiv").text("You are a disappointment to your species...");
            losses++;
            $(".losses").text("Losses: "+ losses);
            setInterval(() => {
                $(".emptyDiv").empty();
            }, 7000);
            reset();
        };
    });
    
});
