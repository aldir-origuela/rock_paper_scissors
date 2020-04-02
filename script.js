

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user");
var computerScore_span = document.getElementById("computer");
var scoreBoard = document.querySelector(".score-board");
var resultMessage = document.querySelector(".result-message > p");
var rock = document.getElementById("rock")
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function convertWord(letter){
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  return "Scissors"
  
}



function win(userChoice, computerChoice) {

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage.innerHTML =   convertWord(userChoice)  + " beats " + convertWord(computerChoice) + ". You Win.";
  document.getElementById(userChoice).classList.add('result-win');
  setTimeout( function() {document.getElementById(userChoice).classList.remove('result-win') }, 300);

}

function loser (userChoice, computerChoice) {

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage.innerHTML = convertWord(userChoice) + " loses to " + convertWord(computerChoice) + ". You Lose.";
  document.getElementById(userChoice).classList.add('result-lose');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('result-lose') }, 300);



}

function draw (userChoice, computerChoice) {


  resultMessage.innerHTML = convertWord(userChoice) + " equals " + convertWord(computerChoice) + ". It's a Draw.";
  document.getElementById(userChoice).classList.add('result-draw');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('result-draw') }, 300);



}




function getComputerChoice () {
  var choice =  ['rock', 'paper', 'scissors'];
  var randomNumber = Math.floor(Math.random()* 3);
  return choice[randomNumber];

}



function game (userChoice){

  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {

    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      loser(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;  
    
  }


}

function main(){

rock.addEventListener('click', function() {
  game("rock");
})


paper.addEventListener('click', function () {
    game("paper");
  })

scissors.addEventListener('click', function () {
    game("scissors");
  })  

}

main();


