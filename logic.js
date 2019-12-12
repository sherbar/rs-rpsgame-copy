//This function randomly generates the computers choice and finds the users pick
var game_result;
function play(userChoice){
    var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	  computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
	  computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  game_result=compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}


//this gives the game result
var compare = function(choice1, choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if (choice2==="scissors")
            return "rock wins!";
        else
            return "paper wins!";
    }
    else if(choice1==="paper"){
        if(choice2==="rock")
            return "paper wins";
        else
            return "scissors win";
    }
    else{
        if(choice2==="rock")
            return "rock wins";
        else
            return "scissors wins";
    }
}
