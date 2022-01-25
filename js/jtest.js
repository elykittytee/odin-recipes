//game start
document.getElementById("start", start);

//make my variables
const rps = ["Rock!", "Paper!", "Scissors!"]; //list of choices
const randomRPS = Math.floor(Math.random() * 3); //random int from 0-2
var playerChoice=0; //player choice

function singleLine(){
	console.log("---------------");
}

function doubleLine(){
	singleLine();
	singleLine();
}

function start(){
	console.log("Play Rock-Paper-Scissors!");
	doubleLine();
	playRound();
	singleLine();
	//console.log("TESTING NOTES - Player: "+playerChoice+", Computer: "+ randomRPS);
}

function computerPlay(){
	//random int from 0-2
	//rps at random int, stored into comp choice
	computerChoice = rps[randomRPS];
	//state computer choice
	console.log("The computer chose: "+computerChoice);
	//returns int randomRPS for computer
	return randomRPS;
}

function playerPlay(){
	
	//window prompt
	let player = prompt("Rock, Paper, or Scissors?");

	if (player.toLowerCase() == "rock"){
		playerChoice=0;
		console.log("You chose: Rock!");
	} else if (player.toLowerCase() == "paper"){
		playerChoice=1;
		console.log("You chose: Paper!");
	} else {
		playerChoice=2;
		console.log("You chose: Scissors!");
	} 

	//returns int randomRPS for computer
	return playerChoice;

}

function playRound(computer, player) {
	//set computer and player to return
	computer = computerPlay();
	player = playerPlay();

	if (player == computer){
		console.log("It's a draw!");
	} else if (player == 1 && computer == 0) { //you win
		console.log("Your paper wraps the rock. You win!");
	} else if (player == 2 && computer == 1) {
		console.log("Your scissors cut the paper. You win!");
	} else if (player == 0 && computer == 2) {
		console.log("Your rock smashes the scissors. You win!");
	} else if (player == 0 && computer == 1) { //computer wins
		console.log("The computer's paper wraps your rock. You lose!");
	} else if (player == 1 && computer == 2) {
		console.log("The computer's scissors cuts your paper. You lose!");
	} else if (player == 2 && computer == 0) {
		console.log("The computer's rock smashes your scissors. You lose!");
	}
}

function showResults() {
  document.getElementById("playerResults").innerHTML = "this should be player results";
  document.getElementById("compResults").innerHTML = "this should be computer results";
}
