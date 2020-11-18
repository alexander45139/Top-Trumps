//This file stores all functions for the Top Trumps game


set = Number(sessionStorage.index);
//The user's selected index is defined as an integer


function Shuffle() {
	//This function, when called, shuffles the cards into a random order and gives same amount of those cards to the player and opponent.
	
	document.getElementById("DifficultyLevel").innerHTML = "";
	//The difficulty level buttons disappear
	
	document.getElementById("ButtonArea").innerHTML = "<button disabled id='NextButton' onclick='NextPlayer()'>Next</button>";
	//The Begin button is replaced by the Next button, which calls HideOpponentCards() when clicked and is disabled to prevent the user from calling this new function
	
	playerCards = [];
	opponentCards = [];
	middleCards = [];
	//Number of cards in the middle
	
	shuffleCards = [];
	//Arrays that store indexes of cards[set][card entity] (stores each card entity of the set - referenced)
	//E.g. playerCards = [2, 4, 8]
	
	index = 0;
	while (index < cards[set].length) {
		randomNumber = Math.floor(Math.random() * cards[set].length);
		//Random number to randomly pick a card from cards
		if (shuffleCards.indexOf(randomNumber) == -1) {
			//If shuffleCards don't have the card that has been randomly selected
			//This avoids duplicate cards
			shuffleCards.push(randomNumber);
			//randomNumber is added to the list of shuffleCards
			index += 1;
			//To avoid an infinite iteration and to search through each array in cards, index is added by 1
			//This only happens if a card is added to shuffleCards
		}
	}
	
	halfNumberOfCards = shuffleCards.length / 2;
	//Half the number of cards in shuffleCards
	
	index = 0;
	while (index < shuffleCards.length) {
		//This takes the first half of indexes in shuffleCards and adds them into playerCards and rest into opponentCards
		if (index < halfNumberOfCards) {
			playerCards.push(shuffleCards[index]);
		}
		else {
			opponentCards.push(shuffleCards[index]);
		}
		//First half of shuffleCards are appended to the Player and the second half is appended to the Opponent
		index += 1;
		//This allows the program to move through the list
	}
	
	while (opponentCards.length > playerCards.length) {
		//While Opponent has more cards than Player
		opponentCards.pop()
		//A card is removed from the opponent until both players have equal cards
	}

	
	userPlaying = true;
	
	document.getElementById("NextButton").disabled = true;
	//This allows the user to click on the Next button
	
	DisplayCards();
	//Function is called
}


