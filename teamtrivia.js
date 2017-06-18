const MESSAGES_TIME_OUT = 7 * 24 * 60 * 60 * 1000;

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}



//A Game of Trivia
var triviaQuestions = ['This Pokemon helps Nurse Joy in Pokemon Center and also have highest HP stat','blissey','What is the ability of Charizard Mega - X','toughclaws','A two turn move which starts with the absorbtion of sunlight','solarbeam','Its the only Dark Type Pulsating Move','darkpulse','Which colors are Raichu\'s Cheeks?','yellow','Pokemon having Rock type and SandStorm as his/her Ability','tyranitar','What ability boosts the power of Fire-type moves when the Pokemon is below 1/3 of its health?','blaze', 'What is the subtitle of the first Pokémon movie?','mewtwostrikesback','Name a move that can have a 100% chance of flinching the target barring Fake Out.','fling','What is the only Poison-Type Pokemon to learn Rock Polish?','garbodor','What cave lies between Mahogany Town and Blackthorn City?','icepath','This Electric-Type move increases the user\'s Special Defense.','charge','What is the only Pokémon available in the Yellow Forest Pokéwalker route?','pikachu','This is the nickname of the Pokemon acting as the light source of Glitter Lighthouse in Olivine City.','amphy','This Pokemon has the longest cry.','jynx','This Pokemon Conquest warlord has the warrior ability of "chesto!" at rank 2.','yoshihiro','What Pokemon is based on the mythological kitsune?','ninetales','This is the only pure Flying-Type Pokémon (excluding forms)','tornados','This evolutionary stone either removes a type immunity or adds type immunities when used on certain Pokemon that evolve via this stone.','dawnstone','What is the only single-typed Pokemon with Tangled Feet?','spinda','This is the most expensive item that you can obtain in-game.','gorgeousroyalribbon','This Pokémon is the first Pokémon to be revealed.','rhydon','Name a non Psychic-Type Pokémon that can learn Heart Stamp.','pikachu','This type of berry have the longest name.','marangaberry','Name the only Pokemon with a BST of 336.','unown','Name a Pokémon that can be obtained by breeding a Pokémon they cannot evolve into.','phione','This herbal medicine cures infatuation.','mentalherb','This was the only Dragon-type attack in Generation I.','dragonrage','In the games, baseball players are represented by this trainer class.','infielder','Name one of the six moves that is a Self-KO move.',',memento','How much Poke Dollars does an Escape Rope cost?','500','What starter does your rival have in Pokemon Yellow version?','eevee','In the Pokemon anime, Jessie gives herself this name during the Kanto Grand Festival.','jessadia','What is the only Pokemon able to learn Secret Power by leveling up?','audino','This Pokemon in Pokemon Mystery Dungeon: Explorers of Time/Darkness/Sky has the job of waking up you and your partner in the morning.','exploud','In the main series Pokemon games, there are various Pokemon that impede your path to new areas. Name one.','snorlax','Name the only Pokemon to weigh 0.9 kg.','floette','This is the first Key Item you have in Pokemon X and Y.','holocaster','What is Castelia Park shaped like?','pokeball',' This Gym Leader doesn\'t have a Vs. Sprite.','juan'];
var triviaRoom; // This var will check if trivia is going in other room or not..
var triviaON = false; // A switch case to tell if trivia is going on not
var triviaTimer; // Keeps the track of the timer of the trivia
var triviaA; // The answer of the trivia
var triviaQ; // Question of trivia
var triviaPoints = []; // This empty object will keep the track off all the trivia points during a game of trivia
var teamOne = [];
var teamTwo = [];
var teamOnePoints = 0;
var teamTwoPoints = 0;
clearInterval(triviaTimer);
 
 exports.commands = {
princesky: 'ps',
'ps': function (arg, user, room) {
        if (room === user) return false;
                var text = "";
                var gametomake = arg.toLowerCase();
 
                if (triviaON){
                text += "**That game cannot be created, because there is a game of Trivia running. Do -triviaend**"
        return this.reply(room, text);
                }
if (gametomake == "tt" || gametomake == "team trivia" || gametomake == "t trivia"){
gametomake = "ttrivia";
}
 
                  if (game == "none"){
 
        switch(gametomake){
 
        default:
                text += "**That is not a scripted game. Please check spelling**"
        return this.reply(room, text);
                break;
 
       case "ttrivia":
                game = "ttrivia";
                requiredPlayers = 2;
                maxPlayers = 9999;
                joinusers = [];
                joinusersid = [];
                playerdata = [];
                teamOne = [];
                teamTwo = [];
                teamOnePoints = 0;
                teamTwoPoints = 0;
                text = "";
                text += "**A game of Team Trivia was created! Do -joingame to join and -startgame to start!**";
        return this.reply(room, text);
                break;
 
                          }
                }else{
                text += "**A scripted game was already made. Please do $endgame to end the game.**";
        return this.reply(room, text);
                text = "";
                }
 
    },
 
princeskyend: 'psend',
'psend': function (arg, user, room) {
        if (room === user) return false;
                var text = "";
               
       switch(game){
       
      case "none":
                text += "**There is no game currently running.**";
        return this.reply(room, text);
                text = "";
                break;
 
       switch(game){
       
       
case "none":
                text += "**There is no game currently running.**";
        return this.reply(room, text);
                text = "";
                break;
 
       switch(game){
 
      case "ttrivia":
                game = "none";
                clearInterval(triviaTimer);
                started = false;
                triviaON = false;
                requiredPlayers = 0;
                text += "**The game of Team Trivia has ended.**";
        return this.reply(room, text);
                break;
                 
}
},
 
princesky: 'psstart',
'psstart': function (arg, user, room) {
        if (room === user) return false;
                var text = "";
        if (started == false){
         if (game != "none"){
           if (joinusers.length >= requiredPlayers){
 
 if (game == "ttrivia"){
 
                started= true;
                shuffle(joinusers);
                triviaON = true;
        triviaRoom = room.id;
                triviaA = '';
        triviaPoints = [];
                var turn = 1;
                var textone = "";
                var texttwo = "";
                var i;
 
                for(i = 0; i < joinusers.length; i+=1){
 
                 if (turn == 1){
                  teamOne[teamOne.length] = joinusers[i]
                  //joinusers.splice(i,1);
                 }
 
                  if (turn == -1){
                  teamTwo[teamTwo.length] = joinusers[i]
                  //joinusers.splice(i,1);
                  }
 
                  turn = turn * -1
                }
 
                for(i = 0; i < teamOne.length; i +=1){
               
                if (i == teamOne.length - 1){
                  textone += teamOne[i] + "!"
                 }
 
                if (i == teamOne.length - 2){
                  textone += teamOne[i] +" and "
                 }
 
                if (i != teamOne.length - 1 && i != teamOne.length - 2){
                  textone += teamOne[i] + ","
                 }
 
                }
 
                for(i = 0; i < teamTwo.length; i +=1){
               
                if (i == teamTwo.length - 1){
                  texttwo += teamTwo[i]+"!"
                 }
 
                if (i == teamTwo.length - 2){
                  texttwo += teamTwo[i] +" and "
                 }
 
                if (i != teamTwo.length - 1 && i != teamTwo.length - 2){
                  texttwo += teamTwo[i]+","
                 }
 
                }                
 
        this.reply( room, 'Hosting a game of **Team Trivia**. Answer the questions using $tta or $teamtriviaanswer. First to get 10 points wins.');
 
        this.reply( room, "Team Ash: "+textone);
        this.reply( room, "Team Conbeef: "+texttwo);
 
        triviaTimer = setInterval( function() {
                        if(triviaA){this.say(room, '**Current answer is:** ' + triviaA);}
            var TQN = 2*(Math.floor(triviaQuestions.length*Math.random()/2))
            triviaQ = triviaQuestions[TQN];
            triviaA = triviaQuestions[TQN+ 1];
            this.say( room, '**Question**: ' + triviaQ);
        }.bind(this), 15000);
 
              }
},

psjoin: function (arg, user, room) {
        if (room === user) return false;
                var text = "";
                var checkjoin;
                var i;
                var userid = toId(user)
          if (started == true) return false;
          if (game == "none") return false;
              if (joinusers.length < maxPlayers){
                for(i = 0; i < joinusers.length; i++){
                 checkjoin = joinusersid[i]
                 if (checkjoin == userid){
                           text += user+" has already joined!"
                           return this.reply(room, text);
                           text = "";
                                          }
                                     }
                joinusers[joinusers.length] = user;
                joinusersid[joinusersid.length] = userid;
                text += user + " has joined!";
        this.reply(room, text);
                text = ""
              }else{
              for(i = 0; i < joinusers.length; i++){
                 checkjoin = joinusersid[i]
                 if (checkjoin == userid){
                           text += user+" has already joined!"
                           return this.reply(room, text);
                           text = "";
                                          }
                                     }
              text += "Sorry "+user+". The maximum amount of players has been reached."
              return this.reply(room, text);
             }
         },
 
psleave: function (arg, user, room) {
        if (room === user) return false;
                var text = "";
                var checkjoin;
                var i;
          if (started == true) return false;
          if (game == "none") return false;
             
                for(i = 0; i < joinusers.length; i++){
                 checkjoin = joinusersid[i]
                 if (checkjoin == toId(user)){
                           joinusers.splice(i,1);
                           joinusersid.splice(i,1);
                           text += user+" has left the game."
                           return this.reply(room, text);
                           text = "";
                           break;    
                }}          
         },
         tta: 'teamtriviaanswer',
    teamtriviaanswer: function(arg, user, room){
        if(room.id !== triviaRoom) return false;
                if (game !== "ttrivia") return false;
                if (started != true) return false;
        if (!arg) return false;
        arg = (arg);
                var userid = toId(user);
                var i;
                var gotteam = false;
                var theuser;
       
                for(i = 0 ;i < teamOne.length;i+=1){
                  if (gotteam == true){break;}
                  if(user == teamOne[i]){
                  theuser = "Team Ash";
                  gotteam = true;
                  break;
                  }
                }
 
                for(i = 0 ;i < teamTwo.length;i+=1){
                  if (gotteam == true){break;}
                  if(user == teamTwo[i]){
                  theuser = "Team Conbeef";
                  gotteam = true;
                  break;
                  }
                }
 
       
        if(arg == triviaA){
            if (triviaPoints.indexOf(theuser) > -1){
                triviaA = '';
                triviaPoints[triviaPoints.indexOf(theuser) + 1] += 1;
                if (triviaPoints[triviaPoints.indexOf(theuser) + 1] >= 10) {
                    clearInterval(triviaTimer);
                    this.reply( room, '**Congrats to ' + theuser + ' for winning Trivia!**');
                    this.reply(room,'/pm '+ user + ' ,**Congratulations** on winning the game of Team Trivia.')
                    //this.say(room,'/msg lustrousash,' + user + ' have been awarded **2 Points** for winning trivia')
                    triviaON = false;
                                        game = "none";
                                        started = false;
                                        requiredPlayers = 0;
                    return false;
                }
                this.reply(room,'**' + user + '** got the right answer,' +"**"+theuser+"**"+ ' has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoints!');
            } else {
                triviaA = '';
                triviaPoints[triviaPoints.length] = theuser;
                triviaPoints[triviaPoints.length] = 1;
                this.reply(room,'**' + user + '** got the right answer,' +"**"+theuser+"**"+ ' has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoint!');
            }
        }
    },
};
