$(document).ready(function(){

	var secretNumber = 0;
	var crystalSecretNumber = 0;
	var wins=0;
	var losses=0;
	var random;

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	//create an object array to randomly generate a number


	function buildCrystals(){

		secretNumber = randomIntFromInterval(19,120);

		$("#randomNumber").html(secretNumber);


		var crystals = [

		{	points: randomIntFromInterval(1,12),
			image: "assets/images/red.png"
		},

		{	points: randomIntFromInterval(1,12),
			image: "assets/images/blue.png"
		},

		{	points: randomIntFromInterval(1,12),
			image: "assets/images/yellow.png"

		},

		{	points: randomIntFromInterval(1,12),
			image: "assets/images/green.png"
		}
		]
		$(".crystal_button").html("")

		for(var i = 0; i < crystals.length; i++){

			var crystal = $("<div class='crystal_button' data-name = "+crystals[i].points+">");
			var image = $("<img class='crystal_image' src = "+crystals[i].image+">");

			crystal.append(image)

			$("#crystalDiv").append(crystal)
		}
	}


	$(document).on("click", ".crystal_button", function(){
		var currentClick = $(this).attr("data-name")

		crystalSecretNumber+=parseInt(currentClick)
		$("#totalScore").html(crystalSecretNumber)
		gameResult()

		console.log(currentClick)

	});

	function gameResult(){

		if(crystalSecretNumber === secretNumber){
			$("#winsAndLosses").prepend("You won!")
			wins++
			console.log(winsAndLosses)
			$("#wins").html(`<div id='wins'>Wins: ${wins}</div>`)
			reset()

		} else if(crystalSecretNumber > secretNumber){
			$("#winsAndLosses").prepend("You lost!")
			losses++
			$("#losses").html(`<div id='losses'>Losses: ${losses}</div>`)
			reset()
		}
	}

	function reset(){
		secretNumber = randomIntFromInterval(19,120);
		$("#randomNumber").html(secretNumber);
		$("#totalScore").text("")
		$("#winsAndLosses").text("")
		crystalSecretNumber = 0
		buildCrystals();
	
	}

	buildCrystals();

});