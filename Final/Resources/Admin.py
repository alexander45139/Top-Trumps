#This file stores the factory info of the cards & it's the Admin for the user to edit/delete the card sets and cards

import time
#time module is imported

cardSets = ["TV Shows"]
#The names of each set of cards

setColours = ["blue"]
#The colours of the cards for each set

cardCategories = [
	#TV Shows
	["Date First Aired", "Number of Series", "Viewing Figures of First Episode", "Popularity"],
]
#This array contains name of each category for each card set

cardDateCategories = [
	[1],
]
#Specifies which categories from each set are date values (e.g. [1] = Category1)

cards = [
	#TV Shows
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
        ]
#2D array with [card entity][values]
]


changeCardSetOptions = ["displaying all cards", "renaming a card set", "adding a new card set", "deleting a whole card set", "editing a card", "adding a card", "deleting a card"]
#This array contains the options for changing a card set or a card

yesOrNo = ["Yes", "No"]
#This array can be used in Select function for a yes or no query

colours = ["white", "blue", "green", "red", "purple", "yellow", "orange", "black", "grey", "gold", "silver"]
#Stores a list of colours in an array for the user to change or add them (specific for CSS files)


textFile = open("Cards.js", "r")
jsCode = textFile.read()
textFile.close()
#The file Cards.js is opened as a 'read only' file and stores the text in the file as jsCode

textFile = open("Cards.py", "w")
textFile.write(jsCode)
textFile.close()
#The file Cards.py is opened and rewrites the file with the contents of the variable jsCode

from Cards import *
#All variables are imported from the module Cards (i.e. the file Cards.py)


def Submit():
    #This function writes to the JavaScript file 'Cards' with the updated changes made in this program of the arrays cardSets, setColours, cardCategories, cardDateCategories & cards and 
    textFile = open("Cards.js", "w")
    #The file is opened as 'read and write' file
    
    textFile.write("cardSets = " + str(cardSets))
    textFile.write("\n")
    textFile.write("setColours = " + str(setColours))
    textFile.write("\n")
    textFile.write("cardCategories = " + str(cardCategories ))
    textFile.write("\n")
    textFile.write("cardDateCategories = " + str(cardDateCategories))
    textFile.write("\n")
    textFile.write("cards = " + str(cards))
    #The variables are written in so that HTML and JavaScript can read the changes in this program

    textFile.close()
    #The file is closed

    time.sleep(1)
    #1 second delay
    print("All the changes you've made have been saved!")
    #Information telling the user that the updated inputs have been saved]
    time.sleep(1)
    #1 second delay


def Select(text, array, onlyShowFirstIndex):
    #This function displays a number options that must be stored in an array for the user to type in the number of that option and that (number - 1) is returned (-1: so it can be used as an index of an array)
    #The arguments:
    #   - text = queries the user on what they want to select
    #   - array = where the options for the user to select are stored
    #   - onlyShowFirstIndex = if the array is 2D, only the first index in each specific list maybe shown (True or False)
    loop = True
    #Variable ensures the code inside the while iteration keep repeating
    while loop == True:
        print(text)
        # Argument 'text' is displayed
        n = 1
        #The number that the user has to type will increase for the different items in array
        for i in array:
            #For every index in array
            if onlyShowFirstIndex == True:
                #This is for 2D arrays (i.e cards)
                print("Type " + str(n) + " for " + str(i[0]))
            else:
                #This is for 1D arrays (e.g. cardSets)
                print("Type " + str(n) + " for " + str(i))
            #Displays the instruction on which number to type for the current index of i
            n = n + 1
            #n is incremented by 1
        #The for loop above displays the options from an array by displaying each index with instructions to the user on how to 'select' them
        Input = input()
        if Input == "save":
            Submit()
            #The function 'Submit()' is called if the user types in 'save'
            MainProgram()
            #Returns to the start of the program
        elif Input == "exit":
            quit()
            #The whole program closes if the user types in 'exit'
        elif Input == "menu":
            MainProgram()
            #Returns to the start of the program
        elif (int(Input) - 1 >= 0) and (int(Input) - 1 <= len(array)):
                #If the user enters a number that's in of range of 'array'
                Input = int(Input) - 1
                #Input is decremented by 1
                loop = False
                #The while iteration ends
        else:
            print("Invalid input! Please try again.")
            Select(text, array, onlyShowFirstIndex)
            #Select is recalled after a message to the user
    return Input
    #The function returns Input

