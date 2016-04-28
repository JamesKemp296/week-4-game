// NukaCola Collector by James Kemp

$(document).ready(function(){

	//variables for win and lose

	var winCounter = 0;
	var loseCounter = 0;
	var yourScoreNumber = 0;

	// variables for each nuka cola (the gems in my game)

	var nuka1Number = Math.floor((Math.random() * 12) + 1);
	var nuka2Number = Math.floor((Math.random() * 12) + 1);
	var nuka3Number = Math.floor((Math.random() * 12) + 1);
	var nuka4Number = Math.floor((Math.random() * 12) + 1);

	//Sets the random number at the start of the game
	function randomNumberFunction() {
	    var randomNumberV = Math.floor((Math.random() * 101) + 19);
	    $("#randomNumber").html(randomNumberV);
	    $("#yourScore").html(yourScoreNumber);
	}
	randomNumberFunction();

	//functions that increase score

	function increaseYourScore1(){
		yourScoreNumber++;
		console.log(yourScoreNumber);
		$("#yourScore").html(yourScoreNumber);
		checkIfWin();
	}
	function increaseYourScore2(){
		var nuka1Number = Math.floor((Math.random() * 12) + 1);
		var yourScoreNumber = 0;
		yourScoreNumber + nuka2Number;
		console.log(yourScoreNumber);
		$("#yourScore").html(yourScoreNumber);
		checkIfWin();
	}
	function increaseYourScore3(){
		$("#yourScore").html(nuka3Number);
		checkIfWin();
	}
	function increaseYourScore4(){
		$("#yourScore").html(nuka4Number);
		checkIfWin();
	}
	
	//on click will increase score 
	$("#nuka1").on("click", increaseYourScore1);
	$("#nuka2").on("click", increaseYourScore2);
	$("#nuka3").on("click", increaseYourScore3);
	$("#nuka4").on("click", increaseYourScore4);

	//checks if you won and resets everything

	function checkIfWin(){
		if (yourScoreNumber == randomNumberV){
			winCounter++;
			$("#winScore").html("<h2>Wins:</h2>" + winsCounter);
			alert("You win!");
			var nuka1Number = Math.floor((Math.random() * 12) + 1);
			var nuka2Number = Math.floor((Math.random() * 12) + 1);
			var nuka3Number = Math.floor((Math.random() * 12) + 1);
			var nuka4Number = Math.floor((Math.random() * 12) + 1);
			var yourScoreNumber = 0;
		}
		else if (yourScoreNumber > randomNumberV){
			loseCounter++;
			alert("You lose!");
			var nuka1Number = Math.floor((Math.random() * 12) + 1);
			var nuka2Number = Math.floor((Math.random() * 12) + 1);
			var nuka3Number = Math.floor((Math.random() * 12) + 1);
			var nuka4Number = Math.floor((Math.random() * 12) + 1);
			var yourScoreNumber = 0;
		}
	}

});