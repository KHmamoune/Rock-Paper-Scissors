playGame()

function computerPlay() {
    const play=["rock", "paper", "scissors"]
    return play[Math.floor(Math.random() * 3)]
}

function playGame() {
    for(let i=0; i < 5; i++) {

        do {
            playerSelection = prompt("please chose your play (rock, paper, scissors)", String)
            playerSelection = playerSelection.toLowerCase()
        } while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")

        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)
        
        if(result == "you win!") {
            console.log(result + " " + playerSelection + " beats " + computerSelection)
        }else if(result == "you lose!") {
            console.log(result + " " + playerSelection + " loses to " + computerSelection)
        }else {
            console.log(result + " " + playerSelection + " ties " + computerSelection)
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result
    if(playerSelection == "rock") {
        if(computerSelection == "rock") {
            result = "tie!"
        }else if(computerSelection == "paper") {
            result = "you lose!"
        }else {
            result = "you win!"
        }
    }else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            result = "you win!"
        }else if(computerSelection == "paper") {
            result = "tie!"
        }else {
            result = "you lose!"
        }
    }else {
        if(computerSelection == "rock") {
            result = "you lose!"
        }else if(computerSelection == "paper") {
            result = "you win!"
        }else {
            result = "tie!"
        }
    }
    return result
}