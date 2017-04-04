<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	  
	<!-- Normalize CSS -->  
	  <link rel="stylesheet" href="normalize.css">
    <!-- custom CSS -->
	  <link rel="stylesheet" href="style.css">	  
	  
  </head>
  <body>
	  <div id="goBigger" class="goBigger"><h1  class="goBigger">Please view on a larger resoultion</h1></div>
	  <div class="game-container">
		  <div id="EnemyHand" class="hand">
			<div class="cardContainer">
			 <div id="enemyCardOne" class="card enemyCard"></div>
			 <div id="enemyCardTwo" class="card all-player-cards enemyCard"></div>
			 <div id="enemyCardThree" class="card all-player-cards enemyCard"></div> 
			 <div id="enemyCardFour" class="card all-player-cards enemyCard"></div>
			 <div id="enemyCardFive" class="card all-player-cards enemyCard"></div>
			 <div id="enemyCardSix" class="card all-player-cards enemyCard"></div>
			</div>
		  </div>
		  <div class="game-board">
			  <div id="slot1" class="card-slot card-offset-left" onclick="card.checkIfSet(1)"></div>
			  <div id="slot2" class="card-slot" onclick="card.checkIfSet(2)"></div>	
			  <div id="slot3" class="card-slot card-offset-right" onclick="card.checkIfSet(3)"></div>
			  <div id="slot4" class="card-slot card-offset-left" onclick="card.checkIfSet(4)"></div>
			  <div id="slot5" class="card-slot" onclick="card.checkIfSet(5)"></div>
			  <div id="slot6" class="card-slot card-offset-right" onclick="card.checkIfSet(6)"></div>
			  <div id="slot7" class="card-slot card-offset-left" onclick="card.checkIfSet(7)"></div>
			  <div id="slot8" class="card-slot" onclick="card.checkIfSet(8)"></div>
			  <div id="slot9" class="card-slot card-offset-right" onclick="card.checkIfSet(9)"></div>
		  </div>
		  <div class="hand player-hand">
			<div class="cardContainer">
			  <div id="playerCardOne" class="card player-card one " onclick="card.selected('playerCardOne');"></div> 
			  <div id="playerCardTwo" class="card player-card all-player-cards two" onclick="card.selected('playerCardTwo');"></div>
			  <div id="playerCardThree" class="card player-card all-player-cards three" onclick="card.selected('playerCardThree');"></div>
			  <div id="playerCardFour" class="card player-card all-player-cards four" onclick="card.selected('playerCardFour');"></div>
			  <div id="playerCardFive" class="card player-card all-player-cards five" onclick="card.selected('playerCardFive');"></div> 
			  <div id="playerCardSix" class="card player-card all-player-cards six" onclick="card.selected('playerCardSix');"></div>
			</div>
		  </div>	  	
	  </div>
    

	  <!-- jQuery -->
	  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
	  <!-- custom js -->
	  <script src="app.js"></script>
	  
	  
  </body>
	
</html>