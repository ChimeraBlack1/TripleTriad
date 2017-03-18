

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
			west: 1
		},		
	}
}; //END OF PLAYER OBJECT
 
var cardColor = null;
var enemyCard = null;
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
			$("#" + Player.playerCard.name).hide();
		
			// PLAY ENEMY TURN
			Enemy.enemyTurn(Player.playerCard.name, slot, cardColor);
			
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
	enemyCard: {name: null, value: null},
	
	usedCards: [],
	
	score: 0,
	
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
		
			
	},/* END OF 'CHOOSESLOT' METHOD */
	

	decideSlot: function (playerSlot, possibleSlots, attackPositions) {
		//CHECK IF ADJACENT SLOT IS FULL
		var openMoves = [];
		
		for (i=0;i < possibleSlots.length;i++) {
			//IF POSSIBLE SLOT IS OPEN, ADD TO 'OPENMOVES' ARRAY;
			if (board[possibleSlots[i]] == undefined){
				openMoves.push(possibleSlots[i]);
			}				
		}
		

		// FOR EACH POSSILBLE MOVE, COMPARE EACH CARD IN MY HAND TO THE CARD PLACED
		var goodMoves = this.compareCard(Player.playerCard.value);
		
		// COMPARE GOOD MOVES AGAINST OPEN ATTACK POSITIONS
		var myGoodMoves = this.calcAttack(goodMoves,attackPositions);		
		
		// ELIMINATE DUPLICATE CARD REFERENCES IN PREPARATION TO RANDOMLY DECIDE WHICH GOOD CARD TO PLAY
		var uniqueGoodCards = [];
		$.each(myGoodMoves, function(i, el){
			if($.inArray(el, uniqueGoodCards) === -1) uniqueGoodCards.push(el);
		});
		
		var randGoodCard = Math.floor(Math.random() * uniqueGoodCards.length);
		var enemyCardName = uniqueGoodCards[randGoodCard];
		
		// CLEAR 'UNIQUEGOODCARDS'
		uniqueGoodCards = [];

		// DECIDE WHICH GOOD CARD TO PLAY
		
		// DECIDE WHICH SLOT IT SHOULD BE PLAYED IN

		// DECIDE WHICH MOVES MATTER
		if (openMoves.length >= 1) {
			
			console.log(openMoves + " are The enemy's open moves");	
			var myMoves = [];
			
			for (i=0;i<openMoves.length;i++){
				var testIfOpen = openMoves[i];
				
				if (board[testIfOpen] == undefined) {
					// ADD TO 'MYMOVES' ARRAY
					myMoves.push(testIfOpen);
				}
				
			}

			console.log(myMoves);
			
			var myRandMove = Math.floor(Math.random() * myMoves.length);
			var myFinalRandMove = myMoves[myRandMove];
			var id = "slot" + myFinalRandMove;
			
			//COLOR ENEMY SLOT CHOSEN
			var enemyCardSlotChanger = document.getElementById(id);
			$(enemyCardSlotChanger).css("background-color", "magenta");
			
			// PLACE ENEMY CARD INTO BOARD[SLOT]
			enemyCard = this.selected(enemyCardName);
			board[myFinalRandMove] = enemyCard;
			
			// PLACE CARD INTO 'USEDCARDS' ARRAY
			this.usedCards.push(enemyCardName);
//			console.log("This is used cards ^");
			

		} else if(openMoves.length == 0) {
			// CHECK IF BOARD IS FULL
			var boardSize = Object.keys(board);
			 if (boardSize.length >= 9) {
//				 this.endGame(Player.score, Enemy.score);
				 console.log("end the game");
			 } else {
				// SETCARDRANDOMLY
				this.setCardRandomly();
			 }
		 }

		// SHOW ENEMY PLACING CARD ON BOARD
		$("#slot" + enemySlot).css("background-color", cardColor);
		board[enemySlot] = enemyCard;
		
		// REMOVE CARD FROM ENEMY HAND
		
		
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
			myGoodMoves.push(goodMoves.top[0]);
		}
		
		if (goodMoves.right.length > 0 && attackPositions.includes("R")) {
			myGoodMoves.push(goodMoves.right[0]);
		}
		
		if (goodMoves.bottom.length > 0 && attackPositions.includes("B")) {
			myGoodMoves.push(goodMoves.bottom[0]);
		}
		
		if (goodMoves.left.length > 0 && attackPositions.includes("L")) {
			myGoodMoves.push(goodMoves.left[0]);
		}
		return myGoodMoves;
	},
	
	selected: function(enemyCardName) {
		//SET PLAYER CARD
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

	setCardRandomly: function () {
		
			var choicesArray = [];
			var idNumberArray = [];
			 
			 // LOOP THROUGH SLOTS ON BOARD UNTIL ONE IS 'UNDEFINED'
			 for (i=1; i<10;i++) {
				 if (board[i] == undefined)  {
					
					// GET SLOT ID
					var id = i;
					 
					 // PUSH INTO CHOICES ARRAY
					choicesArray.push(id);
			 	}
			 }
			 
			 var rand = Math.floor(Math.random() * choicesArray.length);
			 var randSlot = choicesArray[rand];
			 var randSlotNumber = "slot"  + randSlot;
			 console.log(randSlot);
			 console.log("that was randSlot ^^ ");
			 console.log(rand);
			 console.log("that was rand ^^ ");
			 
			 // PLACE ENEMY CARD INTO SLOT
			 board[randSlot] = enemyCard;

			 var enemyCardSlotChanger = document.getElementById(randSlotNumber);
			 $(enemyCardSlotChanger).css("background-color","purple");
			 
			 console.log("I have no Attack positions for the card the Player just placed...  I'm just gonna place this here");

	},
	


	goodMoves: {
		top: [],
		right: [],
		bottom: [],
		left: []
	},//END OF 'GOODMOVES' OBJECT
	
	compareCard: function(currentCard) {
		
		
		// IF enemyCardOne NOT USED COMPARE AND CONDITIONALLY ADD enemyCardOne TO GOODMOVES.
		if  ($.inArray("enemyCardOne",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardOne.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardOne.name);
			}
			
			// EAST
			if (Enemy.hand.CardOne.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardOne.name);
			}
			
			// SOUTH
			if (Enemy.hand.CardOne.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardOne.name);
			}
			
			// WEST
			if (Enemy.hand.CardOne.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardOne.name);
			}
		}
		
		
		
		// IF enemyCardTwo NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardTwo",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardTwo.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardTwo.name);
			}
			// EAST
			if (Enemy.hand.CardTwo.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardTwo.name);
			}
			// SOUTH
			if (Enemy.hand.CardTwo.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardTwo.name);
			}
			// WEST
			if (Enemy.hand.CardTwo.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardTwo.name);
			}
		}
		
		// IF enemyCardThree NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardThree",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardThree.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardThree.name);
			}
			// EAST
			if (Enemy.hand.CardThree.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardThree.name);
			}
			// SOUTH
			if (Enemy.hand.CardThree.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardThree.name);
			}
			// WEST
			if (Enemy.hand.CardThree.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardThree.name);
			}
		}

		// IF enemyCardFour NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardFour",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardFour.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFour.name);
			}
			// EAST
			if (Enemy.hand.CardFour.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFour.name);
			}
			// SOUTH
			if (Enemy.hand.CardFour.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFour.name);
			}
			// WEST
			if (Enemy.hand.CardFour.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFour.name);
			}

		}
		
		
		// IF enemyCardFive NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardFive",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardFive.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFive.name);
			}
			// EAST
			if (Enemy.hand.CardFive.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFive.name);
			}
			// SOUTH
			if (Enemy.hand.CardFive.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFive.name);
			}
			// WEST
			if (Enemy.hand.CardFive.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFive.name);
			}

		}
		
		
		// IF enemyCardSix NOT USED COMPARE AND CONDITIONALLY ADD enemyCardTwo TO GOODMOVES.
		if  ($.inArray("enemyCardSix",Enemy.usedCards) == -1){
			// NORTH
			if (Enemy.hand.CardSix.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardSix.name);
			}
			// EAST
			if (Enemy.hand.CardSix.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardSix.name);
			}
			// SOUTH
			if (Enemy.hand.CardSix.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardSix.name);
			}
			// WEST
			if (Enemy.hand.CardSix.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardSix.name);
			}
		}
		return Enemy.goodMoves;
	}
	
	 
	
};// END OF 'ENEMY' OBJECT
