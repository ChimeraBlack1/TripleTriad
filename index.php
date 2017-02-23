<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- custom CSS -->
	  <link rel="stylesheet" href="normalize.css">
	  <link rel="stylesheet" href="style.css">	  
  </head>
  <body>
	  
	  <div class="game-container">
		  <div class="hand">
			 <div class="player-card"></div> <!-- 1 -->
			  <div class="player-card all-player-cards one"></div> <!-- 2 -->
			  <div class="player-card all-player-cards two"></div> <!-- 3 -->
			  <div class="player-card all-player-cards three"></div> <!-- 4 -->
			  <div class="player-card all-player-cards four"></div> <!-- 5 -->
			  <div class="player-card all-player-cards five"></div> <!-- 6 --> 
		  </div>
		  <div class="game-board">
			  <div id="slot1" class="card-slot card-offset-left" onclick="card.checkIfSet('1')"></div><!-- 1 -->
			  <div id="slot2" class="card-slot" onclick="card.checkIfSet('2')"></div><!-- 2 -->
			  <div id="slot3" class="card-slot card-offset-right" onclick="card.checkIfSet('3')"></div><!-- 3 -->
			  <div id="slot4" class="card-slot card-offset-left" onclick="card.checkIfSet('4')"></div><!-- 4 -->
			  <div id="slot5" class="card-slot" onclick="card.checkIfSet('5')"></div><!-- 5 -->
			  <div id="slot6" class="card-slot card-offset-right" onclick="card.checkIfSet('6')"></div><!-- 6 -->
			  <div id="slot7" class="card-slot card-offset-left" onclick="card.checkIfSet('7')"></div><!-- 7 -->
			  <div id="slot8" class="card-slot" onclick="card.checkIfSet('8')"></div><!-- 8 -->
			  <div id="slot9" class="card-slot card-offset-right" onclick="card.checkIfSet(9)"></div><!-- 9 -->
		  </div>
		  <div class="hand player-hand">
			  <div id="playerCardOne" class="player-card" onclick="card.selected('playerCardOne');"></div> <!-- 1 -->
			  <div id="playerCardTwo" class="player-card all-player-cards one" onclick="card.selected('playerCardTwo');"></div> <!-- 2 -->
			  <div id="playerCardthree" class="player-card all-player-cards two" onclick="card.selected('playerCardthree');"></div> <!-- 3 -->
			  <div id="playerCardFour" class="player-card all-player-cards three" onclick="card.selected('playerCardFour');"></div> <!-- 4 -->
			  <div id="playerCardFive" class="player-card all-player-cards four" onclick="card.selected('playerCardFive');"></div> <!-- 5 -->
			  <div id="playerCardSix" class="player-card all-player-cards five" onclick="card.selected('playerCardSix');"></div> <!-- 6 -->
		  </div>	  	
	  </div>
    

    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
	  <!-- custom js -->
	  <script src="app.js"></script>
	  
	  
  </body>
	
</html>