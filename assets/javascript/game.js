$(document).ready(function(){
    let wins = 0;
    let losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses "+ losses);
    let computerNumber = Math.floor(Math.random()*(120-19)+19);
    $(".randomNum").text(computerNumber);
    let playerNumber = 0;
    $(".yourNum").text(playerNumber);

    let randomNum1 = Math.floor(Math.random()*(12-1)+1);
    let randomNum2 = Math.floor(Math.random()*(12-1)+1);
    let randomNum3 = Math.floor(Math.random()*(12-1)+1);
    let randomNum4 = Math.floor(Math.random()*(12-1)+1);

    $(".crystal").on("click", function(){
        if (computerNumber === playerNumber){
            $(".scoreCard").append("<div>Congrats! You did it...</div>");
            wins++; 
        } else if (playerNumber > computerNumber){
            $(".scoreCard").append("<div>You are a disappointment to your species...</div>");
            losses++;
        } else if (playerNumber < computerNumber){
            $(".yourNum").add()
        };
    });
});
