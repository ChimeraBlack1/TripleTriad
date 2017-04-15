$(document).ready(function(){
    
	// Player Card One
	$("#playerCardOne").hover(function(){
		$(".magOne").removeClass("hidden");
        $(".magOne").addClass("visible");
        }, function(){
        $(".magOne").removeClass("visible");
		$(".magOne").addClass("hidden");
    });
	
		// Player Card Two
	$("#playerCardTwo").hover(function(){
		$(".magTwo").removeClass("hidden");
        $(".magTwo").addClass("visible");
        }, function(){
        $(".magTwo").removeClass("visible");
		$(".magTwo").addClass("hidden");
    });
	
		// Player Card Three
	$("#playerCardThree").hover(function(){
		$(".magThree").removeClass("hidden");
        $(".magThree").addClass("visible");
        }, function(){
        $(".magThree").removeClass("visible");
		$(".magThree").addClass("hidden");
    });
	
		// Player Card Four
	$("#playerCardFour").hover(function(){
		$(".magFour").removeClass("hidden");
        $(".magFour").addClass("visible");
        }, function(){
        $(".magFour").removeClass("visible");
		$(".magFour").addClass("hidden");
    });
	
		// Player Card Five
	$("#playerCardFive").hover(function(){
		$(".magFive").removeClass("hidden");
        $(".magFive").addClass("visible");
        }, function(){
        $(".magFive").removeClass("visible");
		$(".magFive").addClass("hidden");
    });
		// Player Card Six
	$("#playerCardSix").hover(function(){
		$(".magSix").removeClass("hidden");
        $(".magSix").addClass("visible");
        }, function(){
        $(".magSix").removeClass("visible");
		$(".magSix").addClass("hidden");
    });
	
});


// if you hover playerCardOne, magOne will become visible
// if you mouseOff playerCardOne, magOne will become hidden 