//psuedo-code
// bot that randomly plays RPS
// allow user to select choice using onclick
// conditional that decides who has won and adds 1 to the tally
// reset button

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let botRock = document.getElementById("botRock")
let botPaper = document.getElementById("botPaper")
let botScissors = document.getElementById("botScissors")

let gameResult = document.getElementById("gameResult")
let gameStatus = document.getElementById("gameStatus")

let userScore=0
let botScore=0

document.getElementById("userScore").innerText = userScore
document.getElementById("botScore").innerText = botScore

rock.onclick = showRock
paper.onclick = showPaper
scissors.onclick = showScissors

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

function showBotChoice(x){
if(x==="rock"){
    botRock.classList.remove('hidden')
}
else if(x==="paper"){
    botPaper.classList.remove('hidden')  
}
else{
    botScissors.classList.remove('hidden')
}
}

function playGame(userChoice){
    let botChoice = rockPaperScissors()
    showBotChoice(botChoice)
    gameStatus.innerText = `You played ${userChoice} and the bot played ${botChoice}`
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
    playAgain2()
    let result = playGame("rock")
    gameResult.innerText = result
    paper.classList.add('hidden')
    scissors.classList.add('hidden')

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
    playAgain2()
    let result = playGame("paper")
    gameResult.innerText = result
    rock.classList.add('hidden')
    scissors.classList.add('hidden')

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
    playAgain2()
    let result = playGame("scissors")
    gameResult.innerText = result
    rock.classList.add('hidden')
    paper.classList.add('hidden')

     if(result==="You win!"){
        userScore+=1
        document.getElementById("userScore").innerText = userScore
    }
    else if(result==="You lose!"){
        botScore+=1
        document.getElementById("botScore").innerText = botScore
    }
}

let reset = document.getElementById("reset")
let playAgain = document.getElementById("playAgain")

reset.onclick = resetGame
playAgain.onclick = playAgain2

function resetGame(){
    playAgain2()
    userScore = 0
    botScore = 0
    document.getElementById("userScore").innerText = userScore
    document.getElementById("botScore").innerText = botScore
    gameResult.innerText = "The game has been reset"
    gameStatus.innerText = ""
}

function playAgain2(){
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')

    botRock.classList.add('hidden')
    botPaper.classList.add('hidden')
    botScissors.classList.add('hidden')
    
    gameStatus.innerText = ""
}