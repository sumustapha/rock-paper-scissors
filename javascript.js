var humanWinsCount = 0;
var computerWinsCount = 0;
var roundCount = 0;

function getChoice(){
    options = ["rock", "paper", "scissors"];
    const computerChoice = options[(Math.floor(Math.random()*options.length))];
    const humanChoice = prompt("Rock, paper or scissors").toLowerCase();
    console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`);
    return ([humanChoice, computerChoice]);
}

function checkRules(humanChoice, computerChoice){

    if(((humanChoice == "rock") && (computerChoice == "scissors")) || 
    ((humanChoice == "scissors") && (computerChoice == "paper")) ||
    ((humanChoice == "paper") && (computerChoice == "rock")))
    {
        console.log("human wins");
        humanWinsCount += 1;
    }

    else if(((humanChoice == "rock") && (computerChoice == "paper")) || 
    ((humanChoice == "scissors") && (computerChoice == "rock")) ||
    ((humanChoice == "paper") && (computerChoice == "scissors")))

    {
        console.log("computer wins");
        computerWinsCount += 1;
    }

    else if (humanChoice == computerChoice){
        console.log("it's a tie");
    }
    roundCount+=1;
}


function checkWins(humanWinsCount, computerWinsCount){
    console.log(`Human Wins ${humanWinsCount} :  ${computerWinsCount} Computer Wins`);
    if ((humanWinsCount == 5) || (computerWinsCount == 5)){
        console.log(`it's Over after ${roundCount} rounds`);
        return ((humanWinsCount>computerWinsCount) ? ("Human Wins") : ("Computer Wins"));
    }
    playGame();
}

function playGame(){
    const y = getChoice();
    const x = checkRules(y[0],y[1])
    checkWins(humanWinsCount, computerWinsCount)
}

playGame()