function DisplayCards() {
	//This function refreshes the displays that show the amount of cards each player has and shows the next card of Player
	//If there are cards in the middle pile, the cards are sorted to either the Player or Opponent (depends who won)
	
	document.getElementById("MiddleNumberOfCards").innerHTML = String(middleCards.length);
	//Updates the id to display the number of cards in the middle
	
	if (middleCards[0] == null) {
		//If there are any cards in the Middle area
		document.getElementById("Middle").style = "background-color: white; width: 500px; color: white;";
		document.getElementById("Middle").innerHTML = "";
		//The amount of cards in the middle pile is displayed and the info of the back of a card disappears.
	}
	else {
		document.getElementById("Middle").style = "background-color: " + setColours[set] + "; width: 500px; color: white;";
		document.getElementById("Middle").innerHTML = "TOP TRUMPS</br>TV Shows</br></br>Card";
		//The amount of cards in the middle pile is displayed and the info of the back of a card shown.
	}
	
	if (playerCards[0] == null) {
		//If the user has no cards left
		document.getElementById("PlayerCard").style = "background-color: white;  width: 500px; color: white;";
		
		document.getElementById("PlayerName").innerHTML = "";
		document.getElementById("PlayerPicture").src = "";
		document.getElementById("PlayerCat1").innerHTML = "";
		document.getElementById("PlayerCat2").innerHTML = "";
		document.getElementById("PlayerCat3").innerHTML = "";
		document.getElementById("PlayerCat4").innerHTML = "";
		//The background colour becomes white and all the card info is set to null
		
		document.getElementById("Info").innerHTML = "Bad luck! Your opponent wins the game.";
		//Info informs the user that they have lost
	}
	else {
		document.getElementById("PlayerCard").style = "background-color: " + setColours[set] + "; width: 500px; color: white;";
		//The background colour becomes blue to show the colour of the cards
	}
	
	if ((playerCards[0] == null) && (opponentCards[0] == null)) {
		//If both players have no cards left
		document.getElementById("Info").innerHTML = "No one wins the game.";
		//Info informs the user that no one has won
	}
	
	document.getElementById("PlayerCat1").style = "background-color: white;";
	document.getElementById("PlayerCat2").style = "background-color: white;";
	document.getElementById("PlayerCat3").style = "background-color: white;";
	document.getElementById("PlayerCat4").style = "background-color: white;";
	document.getElementById("OpponentCat1").style = "background-color: white;";
	document.getElementById("OpponentCat2").style = "background-color: white;";
	document.getElementById("OpponentCat3").style = "background-color: white;";
	document.getElementById("OpponentCat4").style = "background-color: white;";
	//Colours all the card buttons in white
	
	document.getElementById("PlayerNumberOfCards").innerHTML = String(playerCards.length);
	document.getElementById("OpponentNumberOfCards").innerHTML = String(opponentCards.length);
	//Displays the amount of cards each player has
	
	document.getElementById("OpponentName").innerHTML = "TOP TRUMPS</br>TV Shows</br></br>Card";
	//Displays the info that is displayed on the back of the opponent's card
	
	document.getElementById("PlayerName").innerHTML = String(cards[set][playerCards[0]][0]);
	//Displays the card's name
	document.getElementById("PlayerPicture").src = "Images/" + cards[set][playerCards[0]][1];
	//Displays the card's image
	document.getElementById("PlayerCat1").innerHTML = cardCategories[set][0] + ": " + String(cards[set][playerCards[0]][2]);
	//Displays the card's date first aired
	//Only outputs part of the date/time value by only displaying the date part
	document.getElementById("PlayerCat2").innerHTML = cardCategories[set][1] + ": " + String(cards[set][playerCards[0]][3]);
	//Displays the card's number of series
	document.getElementById("PlayerCat3").innerHTML = cardCategories[set][2] + ": " + String(cards[set][playerCards[0]][4]);
	//Displays the card's viewing figures
	document.getElementById("PlayerCat4").innerHTML = cardCategories[set][3] + ": " + String(cards[set][playerCards[0]][5]);
	//Displays the card's popularity
	//Displays the Player's top card
	
	if (userPlaying == true) {
		//If the user is playing
		document.getElementById("Info").innerHTML = "Click on one of the categories on your card on the left.";
		//The info changes
		
		document.getElementById("PlayerCat1").disabled = false;
		document.getElementById("PlayerCat2").disabled = false;
		document.getElementById("PlayerCat3").disabled = false;
		document.getElementById("PlayerCat4").disabled = false;
		//Enables the category buttons to allow user to click
	}
	else {
		//If the opponent is playing
		document.getElementById("Info").innerHTML = "Please wait while your opponent is choosing a category.";
		//The info changes
		
		document.getElementById("PlayerCat1").disabled = true;
		document.getElementById("PlayerCat2").disabled = true;
		document.getElementById("PlayerCat3").disabled = true;
		document.getElementById("PlayerCat4").disabled = true;
		//Disables the category buttons when the opponent is playing
		
		document.getElementById("NextButton").disabled = true;
		//The user cannot click on the Next button
		
		OpponentPlayerClick();
		//Function called
	}
	
	if (opponentCards[0] == null) {
		//If the opponent has no cards left
		document.getElementById("OpponentCard").style = "background-color: white;  width: 500px; color: white;";
		
		document.getElementById("OpponentName").innerHTML = "";
		document.getElementById("OpponentPicture").src = "";
		document.getElementById("OpponentCat1").innerHTML = "";
		document.getElementById("OpponentCat2").innerHTML = "";
		document.getElementById("OpponentCat3").innerHTML = "";
		document.getElementById("OpponentCat4").innerHTML = "";
		
		//The background colour becomes white and all the card info is set to null
		
		document.getElementById("Info").innerHTML = "Congratulations! You win the game.";
		//Info informs the user that they have lost
	}
	else {
		document.getElementById("OpponentCard").style = "background-color: " + setColours[set] + "; width: 500px; color: white;";
		//The background colour becomes blue to show the colour of the cards
	}
}


