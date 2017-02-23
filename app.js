var playerCard = null;

var board = {
	
};

var card = {
	
	selected: function(newPlayerCard) {
		playerCard = newPlayerCard;
		return console.log(newPlayerCard);
	},
	
	checkIfSet: function(slot) {
		if (board[slot] == undefined && playerCard != null) {
			
			//place card onto board
			board[slot] = playerCard;
			console.log("set " + playerCard + " into slot " + slot);
			
			// remove card from player's hand
			$("#" + playerCard).hide();
			playerCard = null;
			return
		}else if(board[slot] == undefined) {
			console.log('There is nothing in that slot');
		}else {
			//board slot is full, can't place card
			console.log(board[slot] + " is already in that slot");
			return
		}
	}
	
};


