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
	

	
	// ******************************************************************************
	
	// Board Slot One
	$("#slot1").hover(function(){
		var img = $("#slot1").css("background-image");
		console.log(img);
        $(".magSlotOne").css("background-image", img);
        }, function(){
        $(".magSlotOne").css("background-image", "");
    });
	
	
	// Board Slot Two
	$("#slot2").hover(function(){
		var img = $("#slot2").css("background-image");
		console.log(img);
        $(".magSlotTwo").css("background-image", img);
        }, function(){
        $(".magSlotTwo").css("background-image", "");
    });
	
	
	// Board Slot Three
	$("#slot3").hover(function(){
		var img = $("#slot3").css("background-image");
		console.log(img);
        $(".magSlotThree").css("background-image", img);
        }, function(){
        $(".magSlotThree").css("background-image", "");
    });
	
	
	// Board Slot Four
	$("#slot4").hover(function(){
		var img = $("#slot4").css("background-image");
		console.log(img);
        $(".magSlotFour").css("background-image", img);
        }, function(){
        $(".magSlotFour").css("background-image", "");
    });
	
	
	// Board Slot Five
	$("#slot5").hover(function(){
		var img = $("#slot5").css("background-image");
		console.log(img);
        $(".magSlotFive").css("background-image", img);
        }, function(){
        $(".magSlotFive").css("background-image", "");
    });
	
	
	// Board Slot Six
	$("#slot6").hover(function(){
		var img = $("#slot6").css("background-image");
		console.log(img);
        $(".magSlotSix").css("background-image", img);
        }, function(){
        $(".magSlotSix").css("background-image", "");
    });
	
});


// if you hover playerCardOne, magOne will become visible
// if you mouseOff playerCardOne, magOne will become hidden 