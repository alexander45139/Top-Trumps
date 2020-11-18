//This file stores all the card's information

cardSets = ["TV Shows", "Cities of the World", "Doctor Who: The 12 Doctors"];
//The names of each set of cards

setColours = ["blue", "green", "red"]
//The colours of the cards for each set

cardCategories = [
	//TV Shows
	["Date First Aired", "Number of Series", "Viewing Figures of First Episode", "Popularity"],
	
	//Cities of the World
	["Population", "Year of Birth"],
	
	//Doctor Who: The 12 Doctors
	["Courage", "Friendliness", "Companions", "Years of Life (on screen)"]
];
//This array contains name of each category for each card set

cardDateCategories = [
	[1],
	[2],
];
//Specifies which categories from each set are date values (e.g. [1] = Category1)

cards = [
	//TV Shows
	[
		["Doctor Who", "Doctor Who.jpg", "2005-03-26", 11, 10.1, 58],
		["Agents of S.H.I.E.L.D.", "Agents of SHIELD.jpg", "2013-09-24", 5, 2.71, 89],
		["Gotham", "Gotham.jpg", "2014-09-22", 5, 8.21, 80],
		["Red Dwarf", "Red Dwarf.png", "1988-02-15", 12, 3, 76],
		["Sherlock", "Sherlock.jpeg", "2010-07-25", 4, 11.3, 82],
		["Friday Night Dinner", "Friday Night Dinner.png", "2011-02-25", 5, 1.5, 81],
		["The Inbetweeners", "The Inbetweeners.jpg", "2008-05-01", 3, 1.2, 92],
		["Big Bang Theory", "Big Bang Theory.jpg", "2007-09-24", 11, 3.3, 81],
		["Star Trek", "Star Trek.jpg", "1966-09-08", 3, 1, 85],
		["Star Trek: The Next Generation", "Star Trek TNG.jpg", "1987-09-28", 7, 11.5, 82],
		["Dad's Army", "Dad's Army.jpg", "1968-07-31", 9, 0.2, 81],
		["Life On Mars", "Life On Mars.jpg", "2006-01-09", 2, 5.7, 100],
		["Merlin", "Merlin.jpg", "2008-09-20", 5, 7.1, 82],
		["The Office", "The Office.jpg", "2001-07-09", 2, 3, 83],
		["Not Going Out", "Not Going Out.jpg", "2006-10-06", 9, 3.7, 78],
		["Top Gear", "Top Gear.jpg", "2002-10-20", 25, 3.4, 87],
		["The IT Crowd", "The IT Crowd.jpg", "2006-02-03", 4, 1.8, 75],
		["Spaced", "Spaced.png", "1999-09-24", 2, 1.4, 100],
		["Outnumbered", "Outnumbered.jpg", "2007-08-28", 5, 7.5, 59],
		["Blackadder", "Blackadder.jpg", "1983-06-15", 4, 2.3, 81],
		["Broadchurch", "Broadchurch.jpg", "2013-03-04", 3, 1, 93],
		["Luther", "Luther.jpg", "2010-05-04", 4, 0.3, 89],
	],
	//Each value goes in the order of [name, picture, date first aired (oldest wins number of series, viewing figures of first episode (in millions popularity]
	
	//Cities of the World
	[
		["London", "London.jpg", 8.136, 43],
	],
	//Each value is [name, picture, population (in millions), year of birth]
	
	//Doctor Who: The 12 Doctors
	[
		["1st Doctor", "Doctor 1.jpg", 87, 18, 10, 4],
		["2nd Doctor", "Doctor 2.jpg", 68, 50, 6, 3],
		["3rd Doctor", "Doctor 3.jpg", 72, 73, 3, 4],
		["4th Doctor", "Doctor 4.jpg", 90, 89, 9, 4],
		["5th Doctor", "Doctor 5.jpg", 52, 89, 6, 2],
	],
	//Each value is [name, image, courage, frienliness, companions, years of life (on screen)]
];
//2D array with [card entity][values]