//make my variables
const rps = ["Rock!", "Paper!", "Scissors!"]; //list of choices
//created a getter because initializing a variable at the beginning only chooses a random number ONCE instead of multiple
const randomRPS = Math.floor(Math.random() * 3); //random int from 0-2
var playerChoice=0; //player choice

//game start when press play
document.getElementById("start", start);


//function to start game
function start(){
	console.log("Play Rock-Paper-Scissors!");
	doubleLine();
	playRound();
	singleLine();
}

//line dividers
function singleLine(){
	console.log("---------------");
}

function doubleLine(){
	singleLine();
	singleLine();
}

//getters
function getRandom(){ 

	//random int from 0-2
	var num = Math.floor(Math.random() * 3); 

	return num;
}

//game functions
function computerPlay(){ //when called, will run and return computer choice
	//random int from 0-2
	var rando = getRandom();
	console.log("new random made! - "+rando);
	//rps at random int, stored into comp choice
	computerChoice = rps[rando];
	//state computer choice
	console.log("The computer chose: "+computerChoice);
	//returns int randomRPS for computer
	return rando;
}

function playerPlay(){ //when called, will run and return player choice
	
	//window prompt
	let player = prompt("Rock, Paper, or Scissors?");

	if (player.toLowerCase() == "rock"){
		playerChoice=0;
		console.log("You chose rock!");
	} else if (player.toLowerCase() == "paper"){
		playerChoice=1;
		console.log("You chose paper!");
	} else {
		playerChoice=2;
		console.log("You chose scissors!");
	} 

	//returns int randomRPS for computer
	return playerChoice;

}

function playRound(computer, player) {
	//set computer and player to return int
	computer = computerPlay(); 
	player = playerPlay();

	var choices = ["Rock", "Paper", "Scissors"]; //local variable list

	if (player == computer){
		document.getElementById("results").innerHTML = "It's a draw!";
		showResults(choices[computer], choices[player]);

	} else if (player == 1 && computer == 0) {
		document.getElementById("results").innerHTML = "Your paper wraps the rock. You win!";
		showResults(choices[computer], choices[player]);

	} else if (player == 2 && computer == 1) {
		document.getElementById("results").innerHTML = "Your scissors cut the paper. You win!";
		showResults(choices[computer], choices[player]);

	} else if (player == 0 && computer == 2) {
		document.getElementById("results").innerHTML = "Your rock smashes the scissors. You win!";
		showResults(choices[computer], choices[player]);

	} else if (player == 0 && computer == 1) {
		document.getElementById("results").innerHTML = "The computer's paper wraps your rock. You lose!";
		showResults(choices[computer], choices[player]);

	} else if (player == 1 && computer == 2) {
		document.getElementById("results").innerHTML = "The computer's scissors cuts your paper. You lose!";
		showResults(choices[computer], choices[player]);

	} else if (player == 2 && computer == 0) {
		document.getElementById("results").innerHTML = "The computer's rock smashes your scissors. You lose!";
		showResults(choices[computer], choices[player]);

	}


	console.log("TESTING NOTES - Player: "+player+", Computer: "+ computer);
	return computer, player;
}

function showResults(compResults,playResults) {
  document.getElementById("playerResults").innerHTML = playResults;
  document.getElementById("compResults").innerHTML = compResults;
}