function NextPlayer() {
	//This function is called when the user clicks next
	document.getElementById("NextButton").disabled = true;
	//The user cannot click on the Next button
	
	HideOpponentCards();
	//Function called
	
	DisplayCards();
	//Function called
}


function HideOpponentCards() {
	//This function shows the back of the opponent's card and hides its info from the user
	document.getElementById("OpponentName").innerHTML = "TOP TRUMPS</br>TV Shows</br></br>Card";
	document.getElementById("OpponentPicture").src = "";
	document.getElementById("OpponentCat1").innerHTML = "";
	document.getElementById("OpponentCat2").innerHTML = "";
	document.getElementById("OpponentCat3").innerHTML = "";
	document.getElementById("OpponentCat4").innerHTML = "";
	//Info hidden
}


function DisplayOpponentCards() {
	//This function displays the information on the opponent's card and hides them again
	
	document.getElementById("NextButton").disabled = false;
	//The user can now click on the Next button
	
	document.getElementById("OpponentName").innerHTML = String(cards[set][opponentCards[0]][0]);
	document.getElementById("OpponentPicture").src = "Images/" + cards[set][opponentCards[0]][1];
	document.getElementById("OpponentCat1").innerHTML = cardCategories[set][0] + ": " + String(cards[set][opponentCards[0]][2]);
	document.getElementById("OpponentCat2").innerHTML = cardCategories[set][1] + ": " + String(cards[set][opponentCards[0]][3]);
	document.getElementById("OpponentCat3").innerHTML = cardCategories[set][2] + ": " + String(cards[set][opponentCards[0]][4]);
	document.getElementById("OpponentCat4").innerHTML = cardCategories[set][3] + ": " + String(cards[set][opponentCards[0]][5]);
	//Opponent's info diaplayed
}


