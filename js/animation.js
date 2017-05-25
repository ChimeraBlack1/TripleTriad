var enemyTurnAnim = function () {
        
    AnimateEnemy(); 
    changeTurns.enemyTurn();
    
    var time;

    
    if (cardAnimationArray.length == 3){
        // cardOne
        setTimeout(myTimeout1, 500);
        setTimeout(myTimeout2, 1000);

        // cardTwo
        setTimeout(myTimeout3, 1500);	
        setTimeout(myTimeout4, 2000);

        // cardThree
        setTimeout(myTimeout5, 2500);
        setTimeout(myTimeout6, 3000); 
        
        time = 3000;
        
    }else if (cardAnimationArray.length == 2) {
        // cardOne
        setTimeout(myTimeout1, 500);
        setTimeout(myTimeout2, 1000);

        // cardTwo
        setTimeout(myTimeout3, 1500);	
        setTimeout(myTimeout4, 2000);
        
        time = 2000;

        
    }else if (cardAnimationArray.length == 1) {
        // cardOne
        setTimeout(myTimeout1, 500);
        setTimeout(myTimeout2, 1000);
        
        time = 1000;
    }
    
    // STOP PLAYER FROM PLAYING CARDS WHILE ENEMY IS HAVING HIS TURN
    $("#playerHandCover").removeClass("hidden");
    setTimeout(function(){
        $("#playerHandCover").addClass("hidden");
    }, time);
    
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
    
    
    decideWhichCardsToAnimate(animateCards);


 }


function myTimeout1() {
    $(cardOne).css("left", "2rem");
}

function myTimeout2() {
    $(cardOne).css("left", "0");
}

function myTimeout3() {
     $(cardTwo).css("left", "2rem");
}

function myTimeout4() {
     $(cardTwo).css("left", "0");
}

function myTimeout5() {
     $(cardThree).css("left", "2rem");
}

function myTimeout6() {
     $(cardThree).css("left", "0");    
}


var decideWhichCardsToAnimate = function (animateCards) {
    cardAnimationArray = [];
    
    if (animateCards.length >= 4) {
        for(i=0;i<3;i++){
            
            // GET A RANDOM NUMBER FROM 1 TO THE LENGTH OF THE RANDCARDARRAY
            var enemySelection = Math.floor(Math.random() * animateCards.length);
            
            // GET A CARD BASED ON THE ABOVE RANDOM #
            var enemyCardName = animateCards[enemySelection];
            
            cardAnimationArray.push(enemyCardName);
        }
        
        // SET THREE CARDS FOR ANIMATION
        cardOne = "#" + cardAnimationArray[0];
        cardTwo = "#" + cardAnimationArray[1];
        cardThree = "#" + cardAnimationArray[2];
        
    } else if (animateCards.length < 4 && animateCards.length > 2) {
            
        for(i=0;i<2;i++){

            // GET A RANDOM NUMBER FROM 1 TO THE LENGTH OF THE RANDCARDARRAY
            var enemySelection = Math.floor(Math.random() * animateCards.length);

            // GET A CARD BASED ON THE ABOVE RANDOM #
            var enemyCardName = animateCards[enemySelection];

            cardAnimationArray.push(enemyCardName);
        }
        
        // SET TWO CARDS FOR ANIMATION
        cardOne = "#" + cardAnimationArray[0];
        cardTwo = "#" + cardAnimationArray[1];
        
        
    } else if (animateCards.length <= 2) {

            // GET A RANDOM NUMBER FROM 1 TO THE LENGTH OF THE RANDCARDARRAY
            var enemySelection = Math.floor(Math.random() * animateCards.length);

            // GET A CARD BASED ON THE ABOVE RANDOM #
            var enemyCardName = animateCards[enemySelection];

            cardAnimationArray.push(enemyCardName);
            
            // SET ONE CARD FOR ANIMATION
            cardOne = "#" +  cardAnimationArray[0];
    }

}


var changeTurns = {
    enemyTurn: function() {
        document.getElementById("turnSpan").innerHTML = "Enemy's Turn...";
    },
    
    playerTurn: function() {
        document.getElementById("turnSpan").innerHTML = "Enemy's Turn...";
    }
                   
}