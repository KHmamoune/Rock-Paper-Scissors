let wins=0, losses=0, n=5;

const rnd1= document.querySelector(".rnd1")
rnd1.addEventListener("click", () => {n=1; losses=0; wins=0})
const rnd2= document.querySelector(".rnd2")
rnd2.addEventListener("click", () => {n=5; losses=0; wins=0})
const rnd3= document.querySelector(".rnd3")
rnd3.addEventListener("click", () => {n=10; losses=0; wins=0})
const rnd4= document.querySelector(".rnd4")
rnd4.addEventListener("click", () => {n=100; losses=0; wins=0})

const btn1= document.querySelector(".btn1")
btn1.addEventListener("click", () => {
    playerSelection = "Hammer"; 
    document.querySelector(".final").textContent = ""
    play(playerSelection)
})

const btn2= document.querySelector(".btn2")
btn2.addEventListener("click", () => {
    playerSelection = "Sheild";
    document.querySelector(".final").textContent = "" 
    play(playerSelection)
})

const btn3= document.querySelector(".btn3")
btn3.addEventListener("click", () => {
    playerSelection = "Bow"; 
    document.querySelector(".final").textContent = ""
    play(playerSelection)
})

function play(playerSelection) {
    computerSelection = computerPlay()
    result = playRound(playerSelection, computerSelection)

    if(result == "you win!") {
        document.querySelector(".result").textContent = result + " " + playerSelection + " beats " + computerSelection
        wins++ 
    }else if(result == "you lose!") {
        document.querySelector(".result").textContent = result + " " + playerSelection + " loses to " + computerSelection
        losses++
    }else {
        document.querySelector(".result").textContent = result + " " + playerSelection + " ties " + computerSelection
    }
    document.querySelector(".win").textContent = "Player:" + wins 
    document.querySelector(".loss").textContent = "Computer:" + losses

    if(wins == n){
        document.querySelector(".final").setAttribute("style","color:gold")
        document.querySelector(".final").textContent = "Player Wins"
        wins = 0
        losses = 0
    }else if(losses == n){
        document.querySelector(".final").setAttribute("style","color:purple")
        document.querySelector(".final").textContent = "Computer Wins"
        wins = 0
        losses = 0
    }
}

function computerPlay() {
    const play=["Hammer", "Bow", "Sheild"]
    return play[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let result
    if(playerSelection == "Hammer") {
        if(computerSelection == "Hammer") {
            result = "tie!"
        }else if(computerSelection == "Bow") {
            result = "you lose!"
        }else {
            result = "you win!"
        }
    }else if(playerSelection == "Bow") {
        if(computerSelection == "Hammer") {
            result = "you win!"
        }else if(computerSelection == "Bow") {
            result = "tie!"
        }else {
            result = "you lose!"
        }
    }else {
        if(computerSelection == "Hammer") {
            result = "you lose!"
        }else if(computerSelection == "Bow") {
            result = "you win!"
        }else {
            result = "tie!"
        }
    }
    return result
}