/*Psuedo Code



*/
$(document).ready(function(){

//Sets the random number at the start of the game
function randomNumberFunction() {
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    $("#randomNumber").html(randomNumber);
}
randomNumberFunction();

//variables for win and lose

var winCounter = 0;
var loseCounter = 0;
var yourScore = 0

// variables for each nuka cola

var nuka1Number = Math.floor((Math.random() * 12) + 1);
var nuka2Number = Math.floor((Math.random() * 12) + 1);
var nuka3Number = Math.floor((Math.random() * 12) + 1);
var nuka4Number = Math.floor((Math.random() * 12) + 1);

//start game will reset values I hope

function startGame() {
var nuka1Number = Math.floor((Math.random() * 12) + 1);
var nuka2Number = Math.floor((Math.random() * 12) + 1);
var nuka3Number = Math.floor((Math.random() * 12) + 1);
var nuka4Number = Math.floor((Math.random() * 12) + 1);
randomNumberFunction();


}
function increaseYourScore1(){
	$("#yourScore").html(nuka1Number);
}
function increaseYourScore2(){
	$("#yourScore").html(nuka2);
}
function increaseYourScore3(){
	$("#yourScore").html(nuka3);
}
function increaseYourScore4(){
	$("#yourScore").html(nuka4);
}
$("#nuka1").on("click", increaseYourScore1);

});