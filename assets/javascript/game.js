$(document).ready(function(){

	var secretNumber = 0;
	var crystalSecretNumber = 0;
	var wins=0;
	var losses=0;
	var random;

	var crystals = [

	{
		points: randomIntFromInterval(1,12),
		image: "assets/images/blue.png"
	},

	{

		points: randomIntFromInterval(1,12),
		image: "assets/images/blue.png"
	},

	{

		points: randomIntFromInterval(1,12),
		image: "assets/images/blue.png"

	},

	{

		points: randomIntFromInterval(1,12),
		image: "assets/images/blue.png"
	}
	]

	secretNumber = randomIntFromInterval(19,120);

	$("#randomNumber").html(secretNumber);

	function buildCrystals(){

		for(var i = 0; i < crystals.length; i++){

			var crystal = $("<div class='crystal_button' data-name = "+crystals[i].points+">");
			var image = $("<img class='crystal_image' src = "+crystals[i].image+">");

			crystal.append(image)

			$("#crystalDiv").append(crystal)

		}

	}
	
	function gameResult(){

		if(crystalSecretNumber == secretNumber){
			$("#winsAndLosses").prepend("You won!")
			wins++
			$("#wins").append(wins)
			console.log("You won")

		} else if(crystalSecretNumber > secretNumber){
			$("#winsAndLosses").prepend("You lost!")
			losses++
			$("#losses").append(losses)
			console.log("You lost")
		}

	}

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	$(document).on("click", ".crystal_button", function(){
		var currentClick = $(this).attr("data-name")
		crystalSecretNumber+=currentClick
		console.log(currentClick)
		$("#totalScore").text(crystalSecretNumber)
		// gameResult()
	});

	buildCrystals();

});