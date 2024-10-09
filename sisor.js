let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")
id1 = document.querySelector(".user-score")
id2 = document.querySelector(".com-score")

const compChoice = () => {
    const options = ["rock", "paper", "sisor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  }
gameDraw = () => {
    console.log("game ws draw")
    msg.innerText = "Game was drawed! Play Again"
    msg.style.background = "black"

}
showwinner = (userwin, userchoice, comchoice) => {
    if(userwin){
        userScore++
    id1.innerText = userScore
        msg.innerText = `You Win! ${userchoice} beats ${comchoice}`
        msg.style.background = "green"
    }else{
        comScore++
        id2.innerText = comScore
        msg.innerText = `You Lose! ${comchoice} beats ${userchoice}`;
        msg.style.background = "red"

    }
}
  

const playGame = (userchoice) => {
    console.log("the user choice is", userchoice)
    const   comchoice = compChoice()
    console.log("the comp choice is", comchoice)
    if(userchoice === comchoice){
        // game draw
        gameDraw();
    }else{
        userwin = true
        if(userchoice === "rock"){
            // paper, sissor
            userwin = comchoice === "paper"?false:true
        }else if(userchoice === "paper"){
            // rock, sissor
            userwin = comchoice === "sisor"?false:true
        }else{
            // sisor, paper
            userwin = comchoice === "rock"?true:false
        }
        showwinner(userwin, userchoice, comchoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id")
        playGame(userchoice)
    })
})