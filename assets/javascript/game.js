$(document).ready(function() {

// Constructor Function
function Character(name, hp, attack, counterAttack, visited, index){
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.counterAttack  = counterAttack;
  this.visited = visited;
  this.index = index;
};

// Instantiation
var rey  =  new Character("Rey", 100, 5, 10, false, 0);
var finn  =  new Character("Finn", 120, 17, 6, false, 1);
var kylo  =  new Character("Kylo", 180, 15, 8, false, 2);
var captain  =  new Character("Captain", 150, 12, 14, false, 3);

// Stored Array for Characters
var characters = [rey, finn, kylo, captain];

var powerMultiplier = 1;

// Player object
var playerChar = {};

// Enemy object
var enemyChar = {};

//wins variable for tracking if game has been won
var win_Tracker;

var playerCharChosen = false;
var enemyChosen = false;
var lockSelection = false;
var lockFightButton = true;

// Functions

//Function that displays character hp.
function hp_Display(){
  for (var i = 0; i < characters.length; i++) {
    $(".name_health_"+i).text("HP: " +characters[i].hp);
  }

};
//Selecter Player Char
function choose_player_char(charIndex) {
  playerCharChosen = true;
  playerChar = characters[charIndex];
  playerChar.visited = true;

  console.log("Player Char: " + playerChar.name);
  console.log("Player Char Power: " + playerChar.attack);

  switch (charIndex) {
    case 0: $(".second_Character, .third_Character, .fourth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red"); break;
    case 1: $(".first_Character, .third_Character, .fourth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red"); break;
    case 2: $(".second_Character, .first_Character, .fourth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red"); break;
    case 3: $(".second_Character, .third_Character, .first_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red"); break;


  }

};
//Select Enemy
function choose_enemy(charIndex) {
  if(!characters[charIndex].visited) {
    enemyChosen = true;
    enemyChar = characters[charIndex];
    enemyChar.visited = true;
    lockSelection = true;
    lockFightButton = false;
    console.log("Enemy Char: " + playerChar.name);
    console.log("Enemy Char Power: " + playerChar.attack);
    console.log("Enemy Char Counter Attack: " + playerChar.counterAttack);
    if(playerChar.index === 0 && enemyChar.index === 1) {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 0 && enemyChar.index === 2) {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 0 && enemyChar.index === 3) {
      $(".fourth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 1 && enemyChar.index === 0) {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 1 && enemyChar.index === 2) {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 1 && enemyChar.index === 3) {
      $(".fourth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 2 && enemyChar.index === 0) {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 2 && enemyChar.index === 1) {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 2 && enemyChar.index === 3) {
      $(".fourth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 3 && enemyChar.index === 0) {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 3 && enemyChar.index === 1) {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }
    if(playerChar.index === 3 && enemyChar.index === 2) {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
    }



    }
    console.log("enemyChar: " + enemyChar.name);
  };


// function for reseting character counters
function reset_Char_Counter_Position(){
  console.log("Function reset Char Counter is being called")
  
   rey  =  new Character("Rey", 100, 5, 10, false, 0);
   finn  =  new Character("Finn", 120, 17, 6, false, 1);
   kylo  =  new Character("Kylo", 180, 15, 8, false, 2);
   captain  =  new Character("Captain", 150, 12, 14, false, 3);
   characters = [rey, finn, kylo, captain];
   playerCharChosen = false;
   enemyChosen = false;
   lockSelection = false;
   lockFightButton = true;
   powerMultiplier = 1;
   $(".player_Area").data("counter", 4) ;

   console.log("Player area data counter: " + $('.player_Area').data('counter'));
   // Player object
   playerChar = {};

   // Enemy object
   enemyChar = {};
      // Call hp function to display resetted hp
    hp_Display();
      //Jquery to redisplay characters in staging area.
      $(".first_Character, .second_Character, .third_Character, .fourth_Character").appendTo(".player_Staging_Area").css({"background-color": "white", "color": "black"});
      $(".player_Text").text("Select a Character to begin");
      $(".enemy_Text").text("May the force be with you!");
}


//////////////////////////////////////////////////////////

// Execute Initial function to display characters hp on html
hp_Display();

//////////////////////////////// Event listenrs  /////////////////////////////////////

$(".container").on("click", function(){
  if (!lockSelection) {

    if (!playerCharChosen) {

      switch (this.dataset.header){

        case "Rey":
        console.log ("Player Case-Switch Rey");
        if(!playerCharChosen) 
        choose_player_char(0);

        break;

        case "Finn":
        console.log ("Player Case-Switch Finn");
        choose_player_char(1);
   
        break;

        case "Kylo":
        console.log ("Player Case-Switch Kylo");
        choose_player_char(2);
   
        break;

        case "Captain":
        console.log ("Player Case-Switch Captain");
        choose_player_char(3);

        break;

      };
    }
    else {
      switch (this.dataset.header){

        case "Rey":
        console.log ("Enemy Case-Switch Rey");
        choose_enemy(0);

        break;

        case "Finn":
        console.log ("Enemy Case-Switch Finn");
        choose_enemy(1);
      
        break;

        case "Kylo":
        console.log ("Enemy Case-Switch Kylo");
        choose_enemy(2);
      
        break;

        case "Captain":
        console.log ("Enemy Case-Switch Captain");
        choose_enemy(3);

        break;
      }
    }
  }
});


// Attack button event listenr
//Player clicks on Attack button
$(".button_Fight").on("click", function(){
  if(!lockFightButton) {
  console.log("Attack button has been clicked!");
  console.log("Player has picked: "+ playerChar.name + " and " + "Enemy has picked: "+ enemyChar.name);
  //Extract data counter variable from html that keeps track of wins
  win_Tracker = $(".player_Area").data("counter");
  console.log("If tracker is 1, the game is won. Current tracker is: "+ win_Tracker);

  console.log("playerChar.hp: " + playerChar.hp);
  console.log("playerChar.attack: " + playerChar.attack);
  console.log("powerMultiplier: " + powerMultiplier);
  console.log("enemyChar.hp: " + enemyChar.hp);
  console.log("enemyChar.counterAttack: " + enemyChar.counterAttack);
  $(".name_health_"+enemyChar.index).text("HP: " + enemyChar.hp);
  $(".name_health_"+playerChar.index).text("HP: " + playerChar.hp);

  if(playerChar.hp <= 0 ) {
    $(".name_health_"+playerChar.index).text("HP: " + 0);
    $(".player_Text").text("You have been defeated. Game over");
    $(".enemy_Text").text("Click the Restart button to try again!");
    $(".button_Reset").css({"display": "block", "visibility": "visible"});
    lockSelection = true;
    lockFightButton = true;
  } else  if (enemyChar.hp <= 0) {
          $(".name_health_"+enemyChar.index).text("HP: " + 0);
          $(".player_Text").text("You have defeated " + enemyChar.name);
          win_Tracker--;
          if (win_Tracker <= 1) {
              lockSelection = true;
              lockFightButton = true;
              //Display game won
              $(".player_Text").text("You have defeated all your enemies.");
              $(".enemy_Text").text("You Win! Click restart to play again.");
              // Displays button
              $(".button_Reset").css({"display": "block", "visibility": "visible"});

              // To tell program to reset the entire game
            }
            else {
              $(".enemy_Text").text("Choose another character to fight.");
              $("[data-header=\"" + enemyChar.name + "\"]").css({"display": "block", "visibility": "visible"});
              $(".player_Area").data("counter", win_Tracker);
              lockSelection = false;
              lockFightButton = true;
            } 
          } else {

              enemyChar.hp = enemyChar.hp - (playerChar.attack*powerMultiplier);
              $(".player_Text").html("You attacked "+ enemyChar.name+ " for "+ playerChar.attack + " damage." );
              $(".name_health_"+enemyChar.index).text("HP: " + enemyChar.hp);
              
              powerMultiplier++;
              playerChar.hp = playerChar.hp - enemyChar.counterAttack;
              $(".enemy_Text").html(enemyChar.name+ " attacked you for "+ enemyChar.counterAttack + " damage." );
              $(".name_health_"+playerChar.index).text("HP: " + playerChar.hp);
             
        }
}
///////////////////////////////////////////////////////////////////////////////////////////
// End of button_Fight
});

///// PLayer Clicks on Reset Button //////
$(".button_Reset").on("click", function(){
  console.log("Button reset has been clicked");
  // Calls on reset function to reset the game
  reset_Char_Counter_Position()
  // Hides the button.
  $(".button_Reset").css({"display": "none", "visibility": "hidden"});


//End of Reset Button
});


// End of document.ready()
});