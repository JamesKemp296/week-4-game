/*Psuedo Code
-4 characters to choose from
-you pick one character that gets moved into a div 
-Each charater has a set amount of health
-


*/
$(document).ready(function(){

	var Han = {
		firstName: "Han",
		lastName: "Solo",
		fullName: function() {
			console.log(this.firstName + " " + this.lastName);
		},
		health: "120"
	};
	var Greedo = {
		fullName: "Greedo",
		health: "100"
	};
	var Luke = {
		firstName: "Luke",
		lastName: "Skywalker",
		fullName: function() {
			console.log(this.firstName + " " + this.lastName);
		},
		health: "150"
	};
	var Vader ={
		firstName: "Darth",
		lastName: "Vader",
		fullName: function() {
			console.log(this.firstName + " " + this.lastName);
		},
		health: "180"
	};
	Vader.fullName();
	Luke.fullName();
	Han.fullName();


	var testhealth = 100;
	$("#soloIMG").on("click", function(){
		$("#soloIMG").html("<p>" + testhealth +"</p>");
	});



});