function CardComparison(indexNumber, higherOrLower) {
	//This function compares both the user and opponent's cards from the values of the category selected
	
	if (indexNumber == 2) {
		categoryID = "Cat1";
	}
	else if (indexNumber == 3) {
		categoryID = "Cat2";
	}
	else if (indexNumber == 4) {
		categoryID = "Cat3";
	}
	else if (indexNumber == 5) {
		categoryID = "Cat4";
	}
	//categoryID stores the value of an id, depending the argument of the parameter of indexNumber
	
	if (higherOrLower == "lower") {
		//The card with the lowest value wins for that category
		if (cards[set][playerCards[0]][indexNumber] < cards[set][opponentCards[0]][indexNumber]) {
			//If the player's card's value is lower than the oppoenent's card value
			
			userPlaying = true;
			//The user is playing now
			
			DisplayOpponentCards();
			//Function is called
			
			document.getElementById("Player" + categoryID).style = "background-color: lightgreen;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: lightcoral;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "You win your opponent's card! Click next to continue the game.";
			//The info changes
			
			playerCards.push(playerCards[0]);
			playerCards.shift();
			//The player's top card is moved to bottom of the pile
			
			playerCards.push(opponentCards[0]);
			opponentCards.shift();
			//The opponent's top card is taken by the player and moved to the bottom of their pile
			
			if (middleCards[0] != null) {
				index = 0;
				while (index < middleCards.length) {
					playerCards.push(middleCards[index]);
					index += 1;
				}
				middleCards = [];
			}
			//All the cards in middleCards are appended to playerCards and are then deleted from middle cards
			
		}
		else if (cards[set][playerCards[0]][indexNumber] > cards[set][opponentCards[0]][indexNumber]) {
			//If the player's card's value is higher than the oppoenent's card value
			
			userPlaying = false;
			//The opponent is playing now
			
			DisplayOpponentCards();
			//Function is called
			
			document.getElementById("Player" + categoryID).style = "background-color: lightcoral;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: lightgreen;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "You lose your card to your opponent! Click next to continue the game.";
			//The info changes
			
			opponentCards.push(opponentCards[0]);
			opponentCards.shift();
			//The opponent's top card is moved to bottom of the pile
			
			opponentCards.push(playerCards[0]);
			playerCards.shift();
			//The player's top card is taken by the opponent and moved to the bottom of their pile
			
			if (middleCards[0] != null) {
				index = 0;
				while (index < middleCards.length) {
					opponentCards.push(middleCards[index]);
					index += 1;
				}
				middleCards = [];
			}
			//All the cards in middleCards are appended to opponentCards and are then deleted from middle cards
			
		}
		else if (cards[set][playerCards[0]][indexNumber] == cards[set][opponentCards[0]][indexNumber]) {
			//When two cards match they sort to the middle pile
			
			document.getElementById("Player" + categoryID).style = "background-color: orange;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: orange;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "Matching cards! Click next to continue the game.";
			//The info changes
			
			DisplayOpponentCards();
			//Function is called
			
			middleCards.push(playerCards[0]);
			middleCards.push(opponentCards[0]);
			playerCards.shift();
			opponentCards.shift();
			//Both the player and opponent's top cards are moved to the middle pile
			
		}
	}
	else if (higherOrLower == "higher") {
		//The card with the highest value wins for that category
		if (cards[set][playerCards[0]][indexNumber] > cards[set][opponentCards[0]][indexNumber]) {
			//If the player's card's value is higher than the oppoenent's card value
			
			userPlaying = true;
			//The user is playing now
			
			document.getElementById("Player" + categoryID).style = "background-color: lightgreen;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: lightcoral;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "You win your opponent's card! Click next to continue the game.";
			//The info changes
			
			DisplayOpponentCards();
			//Fuhction is called
			
			playerCards.push(playerCards[0]);
			playerCards.shift();
			//The player's top card is moved to bottom of the pile
			
			playerCards.push(opponentCards[0]);
			opponentCards.shift();
			//The opponent's top card is taken by the player and moved to the bottom of their pile
			
			if (middleCards[0] != null) {
				index = 0;
				while (index < middleCards.length) {
					playerCards.push(middleCards[index]);
					index += 1;
				}
				middleCards = [];
			}
			//All the cards in middleCards are appended to playerCards and are then deleted from middle cards
				
		}
		else if (cards[set][playerCards[0]][indexNumber] < cards[set][opponentCards[0]][indexNumber]) {
			//If the player's card's value is lower than the oppoenent's card value
			
			userPlaying = false;
			//The opponent is playing now
			
			document.getElementById("Player" + categoryID).style = "background-color: lightcoral;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: lightgreen;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "You lose your card to your opponent! Click next to continue the game.";
			//The info changes
			
			DisplayOpponentCards();
			//Fuhction is called
			
			opponentCards.push(opponentCards[0]);
			opponentCards.shift();
			//The opponent's top card is moved to bottom of the pile
			
			opponentCards.push(playerCards[0]);
			playerCards.shift();
			//The player's top card is taken by the opponent and moved to the bottom of their pile
			
			if (middleCards[0] != null) {
				index = 0;
				while (index < middleCards.length) {
					opponentCards.push(middleCards[index]);
					index += 1;
				}
				middleCards = [];
			}
			//All the cards in middleCards are appended to opponentCards and are then deleted from middle cards

		}
		else if (cards[set][playerCards[0]][indexNumber] == cards[set][opponentCards[0]][indexNumber]) {
			//When two cards match they sort to the middle pile
			
			document.getElementById("Player" + categoryID).style = "background-color: orange;";
			//The button, that has been clicked on, changes colour
			document.getElementById("Opponent" + categoryID).style = "background-color: orange;";
			//The same category of the opponent changes colour
			
			document.getElementById("Info").innerHTML = "Matching cards! Click next to continue the game.";
			//The info changes
			
			DisplayOpponentCards();
			//Function is called
			
			middleCards.push(playerCards[0]);
			middleCards.push(opponentCards[0]);
			playerCards.shift();
			opponentCards.shift();
			//Both the player and opponent's top cards are moved to the middle pile
			
		}
	}
}


