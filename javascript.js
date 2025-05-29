function getComputerChoice(){
  let number =  Math.floor(Math.random()*3);

  if(number === 0){
    return "Rock";
  }
  if(number === 1){
    return "Paper"
  }
  return "Scissors";
}

for(let i =0; i<10;i++){
  
  console.log(getComputerChoice());
}