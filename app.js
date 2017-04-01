var Game = {
	
	// COMPARE THE PLAYERCARD TO ANY SURROUNDING ENEMY CARDS, AND 
	// IF THE PLAYER'S CARD'S VALUE BEATS THE ENEMY'S, THEN 
	// RECORD THE PLAYER TAKING OWNERSHIP OF THE SLOT
	
	// COMPARE THE ENEMYCARD TO ANY SURROUNDING PLAYER CARDS, AND
	// IF THE ENEMY'S CARD'S VALUE BEATS THE ENEMY'S, THEN
	// RECORD THE ENEMY TAKING OWNERSHIP OF THE SLOT
	
	processBattle: function (playerCardDetails, enemyCardDetails) {
		if (Player.playerCard.value.north > Enemy.enemyCard.value.north){
			
		}
	},
	
	score: 0,
	
};// END OF GAME OBJECT

var Player = {
	playerCard: {name: null, value: null},
	
	hand: {
		cardOne: {
			name: 'playerCardOne',
			north: 1,
			east: 2,
			south: 1,
			west: 7
		},
		cardTwo: {
			name: 'playerCardTwo',
			north: 1,
			east: 3,
			south: 5,
			west: 4
		},
		cardThree: {
			name: 'playerCardThree',
			north: 2,
			east: 1,
			south: 4,
			west: 8
		},
		cardFour: {
			name:'playerCardFour',
			north: 7,
			east: 1,
			south: 1,
			west: 1
		},
		cardFive: {
			name: 'playerCardFive',
			north: 9,
			east: 7,
			south: 3,
			west: 3
		},
		cardSix: {
			name: 'playerCardSix',
			north: 5,
			east: 1,
			south: 6,
			west: 9
		},		
	}
}; //END OF PLAYER OBJECT
 
var cardColor = null;
//var enemyCard = null;
var enemySlot = null;

var board = {
	
};//END OF BOARD OBJECT

var card = {
	
	selected: function(newPlayerCard) {
		//SET PLAYER CARD
		Player.playerCard.name = newPlayerCard;
	
		switch(newPlayerCard) {
			case "playerCardOne":
				Player.playerCard.value = Player.hand.cardOne;
				break;
			case "playerCardTwo":
				Player.playerCard.value = Player.hand.cardTwo;
				break;
			case "playerCardThree":
				Player.playerCard.value = Player.hand.cardThree;
				break;
			case "playerCardFour":
				Player.playerCard.value = Player.hand.cardFour;
				break;
			case "playerCardFive":
				Player.playerCard.value = Player.hand.cardFive;
				break;
			case "playerCardSix":
				Player.playerCard.value = Player.hand.cardSix;
				break;				
		}
		
		//LOG OUT SELECTED CARD
		console.log(Player.playerCard.value);		
		return
	},
	
	set: function(slot) {
			
			// PLACE CARD ONTO BOARD OBJECT
			board[slot] = Player.playerCard.value;

			// CAPTURE CARD COLOR INFORMATION
			var cardColor = $("#" + Player.playerCard.name).css("background-color");
		
			// CHANGE SLOT INTO CARD REPRESENTATION
			$("#slot" + slot).css("background-color", cardColor);
			
			// REMOVE CARD FROM PLAYER'S HAND
			$("#" + Player.playerCard.name).css("visibility", "hidden");
		
			// PLAY ENEMY TURN
			Enemy.enemyTurn(Player.playerCard.name, slot, cardColor);
		
			// Game.processBattle(Player.playerCard.name, Enemy.enemyCard.name);
		
			// RESET PLAYERCARD
			Player.playerCard.name = null;
			return
	},
	
	checkIfSet: function(slot) {
		
		if (board[slot] == undefined && Player.playerCard.name != null) {
			this.set(slot);
		}else if(board[slot] == undefined) {
			console.log('There is nothing in that slot');
		}else {
			
			var boardSlot = board[slot];
			var slottedCard = boardSlot.name;
			
			switch(slottedCard) {
				case 'playerCardOne':
					slottedCard = Player.hand.cardOne.name;
					break;
				case 'playerCardTwo':
					slottedCard = Player.hand.cardTwo.name;
					break;
				case "playerCardThree":
					slottedCard = Player.hand.cardThree.name;
					break;
				case "playerCardFour":
					slottedCard = Player.hand.cardFour.name;
					break;
				case "playerCardFive":
					slottedCard = Player.hand.cardFive.name;
					break;
				case "playerCardSix":					
					slottedCard = Player.hand.cardSix.name;
					break;				 
			}
			
			//board slot is full, can't place card
			console.log(slottedCard + " is already in that slot");
			return
		}
	},
	
	
	
};// END OF 'CARD' OBJECT



