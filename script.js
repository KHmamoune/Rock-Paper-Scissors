do {
    playerSelection = prompt("please chose your play (rock, paper, scissors)", String)
    playerSelection = playerSelection.toLowerCase()
} while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
computerSelection = computerPlay()

function computerPlay() {
    const play=["rock", "paper", "scissors"]
    return play[Math.floor(Math.random() * 3)]
}