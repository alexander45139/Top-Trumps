//This file stores all functions for the Display Top Trump Cards slideshow and the Card Categories table

set = Number(sessionStorage.index);
//The user's selected index is defined as an integer

var cardIndex = 0;
//Variable keeps track of what is shown to the user

DisplayCard();
//Function called


function DisplayCard() {
	//Displays the current card selected and also the table that informs the user about the highest values of the set
	if (cardIndex == -1) {
		cardIndex = 0;
		//cardIndex returns to 1 if user clicks left past 0
	}
	else if (cardIndex == cards[set].length) {
		cardIndex = cards[set].length - 1;
		//cardIndex returns to length of cards - 1 if the user goes past it
	}
	//This prevents the slideshow from trying to display an index that does not exist
	
	document.getElementById("Name").innerHTML = String(cards[set][cardIndex][0]);
	//Displays the card's name
	document.getElementById("Picture").src = "Images/" + cards[set][cardIndex][1];
	//Displays the card's picture
	document.getElementById("DisplayCat1").innerHTML = cardCategories[set][0] + ": " + String(cards[set][cardIndex][2]);
	//Displays the card's first category
	document.getElementById("DisplayCat2").innerHTML = cardCategories[set][1] + ": " + String(cards[set][cardIndex][3]);
	//Displays the card's second category
	document.getElementById("DisplayCat3").innerHTML = cardCategories[set][2] + ": " + String(cards[set][cardIndex][4]);
	//Displays the card's third category
	document.getElementById("DisplayCat4").innerHTML = cardCategories[set][3] + ": " + String(cards[set][cardIndex][5]);
	//Displays the card's fourth category
	
	document.getElementById("Card Number").innerHTML = String(cardIndex + 1);
	document.getElementById("Number of Cards").innerHTML = String(cards[set].length);
	//Displays the current card index + 1 and total number of cards
	
	document.getElementById("TableCat1").innerHTML = cardCategories[set][0];
	//Displays the card's first category
	document.getElementById("TableCat2").innerHTML = cardCategories[set][1];
	//Displays the card's second category
	document.getElementById("TableCat3").innerHTML = cardCategories[set][2];
	//Displays the card's third category
	document.getElementById("TableCat4").innerHTML = cardCategories[set][3];
	//Displays the card's fourth category
	
	document.getElementById("Card").style.backgroundColor = setColours[set];
	//Background colour of the card on display is set to the right colour for the current set of cards
}


function Slideshow(direction) {
	//Changes the card when the user selects right or left
	if (direction == "right") {
		cardIndex += 1;
		DisplayCard();
		//cardIndex appends by 1 if the direction is right and function is called
		
	}
	else if (direction == "left") {
		cardIndex -= 1;
		DisplayCard();
		//cardIndex decreases by 1 if the direction is left and function is called
	}
}


//This peice of code fills in the Card Categories Table with the highest and lowest values of each category
function FindTableValue(variable, index, hOrL) {
	//This function searches for and returns the highest/lowest value for specific category in the set of cards
	//variable = e.g. highestDFA
	//index = the index of each list where the category's values are stored
	//hOrL = whether the function is searching for the highest or lowest value from a category
	for (i in cards) {
		//For every list in cards
		if (hOrL == "highest") {
			if (cards[set][i][index] > variable) {
				variable = cards[set][i][index];
			}
		}
		//When the program is looking for the highest value, if the index's value in the current list is higher than variable, then variable's value will be replaced with the list's value
		else if (hOrL == "lowest") {
			if (cards[set][i][index] < variable) {
				variable = cards[set][i][index];
			}
		}
		//When the program is looking for the lowest value, if the index's value in the current list is lower than variable, then variable's value will be replaced with the list's value
	}
	return String(variable);
	//The function returns a stringed value of variable
}


highestDFA = FindTableValue(cards[set][0][2], 2, "highest");
lowestDFA = FindTableValue(cards[set][0][2], 2, "lowest");
//Both variables have new values of the returned value from the function, FindTableValue its with parameters

highestNOS = FindTableValue(cards[set][0][3], 3, "highest");
lowestNOS = FindTableValue(cards[set][0][3], 3, "lowest");
//Both variables have new values of the returned value from the function, FindTableValue its with parameters

highestVF = FindTableValue(cards[set][0][4], 4, "highest");
lowestVF = FindTableValue(cards[set][0][4], 4, "lowest");
//Both variables have new values of the returned value from the function, FindTableValue its with parameters

highestP = FindTableValue(cards[set][0][5], 5, "highest");
lowestP = FindTableValue(cards[set][0][5], 5, "lowest");
//Both variables have new values of the returned value from the function, FindTableValue its with parameters

document.getElementById("HighestDFA").innerHTML = highestDFA;
document.getElementById("LowestDFA").innerHTML = lowestDFA;
document.getElementById("HighestNOS").innerHTML = highestNOS;
document.getElementById("LowestNOS").innerHTML = lowestNOS;
document.getElementById("HighestVF").innerHTML = highestVF;
document.getElementById("LowestVF").innerHTML = lowestVF;
document.getElementById("HighestP").innerHTML = highestP;
document.getElementById("LowestP").innerHTML = lowestP;
//The id elements, showing the highest and lowest values of each category, are written into the table: Card Categories