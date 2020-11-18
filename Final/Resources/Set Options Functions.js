// This file stores the functions for Set options page

for (i in cards) {
	document.getElementById("SetOptions").innerHTML += "<button onclick='SelectSet(" + i + ")'>" + String(cardSets[i]) + "</button><span style='color: white;'>0000</span>";
}
//The program displays buttons for each card set where the function SelectSet is called when clicked on


function SelectSet(index) {
	sessionStorage.index = index;
	//stores index on the browser so that can be used again on the next page, which the browser downloads to
	window.location.assign("Resources/Game.html");
	//Browser changes page to 'Game.html'
}