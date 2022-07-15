const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const botRock = document.getElementById("botRock")
const botPaper = document.getElementById("botPaper")
const botScissors = document.getElementById("botScissors")

const gameResult = document.getElementById("gameResult")
const gameStatus = document.getElementById("gameStatus")

let userScore=0
let botScore=0

document.getElementById("userScore").innerText = userScore
document.getElementById("botScore").innerText = botScore

rock.onclick = showRock
paper.onclick = showPaper
scissors.onclick = showScissors

function rockPaperScissors(){
    const random = Math.ceil(Math.random() * 3)
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
    const botChoice = rockPaperScissors()
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
    pressplayAgain()
    const result = playGame("rock")
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
    pressplayAgain()
    const result = playGame("paper")
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
    pressplayAgain()
    const result = playGame("scissors")
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

const reset = document.getElementById("reset")
const playAgain = document.getElementById("playAgain")

reset.onclick = resetGame
playAgain.onclick = pressplayAgain

function resetGame(){
    alert(`You scored ${userScore} and the computer scored ${botScore}`)
    pressplayAgain()
    userScore = 0
    botScore = 0
    document.getElementById("userScore").innerText = userScore
    document.getElementById("botScore").innerText = botScore
    gameResult.innerText = "The game has been reset"
    gameStatus.innerText = ""
    
}

function pressplayAgain(){
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')

    botRock.classList.add('hidden')
    botPaper.classList.add('hidden')
    botScissors.classList.add('hidden')
    
    gameStatus.innerText = ""
    gameResult.innerText = ""
}