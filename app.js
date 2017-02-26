

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
var slottedCard = null;
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
			Enemy.enemyTurn(Player.playerCard.name, slot, cardColor, Player.playerCard.value);
			
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
			
			switch(board[slot[0]]) {
				case "playerCardOne":
					slottedCard = Player.hand.cardOne[0];
					break;
				case "playerCardTwo":
					slottedCard = Player.hand.cardTwo[0];
					break;
				case "playerCardThree":
					slottedCard = Player.hand.cardThree[0];
					break;
				case "playerCardFour":
					slottedCard = Player.hand.cardFour[0];
					break;
				case "playerCardFive":
					slottedCard = Player.hand.cardFive[0];
					break;
				case "playerCardSix":					
					slottedCard = Player.hand.cardSix[0];
					break;				 
			}
			
			//board slot is full, can't place card
			console.log(board[slot] + " " + "(" + slottedCard + ")" + " is already in that slot");
			return
		}
	},
	
	
	
};// END OF 'CARD' OBJECT





var Enemy = {
	
	hand: {
		CardOne:  {
			name: 'enemyCardOne ', 
			north: 6,
			east: 4,
			south: 1,
			west: 3
		},
		CardTwo:  {
			name: 'enemyCardTwo ', 
			north: 3,
			east: 3,
			south: 3,
			west: 3
		},
		CardThree:  {
			name: 'enemyCardThree ', 
			north: 1,
			east: 4,
			south: 4,
			west: 1
		},
	 	CardFour:  {
			name: 'enemyCardFour ', 
			north: 4,
			east: 6,
			south: 4,
			west: 6
		},
	 	CardFive:  {
			name: 'enemyCardFive ', 
			north: 3,
			east: 3,
			south: 9,
			west: 7
		},
	 	CardSix:  {
			name:'enemyCardSix ', 
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
		switch(slot) {
			case 1:
				//2,4
				this.decideSlot(1,[2,4]);
				break;
			case 2:
				//1,3,5
				this.decideSlot(2,[1,3,5]);
				break;
			case 3:
				//2,6
				this.decideSlot(3,[2,6]);
				break;
			case 4:
				//1,5,7
				this.decideSlot(4,[1,5,7]);
				break;
			case 5:
				//2,4,6,8
				this.decideSlot(5,[2,4,6,8]);
				break;
			case 6:
				//3,5,9
				this.decideSlot(6,[3,5,9]);
				break;
			case 7:
				//4,8
				this.decideSlot(7,[4,8]);
				break;
			case 8:
				//7,5,9
				this.decideSlot(8,[7,5,9]);
				break;
			case 9:
				//8,6
				this.decideSlot(9,[8,6]);
				break;
		}
		
			
	},// END OF 'CHOOSESLOT' METHOD
	
	

	decideSlot: function (playerSlot,possibleSlots) {
		//CHECK IF ADJACENT SLOT IS FULL
		var leftOrRight = Math.random(1,possibleSlots.length);
		var openMoves = {};
		
		for (i=0;i < possibleSlots.length;i++) {
			//IF POSSIBLE SLOT IS OPEN, ADD TO 'OPENMOVES' ARRAY;
			if (board[possibleSlots[i]] == undefined){
				openMoves[i] = possibleSlots[i];		  
			}				
		}
		
		
		
		// FOR EACH POSSILBLE MOVE, COMPARE EACH CARD IN MY HAND TO THE CARD PLACED
		this.compareCard(Player.playerCard.value);
		
		
		// AND TELL ME WHICH CARDS HAVE AJACENT VALUES THAT ARE HIGHER
		

//		console.log(openMoves);
		
		// SHOW ENEMY PLACING CARD ON BOARD
		$("#slot" + enemySlot).css("background-color", cardColor);
		board[enemySlot] = enemyCard;
		
		console.log(enemyCard);
//		
//		if(board[possibleSlots[i]] == undefined && board[y] == undefined) {
//			if (leftOrRight > 0.5) {
//				enemySlot = 2;
//				console.log('enemySlot is ' + enemySlot);
//			} else {
//				enemySlot = 4;
//				console.log('enemySlot is '+ enemySlot);
//			}
//		} else if (board[x] == undefined && board[y] != undefined) {
//
//		} else if(board[y] == undefined && board[x] != undefined) {
//
//		} else {
//			//BOTH SLOTS ARE FULL
//		}
	},
	
	goodMoves: [],//END OF 'GOODMOVES' ARRAY
	
	compareCard: function(currentCard) {
		var compare = Object.keys(Enemy.hand.CardOne);
		
		for (i=1;i < 5;i++){
//			console.log(Enemy.hand.CardOne[i]);
//			console.log(currentCard[i]);
//			if ([i] >= currentCard[i]){
//				Enemy.goodMoves.push(Enemy.hand.CardOne.name);
//			}
		}
		
		console.log(compare);
	}
	
	 
	
};// END OF 'ENEMY' OBJECT




