

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
		
		console.log(Player.playerCard.value);
		
		//LOG OUT SELECTED CARD
		return
	},
	
	set: function(slot) {
			
			// PLACE CARD ONTO BOARD OBJECT
			board[slot] = Player.playerCard.value;

			// CAPTURE CARD COLOR INFORMATION
			var cardColor = $("#" + Player.playerCard.name).css("background-color");
		
			// CHANGE SLOT INTO CARD REPRESENTATION
			$("#slot" + slot).css("background-color", cardColor);
			console.log("set " + Player.playerCard.name + " into slot " + slot);
			
			// REMOVE CARD FROM PLAYER'S HAND
			$("#" + Player.playerCard.name).hide();
		
			// PLAY ENEMY TURN
			Enemy.enemyTurn(Player.playerCard.name, slot, cardColor);
			
			// RESET CURRENTCARD
			
		
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
		
		switch(playerCard) {
			case "playerCardOne":
				enemyCard = Enemy.hand.CardOne;
				break;
			case "playerCardTwo":
				enemyCard = Enemy.hand.CardTwo;
				break;
			case "playerCardThree":
				enemyCard = Enemy.hand.CardThree;
				break;
			case "playerCardFour":
				enemyCard = Enemy.hand.CardFour;
				break;
			case "playerCardFive":
				enemyCard = Enemy.hand.CardFive;
				break;
			case "playerCardSix":
				enemyCard = Enemy.hand.CardSix;
				break;
		}
		
		// CHOOSE SLOT FOR ENEMYCARD PLACEMENT
		this.chooseSlot(slot);
		console.log("yep still " + enemySlot);

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
				this.decideSlot(5,[2,4,6,8],[R,L,T,L,B]);
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
		
			
	},// END OF 'CHOOSESLOT' METHOD
	
	

	decideSlot: function (playerSlot, possibleSlots, attackPositions) {
		//CHECK IF ADJACENT SLOT IS FULL
		var leftOrRight = Math.random(1,possibleSlots.length);
		var openMoves = [];
		var myGoodMoves = [];
		
		for (i=0;i < possibleSlots.length;i++) {
			//IF POSSIBLE SLOT IS OPEN, ADD TO 'OPENMOVES' ARRAY;
			if (board[possibleSlots[i]] == undefined){
				openMoves.push(possibleSlots[i]);
				console.log(openMoves);
			}				
		}
		

		// FOR EACH POSSILBLE MOVE, COMPARE EACH CARD IN MY HAND TO THE CARD PLACED
		var goodMoves = this.compareCard(Player.playerCard.value);
		console.log("my attack moves are " + attackPositions);
		console.log(goodMoves);

		// DECIDE WHICH MOVES MATTER
		console.log(openMoves + " are my possible moves");
		 if (openMoves.length == 1) {
			 console.log("set card into slot " + openMoves[0]);
			 console.log("#slot" + openMoves[0]);
			 var id = "slot" + openMoves[0];
			 var enemycardslotchanger = document.getElementById(id);
			 $(enemycardslotchanger).css("background-color", "green");
		 } else if(openMoves.length == 0) {
			 // LOOP THROUGH SLOTS ON BOARD UNTIL ONE IS 'UNDEFINED'
			 for (i=1; i<9;i++) {
				 if (board[i] == undefined)  {
					board[i] = Player.playerCard.value;
					var newCard = board[i];
					console.log(newCard.name);
					console.log("was inserted into" + i);
					break;
			 	} 
			 }
			 
		 }
//		
//		console.log(openMoves.length);
		
		// IF MY 'OPENMOVES' ARRAY CONTAINS X THEN ADD IT TO 'MYGOODMOVES'
//		$.inArray
//		
//		switch (openMoves) {
//			case :
//		}
		// MY 'GOODMOVES' ARRAY.
		console.log(myGoodMoves + " are my good moves");

		
		// SHOW ENEMY PLACING CARD ON BOARD
		$("#slot" + enemySlot).css("background-color", cardColor);
		board[enemySlot] = enemyCard;
		
		// CLEAR DECISIONS 
		openMoves = [];
		goodMoves = [];
		this.goodMoves = {
			top: [],
			right: [],
			bottom: [],
			left: []
		};
		

	},// END OF 'DECIDESLOT' METHOD
	

	goodMoves: {
		top: [],
		right: [],
		bottom: [],
		left: []
	},//END OF 'GOODMOVES' OBJECT
	
	compareCard: function(currentCard) {
		
		// NORTH
			if (Enemy.hand.CardOne.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardOne.name);
			}
			if (Enemy.hand.CardTwo.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardTwo.name);
			}
			if (Enemy.hand.CardThree.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardThree.name);
			}
			if (Enemy.hand.CardFour.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFour.name);
			}
			if (Enemy.hand.CardFive.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardFive.name);
			}
			if (Enemy.hand.CardSix.north >= currentCard.south) {
				Enemy.goodMoves.bottom.push(Enemy.hand.CardSix.name);
			}
		
		// EAST
			if (Enemy.hand.CardOne.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardOne.name);
			}
			if (Enemy.hand.CardTwo.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardTwo.name);
			}
			if (Enemy.hand.CardThree.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardThree.name);
			}
			if (Enemy.hand.CardFour.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFour.name);
			}
			if (Enemy.hand.CardFive.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardFive.name);
			}
			if (Enemy.hand.CardSix.east >= currentCard.west) {
				Enemy.goodMoves.left.push(Enemy.hand.CardSix.name);
			}
		
		// SOUTH
			if (Enemy.hand.CardOne.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardOne.name);
			}
			if (Enemy.hand.CardTwo.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardTwo.name);
			}
			if (Enemy.hand.CardThree.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardThree.name);
			}
			if (Enemy.hand.CardFour.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFour.name);
			}
			if (Enemy.hand.CardFive.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardFive.name);
			}
			if (Enemy.hand.CardSix.south >= currentCard.north) {
				Enemy.goodMoves.top.push(Enemy.hand.CardSix.name);
			}
		
		// WEST
			if (Enemy.hand.CardOne.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardOne.name);
			}
			if (Enemy.hand.CardTwo.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardTwo.name);
			}
			if (Enemy.hand.CardThree.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardThree.name);
			}
			if (Enemy.hand.CardFour.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFour.name);
			}
			if (Enemy.hand.CardFive.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardFive.name);
			}
			if (Enemy.hand.CardSix.west >= currentCard.east) {
				Enemy.goodMoves.right.push(Enemy.hand.CardSix.name);
			}
		return Enemy.goodMoves;
	}
	
	 
	
};// END OF 'ENEMY' OBJECT




