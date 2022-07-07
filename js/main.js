//psuedo-code
// bot that randomly plays RPS
// allow user to select choice using onclick
// conditional that decides who has won and adds 1 to the tally
// reset button


let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let reset = document.getElementById("reset")

let userScore=0
let botScore=0

rock.onclick = showRock
paper.onclick = showPaper
scissors.onclick = showScissors
reset.onclick = reset

function rockPaperScissors(){
    let random = Math.ceil(Math.random() * 3)
       if(random===1){
        return "rock"
       }
       else if(random===2){
        return "paper"
       }
       else{
           return "scissors"
       }
    }

function playGame(userChoice){
    let botChoice = rockPaperScissors()
    if((userChoice === "rock" && botChoice==="paper") || (userChoice ==="paper" && botChoice==="scissors") || (userChoice === "scissors" && botChoice==="rock")){
        return "You lose!"
    }
    else if (userChoice === botChoice){
        return "It's a draw!"
    }
    else{
        return "You win!"
    }
}


function showRock(){
let result = playGame("rock")
document.getElementById("gameResult").innerText = result
if(result==="You win!"){
    userScore+=1
    document.getElementById("userScore").innerText = userScore
}
else if(result==="You lose!"){
    botScore+=1
    document.getElementById("botScore").innerText = botScore
}
}

function showPaper(){
    let result = playGame("paper")
    document.getElementById("gameResult").innerText = result
    if(result==="You win!"){
        userScore+=1
        document.getElementById("userScore").innerText = userScore
    }
    else if(result==="You lose!"){
        botScore+=1
        document.getElementById("botScore").innerText = botScore
    }
    }

function showScissors(){
    let result = playGame("scissors")
    document.getElementById("gameResult").innerText = result
     if(result==="You win!"){
        userScore+=1
        document.getElementById("userScore").innerText = userScore
    }
    else if(result==="You lose!"){
        botScore+=1
        document.getElementById("botScore").innerText = botScore
    }
}

function reset(){
    // userScore = 0
    // botScore = 0
    // document.getElementById("userScore").innerText = userScore
    // document.getElementById("botScore").innerText = botScore
    document.getElementById("botScore").innerHTML = "pie"
}