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

function startGame() {
var nuka1 = Math.floor((Math.random() * 12) + 1);
var nuka2 = Math.floor((Math.random() * 12) + 1);
var nuka3 = Math.floor((Math.random() * 12) + 1);
var nuka4 = Math.floor((Math.random() * 12) + 1);
randomNumberFunction();


}

});