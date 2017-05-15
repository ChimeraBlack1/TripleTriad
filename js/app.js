

var Player = {
	playerCard: {name: null, value: null},
	
	
	hand: {
		cardOne: {
			name: 'playerCardOne',
			north: 1,
			east: 2,
			south: 1,
			west: 7,
			posession: 'player'
		},
		cardTwo: {
			name: 'playerCardTwo',
			north: 1,
			east: 3,
			south: 5,
			west: 4,
			posession: 'player'
		},
		cardThree: {
			name: 'playerCardThree',
			north: 2,
			east: 8,
			south: 4,
			west: 1,
			posession: 'player'
		},
		cardFour: {
			name:'playerCardFour',
			north: 7,
			east: 1,
			south: 3,
			west: 1,
			posession: 'player'
		},
		cardFive: {
			name: 'playerCardFive',
			north: 9,
			east: 7,
			south: 3,
			west: 3,
			posession: 'player'
		},
		cardSix: {
			name: 'playerCardSix',
			north: 5,
			east: 1,
			south: 6,
			west: 9,
			posession: 'player'
		},		
	}
}; //END OF PLAYER OBJECT
 
var cardImg = null;
//var enemyCard = null;
var enemySlot = null;

var board = {
	
};//END OF BOARD OBJECT

