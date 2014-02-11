// JavaScript Document

var answer = Math.floor( (Math.random() * 100) + 1 );
var guessArray = [];
var previousDifference = 0;
var currentDifference = 0;
var previousGuess = 0;
var i = 0;
	   
var fireRed = "#E42217";
var iceBlue = "#56A5EC";

$(document).ready(function() {
	   
   	$( "#circle" ).text( "Let's Play!" );
			
	$( "#submitButton" ).on( "click", function( e ) 
	{
		e.preventDefault();
			
		var guess = $( "#guess" ).val();
		   
		if ( answer == guess )
		{
		   $( "#circle" ).text( "you won!" ).css( { "background":fireRed, "color":"#FFF", "font-size":"45px" } );
		   
		   $( "#guesses" ).text( "Number of guesses: " ).append( i + 1 );
				   
		   return true;
		}
		else
		{
		   guessArray.push( guess );
		   
		   currentDifference = Math.abs( answer - guess );
		   
		   if ( previousDifference == 0 )
		   {
			   if ( guess > answer )
			   {
			   	   $( "#circle" ).text( "Over!!!" ).css( { "background":iceBlue, "color":"#012345", "font-size":"50px" } );   
			   }
			   else
			   {
				   if ( currentDifference > 0 && currentDifference <= 5 )
				   {
					   $( "#circle" ).text( "Hot!" ).css( { "background":fireRed, "color":"#FFF", "font-size":"30px" } );
				   }
				   else if ( currentDifference > 5 && currentDifference <= 10 )
				   {
					   $( "#circle" ).text( "Very warm!" ).css( { "background":fireRed, "color":"#FFF", "font-size":"25px" } );
				   }
				   else if ( currentDifference > 10 && currentDifference <= 20 )
				   {
					   $( "#circle" ).text( "Warm!" ).css( { "background":fireRed, "color":"#FFF", "font-size":"30px" } );
				   }
				   else if (currentDifference > 20 )
				   {
					   $( "#circle" ).text( "Cold!" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"35px" } );
				   }
			   
			   		previousDifference = Math.abs( answer - guess );
			   }
			   
			   previousGuess = guess;
		   }
		   else
		   {
			   previousGuess = guessArray[i - 1];
				   
			   if ( previousGuess < answer )
			   {
			   		previousDifference = Math.abs( answer - previousGuess );
			   }
			   
			   if ( guess > answer )
			   {
			   	   $( "#circle" ).text( "Over!!!" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"50px" } );   
			   }
			   else
			   {
				   if ( previousDifference < currentDifference )
				   {
						$( "#circle" ).text( "Colder" ).css( { "background":iceBlue, "color":"#012345", "font-size":"35px" } );
				   }
				   else if ( previousDifference > currentDifference )
				   {
						$( "#circle" ).text( "Warmer" ).css( { "background":fireRed, "color":"#FFF", "font-size":"35px" } );
				   }
			   }
			}
			   
			var guesses = "";
			for (j = 0; j < guessArray.length; j++)
			{
				guesses += guessArray[j];   
				guesses += ", ";
			}
			   
			var lastComma = guesses.lastIndexOf(", ");
			guesses = guesses.substr( 0, lastComma );
					   
			i++;
			
			$( "#guesses" ).text( guesses );
		}
	});
	
	$( "#resetButton" ).on( "click", function( e ) 
	{
		window.location.href = "http://localhost/thinkful/hotorcold/index.html";
	});
});
