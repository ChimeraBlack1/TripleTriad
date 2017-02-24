var playerCard = null;
var cardColor = null;

var board = {
	
};

var card = {
	
	selected: function(newPlayerCard) {
		//SET PLAYER CARD
		playerCard = newPlayerCard;
		
		
		
		//LOG OUT SELECTED CARD
		return console.log(newPlayerCard);
	},
	
	set: function(slot) {
			
			// PLACE CARD ONTO BOARD OBJECT
			board[slot] = playerCard;
			
			// CAPTURE CARD COLOR INFORMATION
			var cardColor = $("#" + playerCard).css("background-color");
			console.log(cardColor);
		
			// CHANGE SLOT INTO CARD REPRESENTATION
			console.log(board[slot]);
			$("#slot" + slot).css("background-color", cardColor);
			console.log("set " + playerCard + " into slot " + slot + ", with the color: " + cardColor);
			
			// REMOVE CARD FROM PLAYER'S HAND
			$("#" + playerCard).hide();
			playerCard = null;
			
			return
	},
	
	checkIfSet: function(slot) {
		if (board[slot] == undefined && playerCard != null) {
			this.set(slot);
		}else if(board[slot] == undefined) {
			console.log('There is nothing in that slot');
		}else {
			//board slot is full, can't place card
			console.log(board[slot] + " is already in that slot");
			return
		}
	}
	
};


//need to add in logic that stops users from unhiding their cards, or inserting new ones.

