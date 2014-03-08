// JavaScript Document

var answer = Math.floor( (Math.random() * 100) + 1 );
var guessArray = [];
var previousDifference = 0;
var currentDifference = 0;
var previousGuess = 0;
var i = 0;
	   
var fireRed = "#E42217";
var iceBlue = "#56A5EC";
var gold = "#D4A017";

$(document).ready(function() {
	
	$("#status").text( "Pick a number between 1 and 100..." ).css( "font-size", "30px" );
	   
	$( "#submitButton" ).on( "click", function( e ) 
	{
		e.preventDefault();
			
		var guess = $( "#guess" ).val();
		   
		if ( answer == guess )
		{
		   $( "#circle" ).css( { "background":gold, "color":"#FFF", "font-size":"65px" } );
		   $( "#guess" ).css( { "background":gold, "color":"#FFF", "font-size":"65px" } );
		   $( "#status" ).text( "you won!" );
		   
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
			   	   $( "#circle" ).css( { "background":iceBlue, "color":"#012345", "font-size":"65px" } ); 
				   $( "#status" ).text( "Over!!!" );  
			   }
			   else
			   {
				   if ( currentDifference > 0 && currentDifference <= 5 )
				   {
					   $( "#circle" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
					   $( "#guess" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
				   	   $( "#status" ).text( "Hot!" );  
				   }
				   else if ( currentDifference > 5 && currentDifference <= 10 )
				   {
					   $( "#circle" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
					   $( "#guess" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
				   	   $( "#status" ).text( "Very warm!" );  
				   }
				   else if ( currentDifference > 10 && currentDifference <= 20 )
				   {
					   $( "#circle" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
					   $( "#guess" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
				   	   $( "#status" ).text( "Warm!" );  
				   }
				   else if (currentDifference > 20 )
				   {
					   $( "#circle" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"65px" } );
					   $( "#guess" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"65px" } );
				   	   $( "#status" ).text( "Cold!" );  
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
			   	   $( "#circle" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"65px" } );
				   $( "#guess" ).css( { "background":iceBlue, "color":"#FFF", "font-size":"65px" } )   
				   $( "#status" ).text( "Over!!!" );  
			   }
			   else
			   {
				   if ( previousDifference < currentDifference )
				   {
						$( "#circle" ).css( { "background":iceBlue, "color":"#012345", "font-size":"65px" } );
						$( "#guess" ).css( { "background":iceBlue, "color":"#012345", "font-size":"65px" } );
						$( "#status" ).text( "Colder" );
				   }
				   else if ( previousDifference > currentDifference )
				   {
						$( "#circle" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
						$( "#guess" ).css( { "background":fireRed, "color":"#FFF", "font-size":"65px" } );
						$( "#status" ).text( "Warmer" );
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
		window.location.href = "http://deryx.github.io/hot-cold-game/";
	});
});