var card = {
	
	selected: function(newPlayerCard) {
		//SET PLAYER CARD
		Player.playerCard.name = newPlayerCard;
		// SET ID FOR GETTING ELEMENT
		var id =  "#" + newPlayerCard;
		// ARRAY OF PLAYERCARD NAMES FOR ACCESSING BY ELEMENT ID
		var playerCards = ["playerCardOne", "playerCardTwo","playerCardThree", "playerCardFour", "playerCardFive", "playerCardSix"];
	
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

		
		// IF THE PLAYER CLICKED THE SELECTED CARD,
		if($(id).hasClass("selected")){
			// TOGGLE 'SELECTED' CLASS ONCLICK
			$(id).removeClass("selected");
			
		} else {
			// OTHERWISE,
			
			// REMOVE 'selected' CLASS FROM ALL PLAYER CARDS
			for (i=0;i<playerCards.length;i++){
				if ($("#" + playerCards[i]).hasClass("selected")){
					$("#" + playerCards[i]).removeClass("selected");
				}
			}
			
			//AND ADD THE 'selected' CLASS TO THE CARD THE PLAYER CLICKED ON
			$(id).addClass("selected");	
		}
				
		return
	},
	
	addPlayerCard: function (slot) {
		
		var pcN = Player.playerCard.name;
		
		switch(pcN){
			case "playerCardOne":
				var pc = "pc1"				
				break;
			case "playerCardTwo":
				var pc = "pc2"				
				break;
			case "playerCardThree":
				var pc = "pc3"				
				break;
			case "playerCardFour":
				var pc = "pc4"				
				break;
			case "playerCardFive":
				var pc = "pc5"				
				break;
			case "playerCardSix":
				var pc = "pc6"				
				break;
				
		}
		
		return $("#slot" + slot).addClass(pc);
	},
	
	set: function(slot) {
			
			// PLACE CARD ONTO BOARD OBJECT
			board[slot] = Player.playerCard.value;	
        
            // HIGHLIGHT SLOT PLAYER CLAIMED
            var slotID = "#slot" + slot;
            $(slotID).css("border", "1px solid green");
        	
			// CHANGE SLOT INTO CARD REPRESENTATION
			this.addPlayerCard(slot);
			
			// REMOVE CARD FROM PLAYER'S HAND
			$("#" + Player.playerCard.name).css("visibility", "hidden");
		
			// COMPARE PLAYERCARD TO SURROUNDING CARDS AND TAKE THEM / SCORE POINTS
			Game.playerAttack(slot);
		
			// PLAY ENEMY TURN
			Enemy.enemyTurn(slot);
		
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
			west: 3,
			posession: 'enemy'
		},
		CardTwo:  {
			name: 'enemyCardTwo', 
			north: 3,
			east: 3,
			south: 3,
			west: 3,
			posession: 'enemy'
		},
		CardThree:  {
			name: 'enemyCardThree', 
			north: 1,
			east: 4,
			south: 4,
			west: 1,
			posession: 'enemy'
		},
	 	CardFour:  {
			name: 'enemyCardFour', 
			north: 4,
			east: 6,
			south: 4,
			west: 6,
			posession: 'enemy'
		},
	 	CardFive:  {
			name: 'enemyCardFive', 
			north: 3,
			east: 3,
			south: 9,
			west: 7,
			posession: 'enemy'
		},
	 	CardSix:  {
			name:'enemyCardSix', 
			north: 1,
			east: 1,
			south: 7,
			west: 3,
			posession: 'enemy'
		}
	},
	
	
	enemyTurn: function(slot) {

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
	
	addEnemyCard: function (slot, enemyCard) {
		
		var pcN = enemyCard.name;
		
		switch(pcN){
			case "enemyCardOne":
				var pc = "ec1"				
				break;
			case "enemyCardTwo":
				var pc = "ec2"				
				break;
			case "enemyCardThree":
				var pc = "ec3"				
				break;
			case "enemyCardFour":
				var pc = "ec4"				
				break;
			case "enemyCardFive":
				var pc = "ec5"				
				break;
			case "enemyCardSix":
				var pc = "ec6"				
				break;
				
		}
		
		return $("#slot" + slot).addClass(pc);
	},
			
	finalChoice: function(openMoves) {
			
			console.log(openMoves + " are The enemy's open moves");	
			// GET A RANDOM NUMBER IN BETWEEN 1 AND THE 'MYMOVES' ARRAY LENGTH
			var myRandMove = Math.floor(Math.random() * openMoves.length);
			
			// FINAL ENEMY SLOT CHOICE
			var myFinalRandMove = openMoves[myRandMove];
		
			this.addEnemyCard(myFinalRandMove, enemyCard);
			
			// PLACE ENEMY CARD INTO BOARD[SLOT]
			board[myFinalRandMove] = enemyCard;
        
            // CLAIM POSESSION OF THE CHOSEN SLOT
            var slotID = "#slot" + myFinalRandMove;
            $(slotID).css("border", "1px solid red");
			
			Game.enemyAttack(myFinalRandMove, enemyCard);
		
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
		
		// PLACE CARD INTO 'USEDCARDS' ARRAY
		this.usedCards.push(enemyCardName);
		
		// IF THE ENEMY HAS AN OPEN MOVE
		if (openMoves.length >= 1) {
		
			this.finalChoice(openMoves);

		} else if(openMoves.length == 0) {
			// CHECK IF BOARD IS FULL
			var boardSize = Object.keys(board);
			 
			if (boardSize.length >= 9) {
				
				var playerScore = Game.playerScore;
				var enemyScore = Game.enemyScore;
				
				var finalScore = playerScore - enemyScore;
				
				if (finalScore > 0) {
					console.log("Game over - Player wins: " + playerScore + " to " + enemyScore);
				} else if (finalScore < 0) {
					console.log("Game over - Enemy wins: " + enemyScore + " to " + playerScore);	
				} else {
					console.log("Game over - Tie! " + enemyScore + " all");
				}
				
				return;
				
			 } else {
				 
				// SETCARDRANDOMLY
				console.log('setting the card randomly');
				this.setCardRandomly(enemyCard);
				
			 }
		 }
		
		
		
		console.log(this.usedCards);

		// SHOW ENEMY PLACING CARD ON BOARD
		$("#slot" + enemySlot).css("background-color", cardImg);
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
	
		cardNames: [
		'enemyCardOne',
		'enemyCardTwo',
		'enemyCardThree',
		'enemyCardFour',
		'enemyCardFive',
		'enemyCardSix',
	],
	
		
	chooseCard: function(myGoodMoves) {
		
		
		/* 
			IF THERE ARE NO GOOD CARDS AVAILABLE, JUST GRAB ANY CARD FROM YOUR HAND
		*/
			if (myGoodMoves.length > 1) {
				
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

			} else {
				
				var usedCards = this.usedCards;
				var randCardArray = [];
				var playerHand = this.cardNames;
				
				$.each(playerHand, function(i, el){
					if ($.inArray(el, usedCards) === -1) randCardArray.push(el);
				});
				
				// GET A RANDOM NUMBER FROM 1 TO THE LENGTH OF THE RANDCARDARRAY
				var randGoodCard = Math.floor(Math.random() * randCardArray.length);
				
				// GET A CARD BASED ON THE ABOVE RANDOM #
				var enemyCardName = randCardArray[randGoodCard];
				
				enemyCard = this.selected(enemyCardName);
				
				// CLEAR 'RANDCARDARRAY'
				randCardArray = [];
				
			}

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
		
			this.addEnemyCard(randSlot, enemyCard);
		 	Game.enemyAttack(randSlot, enemyCard);

//			var enemyCardSlotChanger = document.getElementById(randSlotNumber);
//			$(enemyCardSlotChanger).css("background-color","purple");
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



var Game = {
    
    newGame: function() {
      window.location.reload();  
    },

	checkOwnership: function(player, Card, playerCardValue, enemyCardValue, testSlot) {
		// Game.checkOwnership(Card);
		var cardName = Card.posession;
		
		if (playerCardValue - enemyCardValue > 0 && player == "player") {
			if(cardName == 'enemy') { 
				this.increasePlayerScore();
				this.togglePosession(Card, testSlot);
			}
		} else if (playerCardValue - enemyCardValue > 0 && player == "enemy"){
			if(cardName == 'player') {
				this.increaseEnemyScore();
				this.togglePosession(Card, testSlot);
			}
		}
	},
	
	increasePlayerScore: function() {
		this.playerScore += 1;
        this.enemyScore += -1;
		var playerScore = this.playerScore;
		var enemyScore = this.enemyScore;
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('enemyScore').innerHTML = enemyScore;
		
	},
	
	increaseEnemyScore: function() { 
		this.enemyScore += 1;
        this.playerScore += -1;
		var enemyScore = this.enemyScore;
		var playerScore = this.playerScore;
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('enemyScore').innerHTML = enemyScore;
		
	},
	
	togglePosession: function(Card, testSlot) {
		var pos = "#slot" + testSlot;
        
        if (Card.posession == "player"){
			Card.posession = "enemy";
            $(pos).css("border", "1px solid red");
		} else {
			Card.posession = 'player';
            $(pos).css("border", "1px solid green");
		}
		
		
	},
	
	playerScore: 6,
	enemyScore: 6,

	playerAttack: function (slot) {
		
		var player = "player";

		// COMPARE THE PLAYERCARD TO ANY SURROUNDING ENEMY CARDS, AND 
		 
		 switch (slot) {

			case 1:
				//2,4
				if (board[2] !== undefined ) {
					var Card = board[2];
                    var testSlot = 2;
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				
				if (board[4] !== undefined) {
					var Card = board[4];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 2:
				//1,3,5
				if (board[1] !== undefined ) {
					var Card = board[1];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 1;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				 
				if (board[3] !== undefined ) {
					var Card = board[3];
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 3;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				
				break;
			case 3:
				//2,6
				if (board[2] !== undefined ) {
					var Card = board[2];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 4:
				//1,5,7
				if (board[1] !== undefined ) {
					var Card = board[1];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 1;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[7] !== undefined ) {
					var Card = board[7];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 7;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				
				break;
			case 5:
				//2,4,6,8
				if (board[2] !== undefined ) {
					var Card = board[2];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[4] !== undefined ) {
					var Card = board[4];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 6:
				//3,5,9
				if (board[3] !== undefined ) {
					var Card = board[3];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 3;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[9] !== undefined ) {
					var Card = board[9];
					var playerCardValue = Player.playerCard.value.south;
					var enemyCardValue = Card.north;
                    var testSlot = 9;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
			case 7:
				//4,8
				if (board[4] !== undefined ) {
					var Card = board[4];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
			case 8:
				//7,5,9
				if (board[7] !== undefined ) {
					var Card = board[7];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 7;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[9] !== undefined ) {
					var Card = board[9];
					var playerCardValue = Player.playerCard.value.east;
					var enemyCardValue = Card.west;
                    var testSlot = 9;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 9:
				//8,6
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = Player.playerCard.value.west;
					var enemyCardValue = Card.east;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = Player.playerCard.value.north;
					var enemyCardValue = Card.south;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
		};
		
		 
		// IF THE PLAYER'S CARD'S VALUE BEATS THE ENEMY'S, THEN 
		// RECORD THE PLAYER TAKING OWNERSHIP OF THE SLOT
	
	 },
		// compare playerCard placed against surrounding cards
	 enemyAttack: function (enemySlot, enemyCard) {
		 
		var player = "enemy";

		// COMPARE THE ENEMYCARD TO ANY SURROUNDING PLAYER CARDS 
		 
		 switch (enemySlot) {

			case 1:
				//2,4
				if (board[2] !== undefined ) {
					var Card = board[2];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				
				if (board[4] !== undefined) {
					var Card = board[4];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 2:
				//1,3,5
				if (board[1] !== undefined ) {
					var Card = board[1];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 1;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				 
				if (board[3] !== undefined ) {
					var Card = board[3];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 3;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				
				break;
			case 3:
				//2,6
				if (board[2] !== undefined ) {
					var Card = board[2];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 4:
				//1,5,7
				if (board[1] !== undefined ) {
					var Card = board[1];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 1;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[7] !== undefined ) {
					var Card = board[7];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 7;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				
				break;
			case 5:
				//2,4,6,8
				if (board[2] !== undefined ) {
					var Card = board[2];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 2;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[4] !== undefined ) {
					var Card = board[4];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 6:
				//3,5,9
				if (board[3] !== undefined ) {
					var Card = board[3];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 3;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[9] !== undefined ) {
					var Card = board[9];
					var playerCardValue = enemyCard.south;
					var enemyCardValue = Card.north;
                    var testSlot = 9;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
			case 7:
				//4,8
				if (board[4] !== undefined ) {
					var Card = board[4];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 4;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
			case 8:
				//7,5,9
				if (board[7] !== undefined ) {
					var Card = board[7];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 7;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				if (board[5] !== undefined ) {
					var Card = board[5];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 5;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[9] !== undefined ) {
					var Card = board[9];
					var playerCardValue = enemyCard.east;
					var enemyCardValue = Card.west;
                    var testSlot = 9;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				break;
			case 9:
				//8,6
				if (board[8] !== undefined ) {
					var Card = board[8];
					var playerCardValue = enemyCard.west;
					var enemyCardValue = Card.east;
                    var testSlot = 8;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				}
				if (board[6] !== undefined ) {
					var Card = board[6];
					var playerCardValue = enemyCard.north;
					var enemyCardValue = Card.south;
                    var testSlot = 6;
					
					this.checkOwnership(player, Card, playerCardValue, enemyCardValue, testSlot);
				} 
				break;
		};
	 }// compare enemyCard placed against surrounding cards
	
	
	
};// END OF GAME OBJECT
