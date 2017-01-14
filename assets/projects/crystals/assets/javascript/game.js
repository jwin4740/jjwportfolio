//global variables
var max;
var min;
var redNumber;
var blueNumber;
var purpleNumber;
var greenNumber; 
var clickedValue;
var score = 0;
var winCounter = 0;
var lossCounter = 0;
var keylock = false;



$(document).ready(function() {


	var randNumber = getRandom(19, 120);
	console.log("Random Number is: " + randNumber);
	$("#genNumber").html(randNumber);

	do
	{
	var blueCrystal = setRandGems();
	console.log("blue is: " + blueCrystal);
	$("#blue").attr("data-value", blueCrystal);
	do 
	{
		var greenCrystal = setRandGems();
	}
	while(blueCrystal === greenCrystal);
	console.log("green is: " + greenCrystal);
	$("#green").attr("data-value", greenCrystal);
	
	do 
	{
		var redCrystal = setRandGems();
	}
	while(redCrystal === greenCrystal || redCrystal === blueCrystal);
	console.log("red is: " + redCrystal);
	$("#red").attr("data-value", redCrystal);
	
	do 
	{
		var purpleCrystal = setRandGems();
	}
	while(purpleCrystal === greenCrystal || purpleCrystal === redCrystal || purpleCrystal === blueCrystal);
	console.log("purple is: " + purpleCrystal);
	$("#purple").attr("data-value", purpleCrystal);

}
while(purpleCrystal != 1 && blueCrystal != 1 && greenCrystal != 1 && redCrystal != 1);

function reset(){
	
	randNumber = getRandom(19, 120);
	console.log("Random Number is: " + randNumber);
	$("#genNumber").html(randNumber);

	do
	{
	var blueCrystal = setRandGems();
	console.log("blue is: " + blueCrystal);
	$("#blue").attr("data-value", blueCrystal);
	do 
	{
		var greenCrystal = setRandGems();
	}
	while(blueCrystal === greenCrystal);
	console.log("green is: " + greenCrystal);
	$("#green").attr("data-value", greenCrystal);
	
	do 
	{
		var redCrystal = setRandGems();
	}
	while(redCrystal === greenCrystal || redCrystal === blueCrystal);
	console.log("red is: " + redCrystal);
	$("#red").attr("data-value", redCrystal);
	
	do 
	{
		var purpleCrystal = setRandGems();
	}
	while(purpleCrystal === greenCrystal || purpleCrystal === redCrystal || purpleCrystal === blueCrystal);
	console.log("purple is: " + purpleCrystal);
	$("#purple").attr("data-value", purpleCrystal);

}
while(purpleCrystal != 1 && blueCrystal != 1 && greenCrystal != 1 && redCrystal != 1);
keylock = false;
score = 0;
$(".totscore").text(score);

};
		$("#buttonreset").on("click", reset);

		$(document).on("click", "img", function(event) {
			if (keylock === false)
			{
			clickedValue = $(this).attr("data-value");
			console.log(clickedValue);
			
			
			if ($(this).hasClass("blues"))
			{
				console.log("blue is: " + clickedValue);
			}

			else if ($(this).hasClass("greens"))
			{
				console.log("green is: " + clickedValue);
			}

			else if ($(this).hasClass("reds"))
			{
				console.log("red is: " + clickedValue);
			}

			else if ($(this).hasClass("purples"))
			{
				console.log("purple is: " + clickedValue);
			}

			clickedValue = parseInt(clickedValue);
			score = score + clickedValue;
			console.log(score);
			$(".totscore").text(score);

			if (score === randNumber)
			{
				alert("you win");
				winCounter++;
				$("#wins").html(winCounter);
				keylock = true;
			}

			if (score > randNumber)
			{
				alert("you lose");
				lossCounter++;
				$("#loss").html(lossCounter);
				keylock = true;
			}
		}
			
		}); 
});


//functions used


function getRandom(min, max) {
	randNumber = Math.floor(Math.random()*(max - min + 1) + min);
	return randNumber;
}

function setRandGems () {
	color = getRandom(1, 12);
	return color;
}