function Click(index, higherOrLower) {
	//When the button of any category is clicked, Player and Opponents cards are compared and sorted
	//The parameter higherOrLower specifies whether a category wins on the highest number or the lowest number
	//The parameter indexNumber specifies which category the user has clicked on so that category can be compared
	
	CardComparison(index, higherOrLower);
	//Function called
	
	document.getElementById("PlayerCat1").disabled = true;
	document.getElementById("PlayerCat2").disabled = true;
	document.getElementById("PlayerCat3").disabled = true;
	document.getElementById("PlayerCat4").disabled = true;
	//All the player's category buttons disabled
}


function OpponentPlayerClick() {
	//This function is used when the opponent is playing and the categories of the opponent's cards are selected by the program
	
	dateAired = 0;
	noSeries = 0;
	figures = 0;
	popularity = 0;
	//Scores that tell the computer how good the value, for each category, is for it to be selected
	
	if (cards[set][opponentCards[0]][2] < "2010-01-01") {
		dateAired = 1;
		if (cards[set][opponentCards[0]][2] < "2000-01-01") {
			dateAired = 2;
		}
	}
	if (cards[set][opponentCards[0]][3] >= 5) {
		noSeries = 1;
		if (cards[set][opponentCards[0]][3] >= 10) {
			noSeries = 2;
		}
	}
	if (cards[set][opponentCards[0]][4] >= 4) {
		figures = 1;
		if (cards[set][opponentCards[0]][4] >= 9) {
			figures = 2;
		}
	}
	if (cards[set][opponentCards[0]][5] >= 80) {
		popularity = 1;
		if (cards[set][opponentCards[0]][5] >= 90) {
			popularity = 2;
		}
	}
	//All the categories are ranked for the card (better the value, higher the number)
	
	bestValues = [];
	//Values sorted depending on difficulty level
	
	if (difficulyLevel = "hard") {
		n = 2;
	}
	else if (difficulyLevel = "easy") {
		n = 0;
	}
	//The ranked cards that the program starts to search through is decided by the difficulty level
	
	while (bestValues[0] == null) {
		//Until bestValues has values
		if ((dateAired == n) || (noSeries == n) || (figures == n) || (popularity == n)) {
			//If the any of the categories have the rank of n for their value
			if (dateAired == n) {
				 bestValues.push(2);
			}
			else if (noSeries == n) {
				 bestValues.push(3);
			}
			else if (figures == n) {
				 bestValues.push(4);
			}
			else if (popularity == n) {
			 	bestValues.push(5);
			}
			//The values with rank n are added to the bestValues list
			
			randomNumber = Math.floor(Math.random() * bestValues.length);
			//To prevent the computer searching the best values sequentially, it picks a random one from the list
			
			index = bestValues[randomNumber];
			//index is a variable that contains value of the index of randomNumber in bestValues
		}
		n -= 1;
		//n is subtracted by 1
	}
	//Searches the numbers to find the category with the best / second best value, depending on diffculty
	
	if (index == 2) {
		higherOrLower = "lower";
	}
	else {
		higherOrLower = "higher";
	}
	//Only the category for Date Aired wins on a lower date
	
	setTimeout(function() { CardComparison(index, higherOrLower); }, 2000);
	//Delays the program for 2 seconds before calling CardComparison function
}