var Enemy = {
	enemyCard: {
		name: null, 
		value: null
	},
	
	usedCards: [],
	
	hand: {
		CardOne:  {
			name: 'enemyCardOne', 
			north: 6,
			east: 4,
			south: 1,
			west: 3
		},
		CardTwo:  {
			name: 'enemyCardTwo', 
			north: 3,
			east: 3,
			south: 3,
			west: 3
		},
		CardThree:  {
			name: 'enemyCardThree', 
			north: 1,
			east: 4,
			south: 4,
			west: 1
		},
	 	CardFour:  {
			name: 'enemyCardFour', 
			north: 4,
			east: 6,
			south: 4,
			west: 6
		},
	 	CardFive:  {
			name: 'enemyCardFive', 
			north: 3,
			east: 3,
			south: 9,
			west: 7
		},
	 	CardSix:  {
			name:'enemyCardSix', 
			north: 1,
			east: 1,
			south: 3,
			west: 2
		}
	},
	
	
	enemyTurn: function(playerCard, slot, cardColor) {

		// CHOOSE SLOT FOR ENEMYCARD PLACEMENT
		this.chooseSlot(slot);

	},
	
	//	1	2	3
	//	4	5	6
	//	7	8	9

	chooseSlot: function(slot) {

		var R = "R";
		var L = "L";
		var T = "T";
		var B = "B";
		
		switch(slot) {
			case 1:
				//2,4
				this.decideSlot(1,[2,4],[R,L]);
				break;
			case 2:
				//1,3,5
				this.decideSlot(2,[1,3,5],[R,L,B]);
				break;
			case 3:
				//2,6
				this.decideSlot(3,[2,6],[B,L]);
				break;
			case 4:
				//1,5,7
				this.decideSlot(4,[1,5,7],[T,R,B]);
				break;
			case 5:
				//2,4,6,8
				this.decideSlot(5,[2,4,6,8],[R,L,T,B]);
				break;
			case 6:
				//3,5,9
				this.decideSlot(6,[3,5,9],[T,L,B]);
				break;
			case 7:
				//4,8
				this.decideSlot(7,[4,8],[T,R]);
				break;
			case 8:
				//7,5,9
				this.decideSlot(8,[7,5,9],[T,L,R]);
				break;
			case 9:
				//8,6
				this.decideSlot(9,[8,6],[L,T]);
				break;
		}
		
			
	},/* END OF 'chooseSlot' METHOD */
	
	openMoves: function(possibleSlots) {
		var openMoves = [];
		
		for (i=0;i < possibleSlots.length;i++) {
			//IF POSSIBLE SLOT IS OPEN, ADD TO 'OPENMOVES' ARRAY;
			if (board[possibleSlots[i]] == undefined){
				openMoves.push(possibleSlots[i]);
			}				
		}
		
		return openMoves;
	}, /* END OF 'openMoves' METHOD */
	
	removeCard: function (enemyCardName) {
		// REMOVE CARD FROM ENEMY HAND
		$("#" + enemyCardName).css("visibility", "hidden");
	},
			


	decideSlot: function (playerSlot, possibleSlots, attackPositions) {
		//CHECK IF ADJACENT SLOT HAS A CARD ALREADY
		var openMoves = this.openMoves(possibleSlots);
		
		// FOR EACH POSSILBLE MOVE, COMPARE EACH CARD IN MY HAND TO THE CARD PLACED
		var goodMoves = this.compareCard(Player.playerCard.value);
		
		
		// COMPARE GOOD MOVES AGAINST OPEN ATTACK POSITIONS
		var myGoodMoves = this.calcAttack(goodMoves,attackPositions);		
		
		// FINALLY, CHOOSE A CARD TO PLAY
		// AND PUT THE FINALLY SELECTED ENEMYCARD OBJECT INTO THIS VARIABLE
		var enemyCardDetails = this.chooseCard(myGoodMoves);
		enemyCard = enemyCardDetails.enemyCard;
		enemyCardName = enemyCardDetails.enemyCardName;
		
		// IF THE ENEMY HAS AN OPEN MOVE
		if (openMoves.length >= 1) {
			
			console.log(openMoves + " are The enemy's open moves");	
			// GET A RANDOM NUMBER IN BETWEEN 1 AND THE 'MYMOVES' ARRAY LENGTH
			var myRandMove = Math.floor(Math.random() * openMoves.length);
			
			// FINAL ENEMY SLOT CHOICE
			var myFinalRandMove = openMoves[myRandMove];
			
			// CHANGE THE COLOR OF THE CHOSEN SLOT
			var id = "slot" + myFinalRandMove;
			var enemyCardSlotChanger = document.getElementById(id);
			$(enemyCardSlotChanger).css("background-color", "magenta");
			
			// PLACE ENEMY CARD INTO BOARD[SLOT]
			board[myFinalRandMove] = enemyCard;

		} else if(openMoves.length == 0) {
			// CHECK IF BOARD IS FULL
			var boardSize = Object.keys(board);
			 
			if (boardSize.length >= 9) {
				console.log("end the game");
				return;
			 } else {
				// SETCARDRANDOMLY
				console.log('setting the card randomly');
				this.setCardRandomly(enemyCard);
			 }
		 }
		
		// PLACE CARD INTO 'USEDCARDS' ARRAY
		this.usedCards.push(enemyCardName);

		// SHOW ENEMY PLACING CARD ON BOARD
		$("#slot" + enemySlot).css("background-color", cardColor);
		board[enemySlot] = enemyCard;

		this.removeCard(enemyCardName);
		
		// CLEAR DECISIONS
		openMoves = [];
		goodMoves = [];
		this.goodMoves = {
			top: [],
			right: [],
			bottom: [],
			left: []
		};
		

	}, /* END OF 'DECIDESLOT' METHOD */
	
	calcAttack: function(goodMoves,attackPositions) {
		// IF THERE IS A GOOD MOVE AT AN AVAILABLE ATTACK POSITION ADD IT TO 'MYGOODMOVES' ARRAY
		var myGoodMoves = [];
		
		if (goodMoves.top.length > 0 && attackPositions.includes("T")) {
			for (i=0;i<goodMoves.top.length;i++) {
				myGoodMoves.push(goodMoves.top[i]);
			}
		}
		
		if (goodMoves.right.length > 0 && attackPositions.includes("R")) {
			for(i=0;i<goodMoves.right.length;i++){
				myGoodMoves.push(goodMoves.right[i]);	
			}			
		}
		
		if (goodMoves.bottom.length > 0 && attackPositions.includes("B")) {
			for(i=0;i<goodMoves.bottom.length;i++) {
				myGoodMoves.push(goodMoves.bottom[i]);	
			}			
		}
		
		if (goodMoves.left.length > 0 && attackPositions.includes("L")) {
			for(i=0;i<goodMoves.left.length;i++){
				myGoodMoves.push(goodMoves.left[i]);	
			}			
		}
		return myGoodMoves;
	},
	
		
	chooseCard: function(myGoodMoves) {
		
//		console.log(myGoodMoves);
//		console.log("That was my Good Moves");
		// ELIMINATE DUPLICATE CARD REFERENCES IN PREPARATION TO RANDOMLY DECIDE WHICH GOOD CARD TO PLAY
		var uniqueGoodCards = [];
		$.each(myGoodMoves, function(i, el){
			if($.inArray(el, uniqueGoodCards) === -1) uniqueGoodCards.push(el);
		});
		

		// GET A RANDOM NUMBER FROM 1 TO THE LENGTH OF THE UNIQUE GOOD CARDS ARRAY
		var randGoodCard = Math.floor(Math.random() * uniqueGoodCards.length);
		
		// GRAB A UNIQUE CARD BASED ON THE ABOVE RANDOM NUMBER
		var enemyCardName = uniqueGoodCards[randGoodCard];
		
		// PUT THE FINALLY SELECTED ENEMYCARD OBJECT INTO THIS VARIABLE
		enemyCard = this.selected(enemyCardName);
		console.log(enemyCard);
		
		// CLEAR 'UNIQUEGOODCARDS'
		uniqueGoodCards = [];

		return {
			enemyCard: enemyCard,
			enemyCardName: enemyCardName
		};
	},
	
	
	selected: function(enemyCardName) {
		// SET PLAYER CARD
		this.enemyCard.name = enemyCardName;
	
		switch(enemyCardName) {
			case "enemyCardOne":
				this.enemyCard.value = Enemy.hand.CardOne;
				break;
			case "enemyCardTwo":
				this.enemyCard.value = Enemy.hand.CardTwo;
				break;
			case "enemyCardThree":
				this.enemyCard.value = Enemy.hand.CardThree;
				break;
			case "enemyCardFour":
				this.enemyCard.value = Enemy.hand.CardFour;
				break;
			case "enemyCardFive":
				this.enemyCard.value = Enemy.hand.CardFive;
				break;
			case "enemyCardSix":
				this.enemyCard.value = Enemy.hand.CardSix;
				break;				
		}
		
		return this.enemyCard.value;
	},
	
	setCardRandomly: function(enemyCard){
			console.log("calling SET CARD RANDOMLY!")

			var choicesArray = [];
			
			 // LOOP THROUGH SLOTS ON BOARD UNTIL ONE IS 'UNDEFINED'
			 for (i=1; i<10;i++) {
				 if (board[i] == undefined)  {
					
					// GET SLOT ID
					var id = i;
					 
					 // PUSH INTO CHOICES ARRAY
					 choicesArray.push(id);
				}
			}
		
			var rand = Math.floor(Math.random()* choicesArray.length);
			console.log(rand);
			console.log("That was rand ^");
			var randSlot = choicesArray[rand];
			var randSlotNumber = "slot"  + randSlot;
			 
			// PLACE ENEMY CARD INTO SLOT
			board[randSlot] = enemyCard;

			var enemyCardSlotChanger = document.getElementById(randSlotNumber);
			$(enemyCardSlotChanger).css("background-color","purple");
	},


	goodMoves: {
		top: [],
		right: [],
		bottom: [],
		left: []
	},//END OF 'GOODMOVES' OBJECT
	
	compareCard: function(currentCard) {
		
		
		// IF enemyCardOne NOT USED COMPARE AND CONDITIONALLY ADD enemyCardOne TO GOODMOVES.
		if  ($.inArray("enemyCardOne",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardOne.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardOne.name);
			}
			
			// EAST
			if (Enemy.hand.CardOne.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardOne.name);
			}
			
			// SOUTH
			if (Enemy.hand.CardOne.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardOne.name);
			}
			
			// WEST
			if (Enemy.hand.CardOne.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardOne.name);
			}
		}
		

		// IF enemyCardTwo NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardTwo",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardTwo.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardTwo.name);
			}
			// EAST
			if (Enemy.hand.CardTwo.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardTwo.name);
			}
			// SOUTH
			if (Enemy.hand.CardTwo.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardTwo.name);
			}
			// WEST
			if (Enemy.hand.CardTwo.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardTwo.name);
			}
		}
		
		// IF enemyCardThree NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardThree",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardThree.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardThree.name);
			}
			// EAST
			if (Enemy.hand.CardThree.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardThree.name);
			}
			// SOUTH
			if (Enemy.hand.CardThree.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardThree.name);
			}
			// WEST
			if (Enemy.hand.CardThree.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardThree.name);
			}
		}

		// IF enemyCardFour NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardFour",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardFour.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFour.name);
			}
			// EAST
			if (Enemy.hand.CardFour.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFour.name);
			}
			// SOUTH
			if (Enemy.hand.CardFour.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFour.name);
			}
			// WEST
			if (Enemy.hand.CardFour.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFour.name);
			}

		}
		
		
		// IF enemyCardFive NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardFive",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardFive.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFive.name);
			}
			// EAST
			if (Enemy.hand.CardFive.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFive.name);
			}
			// SOUTH
			if (Enemy.hand.CardFive.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFive.name);
			}
			// WEST
			if (Enemy.hand.CardFive.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFive.name);
			}

		}
		
		
		// IF enemyCardSix NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardSix",Enemy.usedCards) === -1){
			// NORTH
			if (Enemy.hand.CardSix.north > currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardSix.name);
			}
			// EAST
			if (Enemy.hand.CardSix.east > currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardSix.name);
			}
			// SOUTH
			if (Enemy.hand.CardSix.south > currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardSix.name);
			}
			// WEST
			if (Enemy.hand.CardSix.west > currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardSix.name);
			}
		}
		return Enemy.goodMoves;
	}
	
	 
	
};// END OF 'ENEMY' OBJECT
