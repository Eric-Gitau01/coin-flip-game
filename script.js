



function chooseHead() {
    // Randomly choose between 'head' or 'tail' for the computer's move.
    // This is a simple example, a more complex strategy could be used for a more intelligent computer.
    // For example, a strategy could be to always choose the same move as the player, or to choose the opposite move.
    // However, this would be a very basic example and not suitable for a real-world game.
    let computerMove = ' ';
    let randomMove = Math.random();
   
    if (randomMove >= 0 && randomMove < 0.5) {
        computerMove = 'head';
    } else if (randomMove >= 0 && randomMove < 1) {
        computerMove = 'tail';
    }
    console.log(computerMove);

    let result = " "
    if (computerMove === "head") {
        result = "you both wins!";
    } if (computerMove === "tail") {
        result = "you wins!";
    }
    alert(`you picked heads, computer picked ${computerMove}. ${result}`);
}

function chooseTail() {
    // Call the chooseHead function with the tail choice.
    let computerMove = '';
    let randomMove = Math.random();
    if (randomMove >= 0 && randomMove < 0.5) {
        computerMove = 'head';
    } else if (randomMove >= 0 && randomMove < 1) {
        computerMove = 'tail';
    }

    let result = " "
    if (computerMove === "head") {
        result = "you loses!";
    } if (computerMove === "tail") {
        result = "you both wins!";
    }
    alert(`you picked tails, computer picked ${computerMove}. ${result}`);
}

