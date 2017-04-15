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
        $(".magSlotOne").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotOne").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Two
	$("#slot2").hover(function(){
		var img = $("#slot2").css("background-image");
		console.log(img);
        $(".magSlotTwo").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotTwo").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Three
	$("#slot3").hover(function(){
		var img = $("#slot3").css("background-image");
		console.log(img);
        $(".magSlotThree").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotThree").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Four
	$("#slot4").hover(function(){
		var img = $("#slot4").css("background-image");
		console.log(img);
        $(".magSlotFour").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotFour").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Five
	$("#slot5").hover(function(){
		var img = $("#slot5").css("background-image");
		console.log(img);
        $(".magSlotFive").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotFive").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Six
	$("#slot6").hover(function(){
		var img = $("#slot6").css("background-image");
		console.log(img);
        $(".magSlotSix").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotSix").css({"background-image": "", "z-index": "0"});
    });
	
	// Board Slot Seven
	$("#slot7").hover(function(){
		var img = $("#slot7").css("background-image");
		console.log(img);
        $(".magSlotSeven").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotSeven").css({"background-image": "", "z-index": "0"});
    });
	
	
	// Board Slot Eight
	$("#slot8").hover(function(){
		var img = $("#slot8").css("background-image");
		console.log(img);
        $(".magSlotEight").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotEight").css({"background-image": "", "z-index": "0"});
    });
	
	// Board Slot Nine
	$("#slot9").hover(function(){
		var img = $("#slot9").css("background-image");
		console.log(img);
        $(".magSlotNine").css({"background-image": img, "z-index": "1000"});
        }, function(){
        $(".magSlotNine").css({"background-image": "", "z-index": "0"});
    });
});


