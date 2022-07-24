const weapons = ["rock", "paper", "scissors"]
let hScore = 0;
let cScore = 0;
let round = 1;
let normalPlay = document.querySelector(".game")
let modalPlay = document.querySelector("#modal-game")

let computerScore = document.getElementById("cpuScore")
let humanScore = document.getElementById("hScore")
let winner = document.getElementById('battleResultId')
let winLoseDraw = ""


let winloseText = document.getElementById("winlose")
const roundCount = document.getElementById("round")
const resetScreen = document.getElementById("resetModal")
const blankScreen = document.getElementById('gameConsole')


//get User Weapon Selection

const userSelection = document.querySelectorAll('.weapon')
userSelection.forEach((item) => {
    item.addEventListener('click', getWeaponId)
})

function getHigest(a,b){
    if(a > b)
        c = a
    else
        c = b;
    return c;
}

function showPlay(hWeapon,cWeapon){
    normalPlay.style.display = "none"
    modalPlay.style.display = "flex"
    const playerWeapon = document.getElementById('playerWeapon')
    playerWeapon.innerHTML = `
    <h1>You Selected ${hWeapon}</h1>
    <img src="images/${hWeapon}.png" alt="${hWeapon}">
    `
    const cpuWeapon = document.getElementById('cpuWeapon')
    cpuWeapon.innerHTML = `
    <h1>Computer Selected ${cWeapon}</h1>
    <img src="images/${cWeapon}.png" alt="${cWeapon}">
    `

}

//remove playing modal
function hidePlay(){
    normalPlay.style.display = "flex"
    modalPlay.style.display = "none"
}

function getWeaponId(event){
    // return clicked image alt
    const humanWeapon = event.target.alt
    const computerWeapon = weapons[Math.floor(Math.random()*weapons.length)]
    showPlay(humanWeapon, computerWeapon)
    setTimeout(hidePlay,1500)
    // compare choices and see if game is over
    
    let highestScore = getHigest(hScore,cScore)
    if((highestScore<5))
        playGame(humanWeapon,computerWeapon)
    
}

function playGame(hw,cw){
    let high = undefined
    let scores = undefined
    let  wl = undefined
    round++
    roundCount.innerText = round
    switch(hw + cw){
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            winLoseDraw = "DREW"
            winner.textContent = `You ${winLoseDraw}`
            break;
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            hScore++; // optimize by returning hScore and Cscores
            high = (hScore>cScore)?hScore:cScore
            scores = gameOver(hScore,cScore).score
            wl = gameOver(hScore,cScore).winlose
            if(high===5){
                reset(wl)
                normalPlay.style.display = "none"
                modalPlay.style.display = "none"
            }
            humanScore.innerText = hScore;
            winLoseDraw = "WIN"
            winner.textContent = `You ${winLoseDraw}`
            break;
        default:
            cScore++;
            high = (hScore>cScore)?hScore:cScore
            scores = gameOver(hScore,cScore).score
            wl = gameOver(hScore,cScore).winlose
            if(high===5){
                reset(wl)
                normalPlay.style.display = "none"
                modalPlay.style.display = "none"
            }
            computerScore.innerText = cScore; 
            winLoseDraw = "LOSE" 
            winner.textContent = `You ${winLoseDraw}`       
    }
}

function gameOver(hScore,cScore){
let gameDetails = {score:0,winlose:'win'}
    if(hScore > cScore){
        gameDetails.score=hScore
        gameDetails.winlose='win'
        return gameDetails
    }
    else{
            gameDetails.score=cScore
            gameDetails.winlose='lose'
            return gameDetails
        }
}

function reset(result){
    blankScreen.style.display = "none"
    resetScreen.style.display = "flex"
    winloseText.innerText = result
    const playAgain = document.getElementById("reset")
    playAgain.addEventListener('click', function(){
        hScore = 0
        cScore = 0
        round = 1
        roundCount.innerText = 1
        humanScore.innerText = 0
        computerScore.innerText = 0
        blankScreen.style.display = "flex"
        resetScreen.style.display = "none"
    })
    

}