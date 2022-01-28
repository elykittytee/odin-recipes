//make my variables
const rps = ["Rock!", "Paper!", "Scissors!"]; //list of choices
//created a getter because initializing a variable at the beginning only chooses a random number ONCE instead of multiple
const randomRPS = Math.floor(Math.random() * 3); //random int from 0-2
var playerChoice=0; //player choice

//game start when press option
document.getElementById("start-rock", playRock);
document.getElementById("start-paper", playPaper);
document.getElementById("start-scissors", playScissors);


//line dividers
function singleLine(){
	console.log("---------------");
}

function doubleLine(){
	singleLine();
	singleLine();
}

//play ROCK
function playRock(computer, player){
	player = getRock();
	computer = computerPlay(); 
	console.log("Player chose ROCK");

	doubleLine();
	playRound(computer, player);
	singleLine();

}

//play PAPER
function playPaper(computer, player){
	player = getPaper();
	computer = computerPlay(); 
	console.log("Player chose PAPER");

	doubleLine();
	playRound(computer, player);
	singleLine();

}

//play SCISSORS
function playScissors(computer, player){
	player = getRock();
	computer = computerPlay(); 
	console.log("Player chose SCISSORS");

	doubleLine();
	playRound(computer, player);
	singleLine();

}

//getters
function getRandom(){ 
	
	var num = Math.floor(Math.random() * 3); //random int from 0-2
	return num;
}

function getRock(){ 
	console.log("player button rock");
	var num = 0; //rock is 0
	return num;
}

function getPaper(){ 
	console.log("player button paper");
	var num = 1; //paper is 1
	return num;
}

function getScissors(){ 
console.log("player button scissors");
	var num = 2;//scissors is 2
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
