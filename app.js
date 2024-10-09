userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");
id1 = document.querySelector(".user-score")
id2 = document.querySelector(".comp-score")

const compChoice = () => {
	num = ["rock", "paper", "sisor"]
	index = Math.floor(Math.random()*3)
	return num[index]
}
gameDraw = () => {

}
msg = document.querySelector("msg")

showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++
    id1.innerText = userScore
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.background = "green"
    }else{
        compScore++
        id2.innerText = compScore
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.background = "red"

    }
}
playGame = (userChoice) => {
	console.log(userChoice,"click")
	compChoice()
	if(userChoice === compChoice){
		gameDraw()
	}else{
		if(userChoice === "rock"){
			userwin = compChoice === "paper"?false:true
		}else if(userChoice === "paper"){
			userwin = compChoice === "sisor"?false:true
		}else{
			userwin = compChoice === "rock"?true:false
		}
			showWinner(userwin, userChoice, compChoice)
	}
	}


choices.forEach((choice)  => {
	userChoice = choice.getAttribute("id")
	playGame(userChoice)
})