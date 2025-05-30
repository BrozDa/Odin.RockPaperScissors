let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
  let choiceNumber =  Math.floor(Math.random()*3);

  if(choiceNumber === 0){
    return "rock";
  }

  if(choiceNumber === 1){
    return "paper"
  }
  return "scissors";
}
function getHumanChoice(){
  let choice = prompt("Enter your choice: (Rock, Paper, Scissors)").toLowerCase();

  while(choice != "rock" &&  choice != "paper" && choice != "scissors" ){

    choice = prompt("Enter VALID choice: (Rock, Paper, Scissors)").toLowerCase()
  }
  return choice;
}
function playRound(computerChoice, playerChoice){
  console.log(computerChoice);
  console.log(playerChoice);

  if(computerChoice === playerChoice){
    console.log("It's a tie!");
  }
  else if((computerChoice === "paper" && playerChoice === "rock")
    || (computerChoice === "scissors" && playerChoice === "paper")
    || (computerChoice === "rock" && playerChoice === "scissors"))
  {
      console.log(`Computer won! ${computerChoice} beats ${playerChoice}`);
      computerScore++;
  }
  else{
    console.log(`Player won! ${playerChoice} beats ${computerChoice}`);
    playerScore++;
  }

}
function evaluateGame()
{
  if(computerScore > playerScore){
    console.log(`Computer won with score ${computerScore}, player got only ${playerScore} points`)
  }
  else{
    console.log(`Player won with score ${playerScore}, computer got only ${computerScore} points`)
  }
}
function playGame(){
  while(computerScore <5 && playerScore < 5){
    playRound(getComputerChoice(), getHumanChoice());
  }
  
  evaluateGame();

}

playGame();

