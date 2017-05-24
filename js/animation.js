var enemyTurnAnim = function () {
        
        AnimateEnemy();
    
		setTimeout(myTimeout1, 1000)
        setTimeout(myTimeout2, 2000)
		setTimeout(myTimeout3, 3000)	
        setTimeout(myTimeout4, 4000)
        setTimeout(myTimeout5, 5000)
        setTimeout(myTimeout6, 6000)
     
}



function AnimateEnemy () {
    
    var usedCards = Enemy.usedCards;
    var animateCards = [];


    if (usedCards.indexOf("enemyCardOne") == -1) {
        animateCards.push("enemyCardOne");
    }
    if (usedCards.indexOf("enemyCardTwo") == -1) {
        animateCards.push("enemyCardTwo");
    }

    if (usedCards.indexOf("enemyCardThree") == -1) {
        animateCards.push("enemyCardThree");
    }

    if (usedCards.indexOf("enemyCardFour") == -1) {
        animateCards.push("enemyCardFour");
    }

    if (usedCards.indexOf("enemyCardFive") == -1) {
        animateCards.push("enemyCardFive");
    }

    if (usedCards.indexOf("enemyCardSix") == -1) {
        animateCards.push("enemyCardSix");
    }

    console.log(animateCards);
    
}


function myTimeout1() {
    // $(cardOne).css("left", "2rem");
	$("#enemyCardOne").css("left", "2rem");
}

function myTimeout2() {
    // $(cardOne).css("left", "0");
    $("#enemyCardOne").css("left", "0");
}

function myTimeout3() {
    // $(cardTwo).css("left", "0");
    $("#enemyCardSix").css("left", "2rem");
}

function myTimeout4() {
    // $(cardTwo).css("left", "0");
    $("#enemyCardSix").css("left", "0");
}

function myTimeout5() {
    // $(cardThree).css("left", "2rem");
    $("#enemyCardFour").css("left", "2rem");
}

function myTimeout6() {
    // $(cardThree).css("left", "0");
    $("#enemyCardFour").css("left", "0");
    
}




