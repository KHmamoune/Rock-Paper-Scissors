const btn1= document.querySelector(".btn1")
btn1.addEventListener("click", () => {playerSelection = btn1.textContent; play(playerSelection)})
const btn2= document.querySelector(".btn2")
btn2.addEventListener("click", () => {playerSelection = btn2.textContent; play(playerSelection)})
const btn3= document.querySelector(".btn3")
btn3.addEventListener("click", () => {playerSelection = btn3.textContent; play(playerSelection)})

function play(playerSelection) {
    computerSelection = computerPlay()
    result = playRound(playerSelection, computerSelection)

    if(result == "you win!") {
        document.querySelector(".result").textContent = result + " " + playerSelection + " beats " + computerSelection
    }else if(result == "you lose!") {
        document.querySelector(".result").textContent = result + " " + playerSelection + " loses to " + computerSelection
    }else {
        document.querySelector(".result").textContent = result + " " + playerSelection + " ties " + computerSelection
    }
}

function computerPlay() {
    const play=["rock", "paper", "scissors"]
    return play[Math.floor(Math.random() * 3)]
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