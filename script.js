let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const drawGame = () => {
    
    msg.innerText = "Game Draw, Play Again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
       msg.innerText = `you win, your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log("you lose")
        msg.innerText = `you lose, ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor']
    const rndmId = Math.floor(Math.random()*3)
    return options[rndmId]

}



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate comp chice
    const compChoice = genCompChoice()
    console.log("comp choice = ", compChoice)

    if(userChoice === compChoice){
        // draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice= "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false: true;
        }
        else{
            //rock, scissor
           userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    //console.log(choice)
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
       // console.log("hovered", userChoice)
       playGame(userChoice)
    })
})