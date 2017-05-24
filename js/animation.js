var enemyTurnAnim = function () {
    
		setTimeout(myTimeout1, 1000)
        setTimeout(myTimeout2, 2000)
		setTimeout(myTimeout3, 3000)	
        setTimeout(myTimeout4, 4000)
        setTimeout(myTimeout5, 5000)
        setTimeout(myTimeout6, 6000)
}


function myTimeout1() {
	$("#enemyCardOne").css("left", "2rem");
}

function myTimeout2() {
    $("#enemyCardOne").css("left", "0");
}

function myTimeout3() {
    $("#enemyCardSix").css("left", "2rem");
}

function myTimeout4() {
    $("#enemyCardSix").css("left", "0");
}

function myTimeout5() {
    $("#enemyCardFour").css("left", "2rem");
}

function myTimeout6() {
    $("#enemyCardFour").css("left", "0");
    
}


enemyTurnAnim();