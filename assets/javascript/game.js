

$(document).ready(function() {

 	
var targetScore = 0;
var playerScore = 0;

var redGem = 0;
var blueGem = 0;
var yellowGem = 0;
var greenGem = 0;

var wins = 0;
var losses = 0;

var magicSound = new Audio("../week-4-game/assets/sounds/magic.wav");
var breakSound = new Audio("../week-4-game/assets/sounds/break.wav");



	function gameplay() {

		function randomizer() {
			console.log("randomized");
			redGem = Math.floor((Math.random()*12)+1);
			blueGem = Math.floor((Math.random()*12)+1);
			yellowGem = Math.floor((Math.random()*12)+1);
			greenGem = Math.floor((Math.random()*12)+1);
			targetScore = Math.floor((Math.random()*(120-19))+19);
			playerScore = 0;

			$("#targetscore").html("Target Score: " + targetScore);
			$("#playerscore").html("Your Score: " + playerScore);
			$("#winsloss").html("Wins: " + wins + "<br>Losses: " + losses);
		};

		randomizer();


		$("#redgem").on("click", function() {
			playerScore = playerScore + redGem;
			console.log(playerScore);
			$("#playerscore").html("Your Score: " + playerScore);

			if (playerScore > targetScore) {
			losses++
			breakSound.play();

			randomizer();
			};

			if (playerScore == targetScore) {
			wins++
			magicSound.play();

			randomizer();
			};
		});

		$("#bluegem").on("click", function() {
			playerScore = playerScore + blueGem;
			console.log(playerScore);
			$("#playerscore").html("Your Score: " + playerScore);

			if (playerScore > targetScore) {
			losses++
			breakSound.play();

			randomizer();
			};

			if (playerScore == targetScore) {
			wins++
			magicSound.play();

			randomizer();
			};
		});

		$("#yellowgem").on("click", function() {
			playerScore = playerScore + yellowGem;
			console.log(playerScore);
			$("#playerscore").html("Your Score: " + playerScore);

			if (playerScore > targetScore) {
			losses++
			breakSound.play();

			randomizer();
			};

			if (playerScore == targetScore) {
			wins++
			magicSound.play();

			randomizer();
			};
		});

		$("#greengem").on("click", function() {
			playerScore = playerScore + greenGem;
			console.log(playerScore);
			$("#playerscore").html("Your Score: " + playerScore);

			if (playerScore > targetScore) {
			losses++
			breakSound.play();

			randomizer();
			};

			if (playerScore == targetScore) {
			wins++
			magicSound.play();

			randomizer();
			};
		});




	};







gameplay();

});