
/* Secund Version */

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



/* First version 


function rpsGame(yourChoice) {
  console.log(yourChoice);

  var humanChoice, robotChoice;
  humanChoice = yourChoice.id;
  
  

  robotChoice = numberToChoise(randToRpsInt());
  console.log('Computer choice:', robotChoice);

  results = decideWinner(humanChoice, robotChoice); // [0,1] Human lost and bot won!
  console.log(results);

  message = finalMessage(results);
  console.log(message);

  rpsFrontEnd(yourChoice.id, robotChoice, message);

}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoise(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { 'message': 'You Lost!', 'color': 'red' };
  } else if (yourScore === 0.5) {
    return { 'message': 'Your Tied!', 'color': 'yellow' };
  } else {
    return { 'message': 'You Won!', 'color': 'green' };
  }
}



function rpsFrontEnd(humanImageChoice, robotImageChoice, finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
  }

  //Remove all the images

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var robotDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

 humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' style= 'margin: 0 15px; '>"

 robotDiv.innerHTML = "<img src='" + imagesDatabase[robotImageChoice] + "' style= 'margin: 0 15px ; '>" 

 messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 


  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(robotDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}
 */