def SaveOrQuit(value):
    #This function takes 'value' and checks if its value is "save" and "exit"
    if value == "save":
        Submit()
        #The function 'Submit()' is called if the user types in 'save'
        MainProgram()
        #Returns to the start of the program
    elif value == "exit":
        quit()
        #The whole program closes if the user types in 'exit'
    elif value == "menu":
        MainProgram()
        #Returns to the start of the program

def MainProgram():
    #The code inside this function is a recursion loop that keeps repeating until the user types 'exit'
    print("")
    #Empty line displayed
    time.sleep(1)
    #Program delays for 1 second
    changeInput = Select("Main menu options:", changeCardSetOptions, False)
    #Displays all the main options for the user to select which are all stored in the array changeCardSetOptions
    print("")
    #Empty line displayed
    
    if changeInput == 0:
        #If the user inputs 1 (Select function always decrements the input by 1)
        for n in range(0, len(cardSets)):
            print(cardSets[n])
            print("In order of [NAME, IMAGE, CATEGORY 1, CATEGORY 2, CATEGORY 3, CATEGORY 4]")
            for i in cards[n]:
                print(i)
            print("")
            #For each card set, the name of the card set, info on what each index of is and every card with their information is displayed
        enter = input("Press ENTER to go back to the main menu.")
        #This input allows time for the user to look at cards for as long as they want
        SaveOrQuit(enter)
        #This function is called with parameter of enter

    elif changeInput == 1:
        #If the user inputs 2
        setInput = Select("Select the card set you want to edit:", cardSets, False)
        #The returned value of this function is assigned to setInput
        
        print("Enter new name for " + cardSets[setInput] + " below:")
        temp = cardSets[setInput]
        #Old name of card set stored temporarily
        newValue = str(input())
        #User enters their new name for the card set
        SaveOrQuit(newValue)
        #Function called with parameter of newValue
        
        cardSets[setInput] = newValue
        #The value of the card set's name is replaced with the new value
        
        time.sleep(1)
        print("'" + temp + "' is now renamed as '" + newValue + "'.")
        #After a 1 second delay, the user is told that their card set has been sucessfully renamed

    elif changeInput == 2:
        #If the user inputs 3
        newName = str(input("Enter the name of your new card set: "))
        SaveOrQuit(newName)
        #newName stores the value of the user's input of the new card set's name

        inputColour = Select("Choose a background colour for this set of cards.", colours, False)
        #The returned value of an option of colours to choose for the cards are assigned to inputColour

        emptyFour = ["", "", "", ""]
        cardCategories.append(emptyFour)
        #A list with four empty string values added to the array cardCategories
        cardDateCategories.append([])
        #Empty list appended to cardDateCategories
        for n in range(0, 4):
            numberInput = input("Enter the name of Category " + str(n + 1) + " for '" + str(cardSets[len(cardSets) - 1]) + "': ")
            SaveOrQuit(numberInput)
            cardCategories[len(cardCategories) - 1][n] = numberInput
        #This for iteration allows the user to enter a value for each category and adds it to cardCategories array

        n = int(input("Enter the number of categories with date values: "))
        #User enters the number of categories that will have a date value instead of a number
        SaveOrQuit(str(n))
        while n > 0:
            dateInput = Select("Select the category with a date value.", cardCategories[len(cardCategories) - 1], False)
            n -= 1
            cardDateCategories[len(cardDateCategories) - 1].append(dateInput)
        #This while iteration allows the user to select the categories they want to have date values and adds the index of that category to the list of the current card set in the cardDateCategories array
        
        cards.append([])
        #An empty list is added to the cards array

        cardSets.append(newName)
        setColours.append(colours[inputColour])
        #The values of newName and colours with index of inputColour added to the arrays cardSets and setColours respectively
        
        time.sleep(1)
        print("'" + newName + "' has been added to the card sets. Now you are able to add new cards to this set.")
        #After a 1 second delay, a message is displayed to user, saying that their new card set has been added

    elif changeInput == 3:
        #If the user inputs 4
        setInput = Select("Which card set do you want to delete?", cardSets, False)
        #The user selects the card set they want to delete from the array cardSets, where the returned value is stored as the variable setInput
        confirm = Select("Are you sure you want to delete the card set '" + cardSets[setInput] + "'?", yesOrNo, False)
        #The user selects yes or no (from the yesOrNo list) in confirmation of their last input, where the returned value is stored as the variable confirm
        if confirm == 0:
            #If the user selected yes
            temp = cardSets[setInput]
            #Current name of the selected card set is stored as the temp variable
            del cardSets[setInput]
            del setColours[setInput]
            del cardCategories[setInput]
            del cardDateCategories[setInput]
            del cards[setInput]
            #The values above are deleted
            time.sleep(1)
            print("'" + temp + "' has been deleted!")
            #A message tells the user that their selected card set has been deleted
        else:
            #If the user selected no
            print("'" + cardSets[setInput] + "' has NOT been deleted!")
            #A message tells the user that their selected card set has NOT been deleted

    elif changeInput == 4:
        setInput = Select("Select the card set you want to edit:", cardSets, False)
        cardInput = Select("Select the card from " + str(cardSets[setInput]) + " you want to alter:", cards[setInput], True)
        categoryInput = Select("Select the category of the card, " + str(cards[setInput][cardInput][0]) + ", you want to edit:", cardCategories[setInput], False)
        
        print(str(cardCategories[setInput][categoryInput]) + ": " + str(cards[setInput][cardInput][categoryInput + 2]))
        newCategory = input("Enter the new value of this card category: ")
        SaveOrQuit(newCategory)
        cards[setInput][cardInput][categoryInput + 2] = int(newCategory)
        time.sleep(1)
        print(str(cardCategories[setInput][categoryInput]) + ": " + str(cards[setInput][cardInput][categoryInput + 2]))

    elif changeInput == 5:
        setInput = Select("Which card set do you want to add a card to?", cardSets, False)

        newCard = input("Enter name of new card: ")
        SaveOrQuit(newCard)
        

        print("Now place your new card's image in the 'Images' folder.")
        imageName = input("Enter the EXACT name of your image: ")
        SaveOrQuit(imageName)
        imageType = input("Enter the file type of the image (e.g. 'jpg' or 'png'): ")
        SaveOrQuit(imageType)

        for i in cardCategories[setInput]:
            if setInput in cardDateCategories[setInput]:
                pass
            else:
                catValue = input("Enter value for " + i + ": ")
                SaveOrQuit(catValue)
                cards[setInput][len(cards[setInput]) - 1].append(str(catValue))

        cards[setInput].append([])
        cards[setInput][len(cards[setInput]) - 1].append(str(newCard))
        cards[setInput][len(cards[setInput]) - 1].append(str(imageName) + str(imageType))
        
        time.sleep(1)
        print("'" + str(cards[setInput][len(cards[setInput]) - 1][0]) + "' has been added to the card set '" + cardSets[setInput] + "'!")

    elif changeInput == 6:
        setInput = Select("Select the card set that contains the card that you want deleted:", cardSets, False)
        
        cardInput = Select("Which card do you want to delete?", cards[setInput], True)
        
        confirm = Select("Are you sure you want to delete the card '" + str(cards[setInput][cardInput][0]) + "'?", yesOrNo, False)
        if confirm == 0:
            temp = str(cards[setInput][cardInput][0])
            
            del cards[setInput][cardInput]
            time.sleep(1)
            print("'" + temp + "' has been deleted!")
        else:
            print("'" + cardSets[setInput] + "' has NOT been deleted!")

    print("Type 'save' to save these changes.")
    MainProgram()
    #Returns to the start of the program

print("Welcome to Admin!")
print("At any time, you can type 'exit' to exit the program or 'save' to save your changes to the cards. You can also type 'main' to go back to the main menu. IF YOU DO NOT TYPE 'save' BEFORE 'exit', YOUR CHANGES WILL BE LOST!")
#Introduction with instructions to the user are displayed
MainProgram()
#Function is called which contains the main program
