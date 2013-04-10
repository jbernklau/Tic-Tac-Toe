//JS Document
//Variables 
var xWins = 0;
var oWins = 0;
var ties = 0;
var currentPlayer;
var squares;
var x;
var o;
var blank;
var numTurns = 0;
var taken;
var content;
var turn = 0;

window.onload=function(){  //On load function sets up three arrays to hold the tic tac toe game data
	
	taken = new Array();
	content = new Array();
	squares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	
	clearArray();
}
	
function checkWinners(symbol){
	for(var i = 0; i < squares.length; i++){
	if(content[squares[i][0]]==symbol&&content[squares[i][1]]==symbol&&content[squares[i][2]]==symbol){
		alert("CONGRATULATIONS " + symbol +" WON!");
		if(symbol = 'X'){  //If the symbol is X then one will be added to the xWins variable 
				xWins++;
				
			}
			else{         //If the symbol is O then one will be added to the oWins variable 
				oWins++;  
			}
			form();   //This is incorrect
			playAgain();
			  //Clears all arrays so a new game can be played
	   }
	}
}

 function clearArray(){ //This function clears the array so the user can play another game without loosing scoreboard data. 
	 
    for(var j = 0; j<= 8; j++){
	taken[j] = false;
	content[j] ='';
	numTurns = 0;
	 
 	}
 }
 
  function clearCanvas(){
	
	 //Clears the drawn paths on canvas so a new game can be played yet the scoreboard stays the same
	 for(var i = 1; i<=9; i++){
		 x = document.getElementById('canvas' + i).getContext("2d");
		 x.beginPath();
		 x.clearRect(50 - 48 - 1, 50 - 48 - 1, 48 * 2 + 2, 48 * 2 + 2);
	 	 x.closePath();
	 }
 }

function clicked(canvasNumber){  //Draws the X on the canvas
	currentPlayer = "canvas"+canvasNumber;
	blank = document.getElementById(currentPlayer); //holds the square selected
	x = blank.getContext("2d");
	
	if(taken[canvasNumber-1]==false){ //x player's turn
		if(turn%2==0){
			x.beginPath();
			x.moveTo(10,10);
			x.lineTo(90,90);
			x.moveTo(90,10);
			x.lineTo(10,90);
			x.lineWidth = 3;
    		x.strokeStyle = "black";
			x.stroke();
			x.closePath();
			content[canvasNumber-1] ='X'; //places an x marked value in the array
		}
		else{ //o player's turn
		    x.beginPath();
			x.arc(50,50,45,0,Math.PI*2, true); 
			x.lineWidth = 3;
    		x.strokeStyle = "black";
			x.stroke(); //Draws o with the arc values above
			x.closePath();
			content[canvasNumber-1] = 'O'; //places an o marked value in the array
			
		}
		turn++; //Incrementing so that the next turn is the next player's turn
		taken[canvasNumber-1] = true;
		numTurns++; 
		checkWinners(content[canvasNumber-1]);
		
		if(numTurns==9){  //If all of the turns result in no win, then this alert statement will execute.
			ties++;
			form();
			alert("The game is now over. The game resulted in a tie, please try again");
			clearCanvas(); 
		}
	}
	else{  //If the user selects an already taken square/canvas.
		alert("That square has already been taken, please find another open square.");
	}
} 

 function form() {  //The form function gets the number value for each of the three variables and moves it to the form for display
	  document.getElementById('xwins').value = xWins;
	  document.getElementById('owins').value = oWins;
	  document.getElementById('ties').value = ties;
}	

 function playAgain(){ //The playAgain function asks the user whether they want to play another game or not
	 o=confirm("Play again?");
	 if(o==true){
		clearCanvas();  //If yes, then the board is cleared
		clearArray(); //Clears array
		
}
	 else{
		  alert("Thank you for participating, have a good day!");
		  location.reload(true); //Clears and reloads the entire page so a new game can begin or the user can navigate away
	  }
}
  