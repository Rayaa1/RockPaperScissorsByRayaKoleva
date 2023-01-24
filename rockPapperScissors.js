function rockPapperScissors(playerTurns) {
    const rock = "Rock";
    const papper = "Papper";
    const scissors = "Scissors";
    if (playerTurns == "r" || playerTurns == "rock") {
        playerTurns = "Rock";
    } else if (playerTurns == "p" || playerTurns == "papper") {
        playerTurns = "Papper";
    } else if (playerTurns == "s" || playerTurns ==
        "scissors") {
        playerTurns =
            "Scissors"
    } else {
        console.log("Invalid Input. Try Again...");
    }
    console.log(`You choose ${playerTurns}`);
    let computerRandomMove = Math.floor((Math.random() * 3) + 1);
    let computerTurn = "";
    switch (computerRandomMove) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = papper;
            break;
        case 3:
            computerTurn = scissors;
            break;
    }
    console.log(`The computer chooses ${computerTurn}`);

    if (playerTurns === rock && computerTurn ===
        scissors || playerTurns === papper && computerTurn === rock || playerTurns ===
        scissors && computerTurn === papper) {
        console.log("You win!🏆")
    } else if (computerTurn === rock && playerTurns ===
        scissors || computerTurn === papper && playerTurns === rock || computerTurn ===
        scissors && playerTurns === papper) {
        console.log("You lose!😔")
    } else {
        console.log("This game was a draw!🙂")
    }
}
rockPapperScissors()