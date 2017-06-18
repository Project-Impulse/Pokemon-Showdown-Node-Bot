/**general files  of Bot. Some are useful and some are less useful 
 * 
 * MIT License **/


const MESSAGES_TIME_OUT = 7 * 24 * 60 * 60 * 1000;

var http = require('http');
var sys = require('sys');

var CDchecker = {
	roomkick: 0,
	pair: 0,
};

var CDtime = {
	roomkick: 10,
	pair: 2,
};

//Functions
 
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
 
 
//rps vars
var rpsgame = ['rock','paper','scissors'];
// .set constants
 
var trainers = ["Hero", "Heroine", "Youngster", "Lass", "Camper", "Picnicker", "Bug Catcher", "Aroma Lady", "Twins", "Hiker", "Battle Girl", "Fisherman", "Cyclist-M", "Cyclist-F", "Black Belt", "Artist", "Pkmn Breeder-M", "Pkmn Breeder-F", "Cowgirl", "Jogger", "Pokefan-M", "Pokefan-F", "Poke Kid", "Young Couple", "Ace Trainer-M", "Ace Trainer-F", "Waitress", "Veteran", "Ninja Boy", "Dragon Tamer", "Bird Keeper", "Double Team", "Rich Boy", "Lady", "Gentleman", "Socialite", "Beauty", "Collector", "Policeman", "Pkmn Ranger-M", "Pkmn Ranger-F", "Scientist", "Swimmer-M", "Swimmer-F", "Tuber-M", "Tuber-F", "Sailor", "Sis and Bro", "Ruin Maniac", "Psychic-M", "Psychic-F", "PI", "Guitarist", "Ace-M2", "Ace-F2", "Skier-M", "Skier-F", "Roughneck", "Clown", "Worker", "School Kid-M", "School Kid-F", "Roark", "Rival", "Byron", "Aaron", "Bertha", "Flint", "Lucian", "Cynthia", "Belle & Pa", "Rancher", "Commander-F", "Galactic Grunt-M", "Gardenia", "Wake", "Maylene", "Fantina", "Candice", "Volkner", "Parasol Lady", "Waiter", "Interviewers", "Cameraman", "Reporter", "Idol", "Galactic Boss", "Commander-F2", "Commander-M", "Galactic Grunt-F", "Hall Matron", "Tower Tycoon", "Factory Head", "Buck", "Castle Valet", "Marly", "Mira", "Cheryl", "Riley", "Arcade Star", "Hero3", "Heroine3", "Twins2", "Lass2", "Ace Trainer-M2", "Ace Trainer-F2", "Juggler", "Sage", "Elder", "Gentleman2", "Teacher", "Beauty2", "Bird Keeper2", "Swimmer-M2", "Swimmer-F2", "Kimono Girl", "Scientist2", "Double Team2", "Young Couple2", "Super Nerd", "Medium", "School Kid", "Black Belt2", "Poke Maniac", "Fire Breather", "Burglar", "Roughneck2", "Boarder-F", "Boarder-M", "Rocket Grunt-M", "Rocket Grunt-F", "Rocket Executive-M", "Rocket Executive-F", "Rocket Commander","Rocket Commander-2", "Mystery Man", "Hero2", "Heroine2", "Socialite", "Waiter", "Falkner", "Bugsy", "Whitney", "Morty", "Chuck", "Jasmine", "Pryce", "Claire", "Will", "Koga", "Bruno", "Karen", "Lance", "Brock", "Misty", "Surge", "Erika", "Janine", "Sabrina", "Blaine", "Blue", "Red", "Red2", "Rival2", "Rocket Boss", "Mystery Trainer-F", "Mystery Trainer-M", "Mystery Trainer-M2", "Hero4", "Heroine4", "Youngster2", "Lass3", "School Kid-M2", "School Kid-F2", "Smasher", "Linebacker", "Waiter2", "Waitress2", "Chili", "Cylan", "Cress", "Nursery Aide", "Preschooler-F", "Preschooler-M", "Twins3", "Pkmn Breeder-M2", "Pkmn Breeder-F2", "Lenora", "Burgh", "Elesa", "Clay", "Skyla", "Pkmn Ranger-M2", "Pkmn Ranger-F2", "Worker2", "Backpacker-M", "Backpacker-F", "Fisherman2", "Musician", "Dancer", "Harlequin", "Artist2", "Baker", "Psychic-M2", "Psychic-F2", "Cheren", "Bianca", "Plasma Grunt-M", "N", "Rich Boy2", "Lady2", "Pilot", "Worker3", "Hoopster", "Scientist-F", "Clerk-F", "Ace Trainer-F3", "Ace Trainer-M3", "Black Belt3", "Scientist3", "Striker", "Brycen", "Iris", "Drayden", "Roughneck3", "Janitor", "Pokefan-M2", "Pokefan-F2", "Doctor-M", "Doctor-F", "Hooligans", "Battle Girl2", "Parasol Lady2", "Clerk-M", "Clerk Boss", "Backer-M", "Backer-F", "Veteran-M", "Veteran-F", "Motorcyclist", "Infielder", "Hiker2", "Socialite2", "Gentleman3", "Plasma Grunt-F", "Shauntal", "Marshall", "Grimsley", "Caitlin", "Ghetsis", "Depot Agent", "Swimmer-M3", "Swimmer-F3", "Policeman2", "Maid", "Ingo", "Alder", "Cyclist-M2", "Cyclist-F2", "Cynthia2", "Emmet", "Hero5", "Heroine5", "Rival3", "Hero6", "Heroine6", "Colress", "Beauty3", "Ghetsis2", "Team Galactic Grunt-M", "Team Galactic Grunt-F", "Iris2", "Brycen-Man", "Ninja", "Rood", "Zinzolin", "Cheren2", "Marlon", "Roxie", "Roxanne", "Brawly", "Wattson", "Flannery", "Norman", "Winona", "Tate", "Liza", "Guitarist2", "Steven", "Wallace", "Benga", "Ash"]
 
 
var megapoke = ['venusaur-mega','charizard-mega-x','charizard-mega-y','blastoise-mega','alakazam-mega','gengar-mega','kangaskhan-mega','pinsir-mega','gyarados-mega','aerodactyl-mega','mewtwo-mega-x','mewtwo-mega-y','ampharos-mega','scizor-mega','heracross-mega','houndoom-mega','tyranitar-mega','blaziken-mega','gardevoir-mega','mawile-mega','aggron-mega','medicham-mega','manectric-mega','bannette-mega','absol-mega','garchomp-mega','lucario-mega','abomasnow-mega','beedrill-mega','pidgeot-mega','slowbro-mega','steelix-mega','sceptile-mega','swampert-mega','sableye-mega','sharpedo-mega','camerupt-mega','altaria-mega','glalie-mega','salamence-mega','metagross-mega','latias-mega','latios-mega','rayquaza-mega','lopunny-mega','gallade-mega','diancie-mega','audino-mega','groudon-primal','kyogre-primal']
 
var requiredAlt = '+'
var requiredPlayers = 0;
var maxPlayers = 9999;
var started = false;
var game = "none";
var checked = false;
var joinusers = [];
var joinusersid = [];
var playerdata = [];
var safeusers = [];//exclusive to ambush(also using for oldrod )       
var currentplayer = 0;
var active;//special to ambush atm(also using for oldrod)
var firetimer;
var starttimer;
var turnspassed = 0;
 
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
 
//blackjack variables
 
var cards = ["A","A","A","A",2,2,2,2,3,3,3,3,4,4,4,4,
            5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,
            10,10,10,10,"J","J","J","J","Q","Q","Q","Q","K","K","K","K"];
 
var numofaces = 0;
var dealerstotal = 0; //(using this for old rod)
 
//blackjack variables end
 
//oldrod variables
 
var rounds = 1;
var waterpoke = ["Tentacool",50,"Magikarp",50,"Wailmer",50,"Wailord",150,"Relicanth",100];
var wait = ["...","...","...","...","!"]; // I know this is useless xD and the name is horrible lol

const CONFIGURABLE_COMMANDS = {
 autoban: true,
 say: true,
 'checkroom': true,
 'setalt':true,
 'reload': true,
 'rps': true,
 'joingame': true,
 'startgame': true,
 'endgame': true,
 'stay': true,
 'hit': true,
 'fire': true,
 'signup': true,
 'reel': true,
 'randpoke': true,
 'randa': true,
 'custsay': true,
 '8ball': true,
 'lennyraid': true
};

exports.commands = {

	/**
	 * Help commands
	 *
	 * These commands are here to provide information about the bot.
	 */
	help: 'guide',
	guide: function (arg, by, room) {
		var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
		if (config.botguide) {
			text += 'A guide on how to use this bot can be found here: ' + config.botguide;
		} else {
			text += 'There is no guide for this bot. PM Lustrous Ash for any questions related to Bot';
		}
		this.say(room, text);
	},

	/** These are the commands which can be used by high ranked user although u can make it to be used for regular users also
	  but i will not advise it :p **/

	reload: function (arg, by, room) {
		if (config.excepts.indexOf(toId(by)) === -1)  
			if(!this.hasRank(by , '~')) return false;
		try {
			this.uncacheTree('./commands.js');
			Commands = require('./commands.js').commands;
			this.say(room, 'Thanks for updating my commands ^_^');
			console.log(by + ' reloaded the bot.');
		} catch (e) {
			error('failed to reload: ' + sys.inspect(e));
		}
	},
	custom: function(arg, by, room) {
		if (!this.hasRank(by, '~')) return false;
		
		if (arg.indexOf('[') === 0 && arg.indexOf(']') > -1) {
			var tarRoom = arg.slice(1, arg.indexOf(']'));
			arg = arg.substr(arg.indexOf(']') + 1).trim();
		}
		this.say(tarRoom || room, arg);
	},
	say: function (arg, by, room) {
		if (!this.hasRank(by, '&@%+#')) return false;
		if (arg.indexOf('[') === 0 && arg.indexOf(']') > -1) {
			var tarRoom = arg.slice(1, arg.indexOf(']'));
			arg = arg.substr(arg.indexOf(']') + 1).trim();
		}
		this.say(tarRoom || room, arg);
	},
	js: function (arg, by, room) {
		if (config.excepts.indexOf(toId(by)) === -1) return false;
		try {
			var result = eval(arg.trim());
			this.say(room, JSON.stringify(result));
		} catch (e) {
			this.say(room, e.name + ": " + e.message);
		}
	},
	uptime: function (arg, by, room) {
		var text = config.excepts.indexOf(toId(by)) < 0 ? '**Uptime of Bot:** ' : '**Uptime of Bot:** ';
		var divisors = [52, 7, 24, 60, 60];
		var units = ['week', 'day', 'hour', 'minute', 'second'];
		var buffer = [];
		var uptime = ~~(process.uptime());
		do {
			var divisor = divisors.pop();
			var unit = uptime % divisor;
			buffer.push(unit > 1 ? unit + ' ' + units.pop() + 's' : unit + ' ' + units.pop());
			uptime = ~~(uptime / divisor);
		} while (uptime);

		switch (buffer.length) {
		case 5:
			text += buffer[4] + ', ';
			/* falls through */
		case 4:
			text += buffer[3] + ', ';
			/* falls through */
		case 3:
			text += buffer[2] + ', ' + buffer[1] + ', and ' + buffer[0];
			break;
		case 2:
			text += buffer[1] + ' and ' + buffer[0];
			break;
		case 1:
			text += buffer[0];
			break;
		}

		this.say(room, text);
	},

//Room Commands , can be used by users with ranks %,@,&,#,~

	settings: 'set',
	set: function (arg, by, room) {
		if (!this.hasRank(by, '@&#~') || room.charAt(0) === ',') return false;

		var settable = {
			say: 1,
			joke: 1,
			choose: 1,
			usagestats: 1,
			buzz: 1,
			'8ball': 1,
			survivor: 1,
			games: 1,
			wifi: 1,
			monotype: 1,
			autoban: 1,
			happy: 1,
			guia: 1,
			studio: 1,
			'switch': 1,
			banword: 1
		};
		var modOpts = {
			flooding: 1,
			caps: 1,
			stretching: 1,
			bannedwords: 1
		};

		var opts = arg.split(',');
		var cmd = toId(opts[0]);
		if (cmd === 'mod' || cmd === 'm' || cmd === 'modding') {
			if (!opts[1] || !toId(opts[1]) || !(toId(opts[1]) in modOpts)) return this.say(room, 'Incorrect command: correct syntax is #set mod, [' +
				Object.keys(modOpts).join('/') + '](, [on/off])');

			if (!this.settings['modding']) this.settings['modding'] = {};
			if (!this.settings['modding'][room]) this.settings['modding'][room] = {};
			if (opts[2] && toId(opts[2])) {
				if (!this.hasRank(by, '#~')) return false;
				if (!(toId(opts[2]) in {
						on: 1,
						off: 1
					})) return this.say(room, 'Incorrect command: correct syntax is #set mod, [' +
					Object.keys(modOpts).join('/') + '](, [on/off])');
				if (toId(opts[2]) === 'off') {
					this.settings['modding'][room][toId(opts[1])] = 0;
				}
				else {
					delete this.settings['modding'][room][toId(opts[1])];
				}
				this.writeSettings();
				this.say(room, 'Moderation for ' + toId(opts[1]) + ' in this room is now ' + toId(opts[2]).toUpperCase() + '.');
				return;
			}
			else {
				this.say(room, 'Moderation for ' + toId(opts[1]) + ' in this room is currently ' +
					(this.settings['modding'][room][toId(opts[1])] === 0 ? 'OFF' : 'ON') + '.');
				return;
			}
		}
		else {
			if (!Commands[cmd]) return this.say(room, '#' + opts[0] + ' is not a valid command.');
			var failsafe = 0;
			while (!(cmd in settable)) {
				if (typeof Commands[cmd] === 'string') {
					cmd = Commands[cmd];
				}
				else if (typeof Commands[cmd] === 'function') {
					if (cmd in settable) {
						break;
					}
					else {
						this.say(room, 'The settings for #' + opts[0] + ' cannot be changed.');
						return;
					}
				}
				else {
					this.say(room, 'Something went wrong. PM SolarisFox here or on Smogon with the command you tried.');
					return;
				}
				failsafe++;
				if (failsafe > 5) {
					this.say(room, 'The command "#' + opts[0] + '" could not be found.');
					return;
				}
			}
			var settingsLevels = {
				off: false,
				disable: false,
				'+': '+',
				'%': '%',
				'@': '@',
				'&': '&',
				'#': '#',
				'~': '~',
				on: true,
				enable: true
			};
			if (!opts[1] || !opts[1].trim()) {
				var msg = '';
				if (!this.settings["set"]) this.settings["set"] = {};
				if (!this.settings["set"][cmd] && this.settings["set"][cmd] !== false) {
					msg = '#' + cmd + ' is available for users of rank ' + ((cmd === 'autoban' || cmd === 'banword') ? '#' : config.defaultrank) + ' and above.';
				}
				else if (this.settings["set"][cmd] in settingsLevels) {
					msg = '#' + cmd + ' is available for users of rank ' + this.settings["set"][cmd] + ' and above.';
				}
				else if (this.settings["set"][cmd] === true) {
					msg = '#' + cmd + ' is available for all users.';
				}
				else if (this.settings["set"][cmd] === false) {
					msg = '#' + cmd + ' is not available for use.';
				}
				this.say(con, room, msg);
				return;
			}
			else {
				if (!this.hasRank(by, '#~')) return false;
				var newRank = opts[1].trim();
				if (!(newRank in settingsLevels)) return this.say(room, 'Unknown option: "' + newRank + '". Valid settings are: off/disable, +, %, @, &, #, ~, on/enable.');
				if (!this.settings["set"]) this.settings["set"] = {};
				if (!this.settings["set"][cmd]) this.settings["set"][cmd] = {};
				this.settings["set"][cmd] = settingsLevels[newRank];
				this.writeSettings();
				this.say(room, 'The command #' + cmd + ' is now ' +
					(settingsLevels[newRank] === newRank ? ' available for users of rank ' + newRank + ' and above.' :
						(this.settings["set"][cmd] ? 'available for all users.' : 'unavailable for use.')));
			}
		}
	},
	blacklist: 'autoban',
	ban: 'autoban',
	ab: 'autoban',
	autoban: function (arg, by, room) {
		if (!this.canUse('autoban', room, by) || room.charAt(0) === ',') return false;
	    if (!this.hasRank(by, '@#&~')) return this.say(room, config.nick + ' requires rank of @ or higher to (un)blacklist.');

		arg = arg.split(',');
		var added = [];
		var illegalNick = [];
		var alreadyAdded = [];
		if (!arg.length || (arg.length === 1 && !arg[0].trim().length)) return this.say(room, 'You must specify at least one user to blacklist.');
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (tarUser.length < 1 || tarUser.length > 18) {
				illegalNick.push(tarUser);
				continue;
			}
			if (!this.blacklistUser(tarUser, room)) {
				alreadyAdded.push(tarUser);
				continue;
			}
			this.say(room, '/roomban ' + tarUser + ', Blacklisted user');
			this.say(room, '/modnote ' + tarUser + ' was added to the blacklist by ' + by + '.');
			added.push(tarUser);
		}

		var text = '';
		if (added.length) {
			text += 'User(s) "' + added.join('", "') + '" added to blacklist successfully. ';
			this.writeSettings();
		}
		if (alreadyAdded.length) text += 'User(s) "' + alreadyAdded.join('", "') + '" already present in blacklist. ';
		if (illegalNick.length) text += 'All ' + (text.length ? 'other ' : '') + 'users had illegal nicks and were not blacklisted.';
		this.say(room, text);
	},
	unblacklist: 'unautoban',
	unban: 'unautoban',
	unab: 'unautoban',
	unautoban: function (arg, by, room) {
		if (!this.canUse('autoban', room, by) || room.charAt(0) === ',') return false;
		if (!this.hasRank(by, '@#&~')) return this.say(room, config.nick + ' requires rank of @ or higher to (un)blacklist.');

		arg = arg.split(',');
		var removed = [];
		var notRemoved = [];
		if (!arg.length || (arg.length === 1 && !arg[0].trim().length)) return this.say(room, 'You must specify at least one user to unblacklist.');
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (tarUser.length < 1 || tarUser.length > 18) {
				notRemoved.push(tarUser);
				continue;
			}
			if (!this.unblacklistUser(tarUser, room)) {
				notRemoved.push(tarUser);
				continue;
			}
			this.say(room, '/roomunban ' + tarUser);
			removed.push(tarUser);
		}

		var text = '';
		if (removed.length) {
			text += 'User(s) "' + removed.join('", "') + '" removed from blacklist successfully. ';
			this.writeSettings();
		}
		if (notRemoved.length) text += (text.length ? 'No other ' : 'No ') + 'specified users were present in the blacklist.';
		this.say(room, text);
	},
	rab: 'regexautoban',
	regexautoban: function (arg, by, room) {
		if (config.regexautobanwhitelist.indexOf(toId(by)) < 0 || !this.canUse('autoban', room, by) || room.charAt(0) === ',') return false;
		if (!this.hasRank(by, '@#&~')) return this.say(room, config.nick + ' requires rank of @ or higher to (un)blacklist.');
		if (!arg) return this.say(room, 'You must specify a regular expression to (un)blacklist.');

		try {
			new RegExp(arg, 'i');
		} catch (e) {
			return this.say(room, e.message);
		}

		arg = '/' + arg + '/i';
		if (!this.blacklistUser(arg, room)) return this.say(room, '/' + arg + ' is already present in the blacklist.');

		this.writeSettings();
		this.say(room, '/' + arg + ' was added to the blacklist successfully.');
	},
	unrab: 'unregexautoban',
	unregexautoban: function (arg, by, room) {
		if (config.regexautobanwhitelist.indexOf(toId(by)) < 0 || !this.canUse('autoban', room, by) || room.charAt(0) === ',') return false;
		if (!this.hasRank(by, '@#&~')) return this.say(room, config.nick + ' requires rank of @ or higher to (un)blacklist.');
		if (!arg) return this.say(room, 'You must specify a regular expression to (un)blacklist.');

		arg = '/' + arg.replace(/\\\\/g, '\\') + '/i';
		if (!this.unblacklistUser(arg, room)) return this.say(room,'/' + arg + ' is not present in the blacklist.');

		this.writeSettings();
		this.say(room, '/' + arg + ' was removed from the blacklist successfully.');
	},
	viewbans: 'viewblacklist',
	vab: 'viewblacklist',
	viewautobans: 'viewblacklist',
	viewblacklist: function (arg, by, room) {
		if (!this.canUse('autoban', room, by) || room.charAt(0) === ',') return false;

		var text = '';
		if (!this.settings.blacklist || !this.settings.blacklist[room]) {
			text = 'No users are blacklisted in this room.';
		} else {
			if (arg.length) {
				var nick = toId(arg);
				if (nick.length < 1 || nick.length > 18) {
					text = 'Invalid nickname: "' + nick + '".';
				} else {
					text = 'User "' + nick + '" is currently ' + (nick in this.settings.blacklist[room] ? '' : 'not ') + 'blacklisted in ' + room + '.';
				}
			} else {
				var nickList = Object.keys(this.settings.blacklist[room]);
				if (!nickList.length) return this.say(room, '/pm ' + by + ', No users are blacklisted in this room.');
				this.uploadToHastebin('The following users are banned in ' + room + ':\n\n' + nickList.join('\n'), function (link) {
					this.say(room, "/pm " + by + ", Blacklist for room " + room + ": " + link);
				}.bind(this));
				return;
			}
		}
		this.say(room, '/pm ' + by + ', ' + text);
	},
	banphrase: 'banword',
	banword: function (arg, by, room) {
		if (!this.canUse('banword', room, by)) return false;
		if (!this.settings.bannedphrases) this.settings.bannedphrases = {};
		arg = arg.trim().toLowerCase();
		if (!arg) return false;
		var tarRoom = room;

		if (room.charAt(0) === ',') {
			if (!this.hasRank(by, '#')) return false;
			tarRoom = 'global';
		}

		if (!this.settings.bannedphrases[tarRoom]) this.settings.bannedphrases[tarRoom] = {};
		if (arg in this.settings.bannedphrases[tarRoom]) return this.say(room, "Phrase \"" + arg + "\" is already banned.");
		this.settings.bannedphrases[tarRoom][arg] = 1;
		this.writeSettings();
		this.say(room, "Phrase \"" + arg + "\" is now banned.");
	},
	unbanphrase: 'unbanword',
	unbanword: function (arg, by, room) {
		if (!this.canUse('banword', room, by)) return false;
		arg = arg.trim().toLowerCase();
		if (!arg) return false;
		var tarRoom = room;

		if (room.charAt(0) === ',') {
			if (!this.hasRank(by, '#')) return false;
			tarRoom = 'global';
		}

		if (!this.settings.bannedphrases || !this.settings.bannedphrases[tarRoom] || !(arg in this.settings.bannedphrases[tarRoom])) 
			return this.say(room, "Phrase \"" + arg + "\" is not currently banned.");
		delete this.settings.bannedphrases[tarRoom][arg];
		if (!Object.size(this.settings.bannedphrases[tarRoom])) delete this.settings.bannedphrases[tarRoom];
		if (!Object.size(this.settings.bannedphrases)) delete this.settings.bannedphrases;
		this.writeSettings();
		this.say(room, "Phrase \"" + arg + "\" is no longer banned.");
	},
	viewbannedphrases: 'viewbannedwords',
	vbw: 'viewbannedwords',
	viewbannedwords: function (arg, by, room) {
		if (!this.canUse('banword', room, by)) return false;
		arg = arg.trim().toLowerCase();
		var tarRoom = room;

		if (room.charAt(0) === ',')  {
			if (!room === 'thebotlab')
			if (!this.hasRank(by, '#&@%+~')) return false;
			tarRoom = 'global';
		}

		var text = "";
		if (!this.settings.bannedphrases || !this.settings.bannedphrases[tarRoom]) {
			text = "No phrases are banned in this room.";
		} else {
			if (arg.length) {
				text = "The phrase \"" + arg + "\" is currently " + (arg in this.settings.bannedphrases[tarRoom] ? "" : "not ") + "banned " +
					(room.charAt(0) === ',' ? "globally" : "in " + room) + ".";
			} else {
				var banList = Object.keys(this.settings.bannedphrases[tarRoom]);
				if (!banList.length) return this.say(room, "No phrases are banned in this room.");
				this.uploadToHastebin("The following phrases are banned " + (room.charAt(0) === ',' ? "globally" : "in " + room) + ":\n\n" + banList.join('\n'), function (link) {
					this.say(room, (room.charAt(0) === '' ? "" : "") + "Banned Phrases " + (room.charAt(0) === ',' ? "globally" : "in " + room) + ": " + link);
				}.bind(this));
				return;
			}
		}
		this.say(room, text);
	},

//Custom Room commands. However seen command is still buggy

	seen: function (arg, by, room) { 
		var text = (room.charAt(0) === ',' ? '' : '' + by + ' ');
		arg = toId(arg);
		if (!arg || arg.length > 18) return this.say(room, text + 'Invalid username.');
		if (arg === toId(by)) {
			text += ', Look in the mirror instead of asking me....';
		} else if (arg === toId(config.nick)) {
			text += ', ya idiot, you need to get checked up!!!!';
		} else if (!this.chatData[arg] || !this.chatData[arg].seenAt) {
			text += ' ,The user ' + arg + ' has never been seen.';
		} else {
			text += arg + ' was last seen ' + this.getTimeAgo(this.chatData[arg].seenAt) + ' ago' + (
				this.chatData[arg].lastSeen ? ', ' + this.chatData[arg].lastSeen : '.');
		}
		this.say(room, text);
	},

	//A very nice command of Writing bot by SirDonovan and Axebane :D
	time: function (arg, by, room) {
        var today = new Date(); 
        var dd = today.getDate(); 
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        var hr = today.getHours();
        var mi = today.getMinutes();
        var se = today.getSeconds();
        if (mm === 1) { this.mmm = "January"; var sea = "winter"};
        if (mm === 2) { this.mmm = "Febuary"; var sea = "winter"};
        if (mm === 3) { this.mmm = "March"; var sea = "spring"};
        if (mm === 4) { this.mmm = "April"; var sea = "spring"};
        if (mm === 5) { this.mmm = "May"; var sea = "spring"};
        if (mm === 6) { this.mmm = "June"; var sea = "summer"};
        if (mm === 7) { this.mmm = "July"; var sea = "summer"};
        if (mm === 8) { this.mmm = "August"; var sea = "summer"};
        if (mm === 9) { this.mmm = "September"; var sea = "autumn"};
        if (mm === 10) { this.mmm = "October"; var sea = "autumn"};
        if (mm === 11) { this.mmm = "November"; var sea = "autumn"};
        if (mm === 12) { this.mmm = "December"; var sea = "winter"};
        if (dd === 1) { this.ddd = "first" };
        if (dd === 2) { this.ddd = "second" };
        if (dd === 3) { this.ddd = "third" };
        if (dd === 4) { this.ddd = "forth" };
        if (dd === 5) { this.ddd = "fifth" };
        if (dd === 6) { this.ddd = "sixth" };
        if (dd === 7) { this.ddd = "seventh" };
        if (dd === 8) { this.ddd = "eighth" };
        if (dd === 9) { this.ddd = "nineth" };
        if (dd === 10) { this.ddd = "tenth" };
        if (dd === 11) { this.ddd = "eleventh" };
        if (dd === 12) { this.ddd = "twelfth" };
        if (dd === 13) { this.ddd = "thirteenth" };
        if (dd === 14) { this.ddd = "forteenth" };
        if (dd === 15) { this.ddd = "fifteenth" };
        if (dd === 16) { this.ddd = "sixteenth" };
        if (dd === 17) { this.ddd = "seventeenth" };
        if (dd === 18) { this.ddd = "eighteenth" };
        if (dd === 19) { this.ddd = "nineteenth" };
        if (dd === 20) { this.ddd = "twentieth" };
        if (dd === 21) { this.ddd = "twenty-first" };
        if (dd === 22) { this.ddd = "twenty-second" };
        if (dd === 23) { this.ddd = "twenty-third" };
        if (dd === 24) { this.ddd = "twenty-forth" };
        if (dd === 25) { this.ddd = "twenty-fifth" };
        if (dd === 26) { this.ddd = "twenty-sixth" };
        if (dd === 27) { this.ddd = "twenty-seventh" };
        if (dd === 28) { this.ddd = "twenty-eighth" };
        if (dd === 29) { this.ddd = "twenty-nineth" };
        if (dd === 30) { this.ddd = "thirtieth" };
        if (dd === 31) { this.ddd = "thirty-first" };
        //And one more, just for good luck.
        if (dd === 32) { this.ddd = "thirty-second" };
        var AMorPM = "AM"
        if (hr === 12) AMorPM = "PM"
        if (hr === 24) { hr = 12; AMorPm = "AM" };
        if (hr > 12) {
            if (hr === 13) { hr = 1 };
            if (hr === 14) { hr = 2 };
            if (hr === 15) { hr = 3 };
            if (hr === 16) { hr = 4 };
            if (hr === 17) { hr = 5 };
            if (hr === 18) { hr = 6 };
            if (hr === 19) { hr = 7 };
            if (hr === 20) { hr = 8 };
            if (hr === 21) { hr = 9 };
            if (hr === 22) { hr = 10 };
            if (hr === 23) { hr = 11 };
            AMorPM = "PM";
        };
        if (dd<10) { dd = "0" + dd }; 
        if (mm<10) { mm = "0" + mm };
        if (mi<10) { mi = "0" + mi };
        if (se<10) { se = "0" + se };
        var theDay = today.getDay(); 
        if (theDay === 0) { this.theDay = "Sunday" }; 
        if (theDay === 1) { this.theDay = "Monday" }; 
        if (theDay === 2) { this.theDay = "Tuesday" };
        if (theDay === 3) { this.theDay = "Wednesday" };
        if (theDay === 4) { this.theDay = "Thursday" };
        if (theDay === 5) { this.theDay = "Friday" };
        if (theDay === 6) { this.theDay = "Saturday"};
        var today = hr + ":" + mi + ":" + se + " " + AMorPM + ", " + mm + '/' + dd + '/' + yyyy + ', the ' + this.ddd + " of the " + sea + " month of " + this.mmm + ', ' + yyyy + ' (' + this.theDay + ')';
        this.say(room, "The current time is: " + today);
	},
	
	//My Commands Starts from here
	
	//enable/disable commands
    disablecommands: 'dbcommands' ,
    dbcommands:	function(arg, by, room) {
		if(!this.hasRank(by , '~')) return false;
		config.defaultrank = '~';
		this.say(room, 'Commands are disabled.');
	},
	
	ebcommands: 'enablecommands' ,
	enablecommands: function(arg, by, room) {
		if(!this.hasRank(by , '~')) return false;
		config.defaultrank = '+';
		this.say(room, 'Commands are enabled.');
	},
	
	//Can Mod commands
	
	canmod: 'canmoderate',
	canmoderate: function(arg, by, room) {
		if(!this.hasRank(by , '+%@&#')) return false;
		if (config.allowmute == true) {
			this.say(room, config.nick + ' **can** apply moderation to users.');
		}
		else if (config.allowmute == false) {
			this.say(room, config.nick + ' **cannot** apply moderation to users.');
		}
	},
	
	watch: 'moderation',
	mod: 'moderation',
	moderation: function(arg, by, room) {
		if(!this.hasRank(by , '&#')) return false;
		var toggle = toId(stripCommands(arg));

		switch (toggle) {
			case 'on':
			case 'true':
				if (config.allowmute === true) {
					this.say(room, 'I\'m already watching. __I\'m always watching.__');
				}
				else {
					config.allowmute = true;
					this.say(room, 'I am now watching all of you o.o');
				}
				break;
			case 'off':
			case 'false':
				if (config.allowmute === false) {
					this.say(room, 'I\'m already on break, leave me alone! ;~;');
				}
				else {
					config.allowmute = false;
					this.say(room, 'I\'m going off duty, enjoy your freedom everyone!^-^');
				}
				break;
			case 'cmdmaker':
				this.say(room, 'This command was made by Rhythms! Thanks to him!!! ^-^');
				break;
			default:
				this.say(room, '\'' + toggle + '\' is not a valid choice for moderation toggling... The correct syntax is ' + config.commandcharacter + 'moderation **[on/true]/[off/false]** ^-^');
		}
	},
	
			// Commands Character Command
	'currentcc': function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if(!this.hasRank(by , '+%&#')) return false;
		this.say(room, '**Current Commands Character Is:** ' +  config.commandcharacter + '');
	},
	
	'setcc': function(arg, by, room) {
                if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
                if(!this.hasRank(by , '~')) return this.say(room, 'Sorry but only ' + config.excepts + ' can you change command character.');
                if (arg == '+') {
                     config.commandcharacter = '+';
                    this.say(room, 'Commands Character Has Been Changed To: **+**');
                    }
                    else if (arg == '@') {
                     config.commandcharacter = '@';
                    this.say(room, 'Commands Character Has Been Changed To: **@**');
                    }
                    else if (arg == '-') {
                     config.commandcharacter = '-';
                    this.say(room, 'Commands Character Has Been Changed To: **-**');
                    }
                    else if (arg == '?') {
                     config.commandcharacter = '?';
                    this.say(room, 'Commands Character Has Been Changed To: **?**');
                    }
                    else if (arg == '$') {
                     config.commandcharacter = '$';
                    this.say(room, 'Commands Character Has Been Changed To: **$**');
                    }
                    else if (arg == '#') {
                     config.commandcharacter = '#';
                    this.say(room, 'Commands Character Has Been Changed To: **#**');
                    }
                    else if (arg == '^') {
                     config.commandcharacter = '^';
                    this.say(room, 'Commands Character Has Been Changed To: **^**');
                    }
                    else this.say(room, 'Please choose one of them: **+/-/?/$/@/#/^***');
        },
        
        // Excepts Command
	'givepower': function(arg, by, room) {
                if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
                if(!this.hasRank(by , '~')) return this.say(room, 'Sorry but only ' + config.excepts + ' can give access to others.');
                if (arg == 'Patching') {
                     config.excepts = ['lustrousash','alliancesky','Patching'];
                    this.say(room, '**Patching** Has Been Added To Expects List.');
                    }
                    else if (arg == 'Dusk Conbeef') {
                     config.excepts = ['lustrousash','alliancesky','dusk conbeef'];
                    this.say(room, '**Dusk Conbeef** Has Been Added To Excepts List.');
                    }
                    else if (arg == 'Master Float') {
                     config.excepts = ['lustrousash','alliancesky','master float'];
                    this.say(room, '**Master Float** Has Been Added To Excepts List.');
                    }
                    else if (arg == 'Go All') {
                     config.excepts = ['lustrousash','alliancesky','dusk conbeef','patching','master float'];
                    this.say(room, '**Dusk Conbeef**,**Master Float** And **Patching** Has Been Added To Excepts List.');
                    }
                    else this.say(room, 'Please choose from: Dusk conbeef or Vfp or Master Float and If you want to give access to all of them do: Go All');
        },
        
    'currentexcepts': function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if(!this.hasRank(by , '+%&#')) return false;
		this.say(room, '**Current Excepts Are:** ' +  config.excepts + '');
	},
	
	'removepower': function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if(!this.hasRank(by , '~')) return false;
		config.excepts = ['lustrousash','alliancesky'];
		this.say(room, 'Excepts Removed');
	},
        
	//Join/Leave Command
	'join': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/join ' + arg + '');
	},
	
	'leave': function(arg, by, room) {
		if(!this.hasRank(by, '~')) return this.say(room, 'Only lustrous ash can use this command!');
		this.say(room, '/leave');
	},
	
	//tournaments commands
	'tour': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour new ' + arg + ',' + arg[1] + '');
	},
	
	'tourend': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour end');
	},
	
	'tourstart': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour start');
	},
	
	'tourdq': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour dq ' + arg + '');
	},
	
	'toursetautodq': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour setautodq ' + arg + '');
	},
	
	'tourrunautodq': function(arg, by, room) {
		if(!this.hasRank(by, '+%@&#')) return false;
		this.say(room, '/tour runautodq');
	},
	
	//check room command
	cr: 'checkroom',
checkroom: function(arg, user, room) {
this.say(room,"room.id = "+ room  + " |" + " serverid = "+ config.serverid + " | " + "export server = "+ config.server)
},

    // Simple Bot Pm Command
  pmuser: 'pm',
    pm: function(arg, by, room) {
        if(!this.hasRank(by, '+%@&#')) return false;
var argu = arg.split(",");
    this.say(room,'/msg ' + argu[0] + ',' + argu[1]);
},

    //Creator Command
	creator: 'owner',
    owner: function(arg, by, room) {
	if(!this.hasRank(by, '+%@&#')) return false;
    this.say(room, '``**The Inferno Queen Bot Created By Lustrous Ash**``');
},
	
	
	
	// main commands
	mail: 'message',
	msg: 'message',
	message: function(arg, by, room) {
		if (!arg) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + 'Command syntax: #message ``[user], [message]``');
		if (arg.indexOf(",") == -1) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You must seperate the user from the message with a comma! ;~;__');
		var input = arg.split(",");
		var username = toId(input[0]);
		if (username == 'theslowbrobot') return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + 'h-hi im just a bot so please dont message me..!! >~<');
		var text = by + ': ' + input[1].trim();
		if (input.length > 2) {
		for (var i = 2; i < input.length; i++) {
			text += (',' + input[i]);
		}
		}
		if (!this.messages) this.messages = {};
		if (!this.messages[username]) this.messages[username] = {};
		if (!this.messages[username]["mail"]) this.messages[username]["mail"] = {};
		if (this.messages[username]["mail"][5]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__' + username + '\'s message inbox is full!__');
		var msgNumber = 1;
		for (var i in this.messages[username]["mail"]) {
			msgNumber++;
		}
		this.messages[username]["mail"][msgNumber] = text;
		this.writeMessages();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Message has been sent successfully to ' + input[0] + '!^-^__');
	},
	/**
	 * checkmail is a function that checks the user's mail, clearing them after they are sent
	 * 
	 * @param user has messages stored for them in the messages JSON
	 * 
	 * @return {String} - Returns any messages for the user in the messages JSON
	 */
	checkmessages: 'checkmail',
	checkmsgs: 'checkmail',
	checkmail: function(arg, by, room) {
		if (!this.messages || !this.messages[toId(by)] || !this.messages[toId(by)]["mail"]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You have no mail in your mailbox. ;-;__');
		for (var msgNumber in this.messages[toId(by)]["mail"]) {
			this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '[' + msgNumber + ']: ' + this.messages[toId(by)]["mail"][msgNumber]);
		}
		delete this.messages[toId(by)]["mail"];
		this.writeMessages();
	},
	/**
	 * blockmail is a function that blocks all incoming messages for the user
	 * 
	 * @param {String}         - If 'status' property of the user's message object exists, if so, what the status is
	 * 
	 * @return {String}        - If mail is already being blocked, returns an error message
	 * @return {String} status - Sets the user's message status in the JSON to 'off' 
	 */
	blockmessages: 'blockmail',
	blockmsgs: 'blockmail',
	blockmail: function(arg, by, room) {
		if (!this.messages) this.messages = {};
		if (!this.messages[toId(by)]) this.messages[toId(by)] = {};
		if (!this.messages[toId(by)]["status"]) this.messages[toId(by)]["status"] = {};
		if (this.messages[toId(by)]["status"] == 'off') return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You are already blocking mail! ;~;__');
		this.messages[toId(by)]["status"] = 'off';
		this.writeMessages();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Now blocking all mail!^-^__');
	},
	/**
	 * allowmail is a function that allows all incoming messages for the user
	 * 
	 * @param {String}         - If 'status' property of the user's message object exists, if so, what the status is
	 * 
	 * @return {String}        - If mail is already being allowed, returns an error message
	 * @return {String} status - Sets the user's message status in the JSON to 'on' 
	 * 						   - Send a user status change confirmation
	 */
	allowmessages: 'allowmail',
	allowmsgs: 'allowmail',
	allowmail: function(arg, by, room) {
		if (!this.messages) this.messages = {};
		if (!this.messages[toId(by)]) this.messages[toId(by)] = {};
		if (!this.messages[toId(by)]["status"]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You are already allowing mail, silly :3__');
		delete this.messages[toId(by)]["status"];
		this.writeMessages();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__All mail now allowed!^-^__');
	},
	/**
	 * clearmail is a function that clears all of the mail in either the user, or entire messages JSON
	 * 
	 * @param {String} arg - If arg exists, assume it is a username 
	 * 
	 * @return {String} - If arg exists, delete all messages in the user's JSON object
	 * 					- Send a user message deletion confirmation
	 * @return {String} - If arg does not exist, delete all messages in the messages JSON
	 * 					- Send a total message JSON wipe confirmation
	 */
	clearmessages: 'clearmail',
	clearmsgs: 'clearmail',
	clearmail: function(arg, by, room) {
		if (toId(by) !== 'lustrousash') return false;
		if (!arg) {
			delete this.messages;
			this.messages = {};
			this.writeMessages();
			this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__All messages and user statuses have been reset!__');
		} else {
			if (!this.messages[toId(arg)]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__The user could not be found!__');
			delete this.messages[toId(arg)];
			this.messages[toId(arg)] = {};
			this.writeMessages();
		}
	},
	
	//notes commands
	note: function(arg, by, room) {
		if (!arg) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + 'Command syntax: #note ``[note]``');
		if (!this.notes) this.notes = {};
		if (!this.notes[toId(by)]) this.notes[toId(by)] = {};
		if (this.notes[toId(by)][5]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Notebook is full!__');
		var noteNumber = 1;
		for (var i in this.notes[toId(by)]) {
			noteNumber++;
		}
		this.notes[toId(by)][noteNumber] = arg;
		this.writeNotes();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Note has been taken!^-^__');
	},
	notes: 'checknotes',
	notebook: 'checknotes',
	checknotes: function(arg, by, room) {
		if (!this.notes || !this.notes[toId(by)]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__No notes have been taken. ;-;__');
		for (var noteNumber in this.notes[toId(by)]) {
			this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '[' + noteNumber + ']: ' + this.notes[toId(by)][noteNumber]);
		}
	},
	deletenote: 'clearnote',
	erasenote: 'clearnote',
	clearnote: function(arg, by, room) {
		if (!this.notes || !this.notes[toId(by)]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You have no notes, silly :3__');
		if (!/^\d+$/.test(arg)) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You must include the note number that you want to erase!__');
		if (!this.notes[toId(by)][arg]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__That is not a valid note number!__');
		delete this.notes[toId(by)][arg];
		this.writeNotes();
		var place = '';
		if (arg == '1') place += 'st';
		else if (arg == '2') place += 'nd';
		else if (arg == '3') place += 'rd';
		else place += 'th';
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Your ' + arg + place + ' note has been erased!^-^__');
	},
	erasenotes: 'clearnotes',
	erasenotebook: 'clearnotes',
	clearnotebook: 'clearnotes',
	clearnotes: function(arg, by, room) {
		if (!this.notes || !this.notes[toId(by)]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__You have no notes, silly :3__');
		delete this.notes[toId(by)];
		this.writeNotes();
		this.say(con, room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__All notes have been errased!^-^__');
	},
	
	//favorite pokemon commands
	setfavemon: function(arg, by, room) {
		if (!this.settings.favemon) this.settings.favemon = {};
		if (!this.settings.favemon[toId(by)]) this.settings.favemon[toId(by)] = {};
		var foundMon = false;
		var monId = toId(arg.replace(/(shiny|mega)/i, ''));
		for (var mon in Pokedex) {
			if (toId(Pokedex[mon].species) === monId) {
				foundMon = true;
				break;
			}
		}
		if (!foundMon) return this.say(room, '\'' + arg + '\' is not a valid Pokemon!');
		this.settings["favemon"][toId(by)] = arg;
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Your favorite pokemon has been set to ' + arg + '!^-^__');
	},
	favemon: function(arg, by, room) {
		if (!this.settings["favemon"]) this.settings["favemon"] = {};
		var text = '';
		if (!this.hasRank(by, '+%@#&~')) text += ('/w ' + toId(by) + ', ');
		if (!arg) {
			if (this.settings["favemon"][toId(by)]) return this.say(room, 'There is no favorite Pokemon set for ' + by + '.');
			return this.say(room, by + '\'s favorite Pokemon is __' + this.settings["favemon"][toId(by)] + '__!');
		}
		var user = toId(arg);
		if (user.length < 1 || user.length > 18) return this.say(room, 'That\'s not a real username!');
		if (!this.settings["favemon"][user]) return this.say(room, text + 'There is no favorite Pokemon set for ' + arg + '.');
		this.say(room, text + arg + '\'s favorite Pokemon is __' + this.settings["favemon"][user] + '__!');
	},
	
	//calcu command
	calcu: function(arg, by, room) {
		var input = arg.replace(/ /g,'');
		var sign = '';
		var solution = '';
		if (input.indexOf('+') > -1) sign = '+';
		else if (input.indexOf('+') > -1) sign = '+';
		else if (input.indexOf('-') > -1) sign = '-';
		else if (input.indexOf('*') > -1) sign = '*';
		else if (input.indexOf('x') > -1) sign = 'x';
		else if (input.indexOf('/') > -1) sign = '/';
		else if (input.indexOf('%') > -1) sign = '%';
		else if (input.indexOf('^') > -1) sign = '^';
		else if (input.indexOf('pow') > -1) sign = '^';
		else if (input.indexOf('power') > -1) sign = '^';
		else if (input.indexOf('sqrt') > -1) {
			sign = 'sqrt';
			var num = input.substring(input.indexOf(sign) + sign.length, input.length);
			solution = Math.sqrt(parseInt(num, 10)).toFixed(4);
			return this.say(room, 'sqrt(' + num + ') = ' + solution);
		} else if (input.indexOf('root') > -1) {
			sign = 'root';
			var num = input.substring(input.indexOf(sign) + sign.length, input.length);
			solution = Math.sqrt(parseInt(num, 10)).toFixed(4);
			return this.say(room, 'sqrt(' + num + ') = ' + solution);
		} else return this.say(room, '__Please use a proper sign!__');
		var num1 = parseInt(input.substring(0, input.indexOf(sign)), 10);
		var num2 = parseInt(input.substring(input.indexOf(sign) + sign.length, input.length), 10);
		if (sign == '+') solution = num1 + num2;
		else if (sign == '-') solution = num1 - num2;
		else if (sign == '*' || sign == 'x') solution = num1 * num2;
		else if (sign == '/') solution = num1 / num2;
		else if (sign == '%') solution = num1 % num2;
		else if (sign == '^') solution = Math.pow(num1, num2);
		if (sign == '/' && num2 == 0) return this.say(room, 'You cannot divide by zero ;~;');
		this.say(room, num1 + ' ' + sign + ' ' + num2 + ' = ' + solution);
	},
	
	//favorite anime
	setfaveanime: function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if (!this.settings["faveanime"]) this.settings["faveanime"] = {};
		if (/boku no pico/.test(arg)) return this.say(room, 'l-lewd..!! ;~;');
		if (!this.settings["faveanime"][toId(by)]) this.settings["faveanime"][toId(by)] = {};
		this.settings["faveanime"][toId(by)] = arg;
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Your favorite anime has been set!^-^__');
	},
	faveanime: function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if (!this.settings["faveanime"]) this.settings["faveanime"] = {};
		var text = '';
		if (!this.hasRank(by, '+%@#&~')) text += ('/w ' + toId(by) + ', ');
		if (!arg) {
			if (!this.settings["faveanime"][toId(by)]) return this.say(room, text + '__No favorite anime has been set ;-;__');
			if (/http/.test(this.settings["faveanime"][toId(by)])) return this.say(room, text + by + '\'s favorite anime is ' + this.settings["faveanime"][toId(by)] + '!');
			else return this.say(room, text + by + '\'s favorite anime is __' + this.settings["faveanime"][toId(by)] + '__!');
		}
		var user = toId(arg);
		if (!this.settings["faveanime"][user]) return this.say(room, '__No favorite anime has been set ;-;__');
		if (/http/.test(this.settings["faveanime"][user])) this.say(room, text + by + '\'s favorite anime is ' + this.settings["faveanime"][user] + '!');
		else this.say(room, text + arg + '\'s favorite anime is __' + this.settings["faveanime"][user] + '__!');
	},
	
	// Song Of The Day Commands
	setsong: function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if (toId(by) !== 'lustrousash' && !this.hasRank(by, '#&~')) return false;
		if (!this.settings) this.settings = {};
		if (!this.settings["song"]) this.settings["song"] = {};
		if (arg.indexOf(", ") == -1) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + 'Command syntax: #setsong ``[name], [link]``');
		var input = arg.split(", ");
		this.settings["song"]["name"] = input[0];
		this.settings["song"]["link"] = input[1];
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__The Song of the Day has been set!^-^__');
	},
	sotd: 'song',
	song: function(arg, by, room) {
		this.say(room, 'The Song of the Day is: __' + this.settings["song"]["name"] + '__');
		this.say(room, 'Link: ' + this.settings["song"]["link"]);
	},
	
	//video Of the day commands
	setvideo: function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(room, '__That command is not available in this room ;-;__');
		if (toId(by) !== 'lustrousash' && !this.hasRank(by, '#&~')) return false;
		if (!this.settings) this.settings = {};
		if (!this.settings["video"]) this.settings["video"] = {};
		if (arg.indexOf(", ") == -1) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + 'Command syntax: #setvideo ``[name], [link]``');
		var input = arg.split(", ");
		this.settings["video"]["name"] = input[0];
		this.settings["video"]["link"] = input[1];
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__The Video of the Day has been set!^-^__');
	},
	votd: 'video',
	video: function(arg, by, room) {
		if (room !== 'thebotlab') return this.say(con, room, '__That command is not available in this room ;-;__');
		this.say(room, 'The Video of the Day is: __' + this.settings["video"]["name"] + '__');
		this.say(room, 'Link: ' + this.settings["video"]["link"]);
	},
	
	// Avatar command
	avatar: function(arg, by, room) {
		if (toId(by) !== 'lustrousash') return false;
		var avatarnumber = Math.round(stripCommands(arg))
		this.say(con, room, '/avatar ' + avatarnumber);
		if (avatarnumber < 295) {
			this.say(room, '/w ' + by + ', __The avatar was changed to number ' + avatarnumber + '.__');
		}
		else if (avatarnumber > 294) {
			this.say(room, '/w ' + by + ', __Please choose a valid avatar (1 - 294).__');
		}
		else if (typeof stripCommands(arg) !== 'number') {
			this.say(room, '/w ' + by + ', __That isn\'t a number... ._.__');
		}
	},
	
	// Friends Command
	setfriends: 'addfriend',
	addfriend: function(arg, by, room) {
		if (!this.friends) this.friends = {};
		if (toId(arg) === toId(by)) return this.say(room, '__You can\'t add yourself to your friends list, silly :3__');
		if (arg.length <= 0 || arg.length > 18) return this.say(room, 'That\'s not a real username!');
		if (!this.friends[toId(by)]) this.friends[toId(by)] = {};
		var alreadyInFriends = false;
		for (var i in this.friends[toId(by)]) {
			if (this.friends[toId(by)][i] == toId(arg)) {
				this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__' + arg + ' is already in your friends list!__');
				alreadyInFriends = true;
			}
		}
		if (alreadyInFriends == true) return false;
		var friendNumber = 0;
		for (var i in this.friends[toId(by)]) {
			friendNumber++;
		}
		this.friends[toId(by)][friendNumber] = toId(arg);
		this.writeFriends();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__' + arg + ' has been added to your friends list!^-^__');
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + arg + ', ') + '__' + toId(by) + ' has been added you to his/her friends list!^-^__');
	},
	friendslist: 'allfriends',
	allfriends: function(arg, by, room) {
		if (!this.friends[toId(by)]) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__You have no friends in your friends list ;~;__');
		var friendsList = [];
		for (var i in this.friends[toId(by)]) {
			friendsList.push(' ' + this.friends[toId(by)][i]);
		}
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '**Friends list:** ' + friendsList);
	},
	removefriend: function(arg, by, room, con) {
		var inFriends = false;
		for (var i in this.friends[toId(by)]) {
			if (this.friends[toId(by)][i] == toId(arg)) {
				delete this.friends[toId(by)][i];
				inFriends = true;
			}
		}
		if (inFriends == false) return this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__This user is not in your friends list ;~;__');
		this.writeFriends();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + toId(by) + ', ') + '__' + arg + ' has been successfully deleted from your friends list!^-^__');

	},
	
	//quote of the day
	setqotd: 'setquote',
	setquote: function(arg, by, room) {
		if (!this.hasRank(by, '#~')) return false;
		if (!this.settings) this.settings = {};
		if (!this.settings["qotd"]) this.settings["qotd"] = {};
		if (arg.split(", ").length > 2) {
			this.settings["qotd"]["quote"] = arg.substring(0, arg.lastIndexOf(", "));
			this.settings["qotd"]["by"] = arg.substring(arg.lastIndexOf(", ") + 2, arg.length);
		} else {
			var input = arg.split(", ");
			this.settings["qotd"]["quote"] = input[0];
			this.settings["qotd"]["by"] = input[1];
		}
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__Quote has been set!^-^__');
	},
	qotd: 'quote',
	quote: function(arg, by, room) {
		if (!this.hasRank(by, '+%@&#~')) return false;
		if (!this.settings["qotd"]) return this.say(room, '__No quote has been set ;-;__');
		this.say(room, 'Quote of the Day: __"' + this.settings["qotd"]["quote"] + '"__ ~' + this.settings["qotd"]["by"]);
	},
	
	//League Commands
	setopenspots: function(arg, by, room) {
		if (!this.hasRank(by, '#~')) return false;
		if (!this.settings) this.settings = {};
		if (!this.settings["openspots"]) this.settings["openspots"] = {};
		if (arg.split(", ").length > 2) {
			this.settings["openspots"]["openspots"] = arg.substring(0, arg.lastIndexOf(", "));
			this.settings["openspots"] = arg.substring(arg.lastIndexOf(", ") + 2, arg.length);
		} else {
			var input = arg.split(", ");
			this.settings["openspots"]["openspots"] = input[0];
			this.settings["openspots"] = input[1];
		}
		this.writeSettings();
		this.say(room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + '__open spots/types has been set!^-^__');
	},
	openspots: function(arg, by, room) {
		if (!this.hasRank(by, '+%@&#~')) return false;
		if (!this.settings["openspots"]) return this.say(room, 'No open types/spots has been set ;-;');
		this.say(room, 'Open types: ' + this.settings["openspots"]["openspots"] + '');
	},
	
	//rps commands
	'rps': function (arg, by, room) {
                var playerschoice = arg.toUpperCase();
                var choices = ["Rock","Paper","Scissors"];
 
                if (playerschoice == "ROCK"){
                playerschoice = "Rock";
                }
 
 
                if (playerschoice == "PAPER"){
                playerschoice = "Paper";
                }
 
 
                if (playerschoice == "SCISSORS"){
                playerschoice = "Scissors";
                }
 
                switch(playerschoice){
               
                case "Rock":
 
                var botchoice = choices[Math.round(Math.random()*(choices.length-1))];        
                this.say(room,by + ", I pick "+ botchoice);
 
                if (botchoice == "Rock" ){
                return this.say(room,by + ", It was a tie. Want to play again? ");
                break;
                }
 
                if (botchoice == "Paper" ){
                return this.say(room,"Sorry " + by + ", Paper beats Rock. Want to play again? (¬‿¬)");
                break;
                }
 
               
                if (botchoice == "Scissors" ){
                return this.say(by + ", You win. Want to play again? ");
                break;
                }
 
 
 
                case "Paper":
 
                var botchoice = choices[Math.round(Math.random()*(choices.length-1))];        
                this.say(room,by + ", I pick "+ botchoice);
 
                if (botchoice == "Paper" ){
                return this.say(room,by + ", It was a tie. Want to play again? ");
                break;
                }
 
                if (botchoice == "Scissors" ){
                return this.say(room,"Sorry " + by + ", Scissors beats Paper. Want to play again? (¬‿¬)");
                break;
                }
 
               
                if (botchoice == "Rock" ){
                return this.say(room,by + ", You win. Want to play again? ");
                break;
                }
 
 
                case "Scissors":
 
                var botchoice = choices[Math.round(Math.random()*(choices.length-1))];          
                this.say(room,by + ", I pick "+ botchoice);
 
                if (botchoice == "Scissors" ){
                return this.say(room,by + ", It was a tie. Want to play again? ");
                break;
                }
 
                if (botchoice == "Rock" ){
                return this.say(room,"Sorry " + by + ", Rock beats Scissors. Want to play again? (¬‿¬)");
                break;
                }
 
               
                if (botchoice == "Paper" ){
                return this.say(room,by + ", You win. Want to play again? ");
                break;
                }
 
 
                }
               
        },
		
		// random mega
		'randmega': function (arg, user, room) {
                if (room === user) return false;
                var text = "";
                var rand = (Math.round(Math.random()*(megapoke.length-1)));
                var randstr = megapoke[rand];
                var strLength = randstr.length
                randstr = randstr + ".png"
 
          if (arg){
            randstr = arg.toLowerCase() + ".png"
           }
             
          var theimage = "http://play.pokemonshowdown.com/sprites/bw/"+randstr;
          this.say(room,'/declare <img src="'+theimage+'"; height="96" width="96">');//<center>'+trainers[rand-1]+'</center>');
        },
		
		// random avatar
		'randaavatar': function (arg, user, room) {
                if (room === user) return false;
                var text = "";
                var rand = Math.round(Math.random() * (294 - 1) + 1);
                var randstr = rand.toString();
                var strLength = randstr.length
 
    switch(strLength){
         
          case 1:
               randstr = "00"+randstr+".png"
               break;
 
          case 2:
               randstr = "0"+randstr+".png"
               break;
 
          case 3:
               randstr = randstr+".png"
               break;
           }
   
          var theimage = "http://play.pokemonshowdown.com/sprites/trainers-ordered/"+randstr;
          this.say(room,'/declare <img src="'+theimage+'"; height="80" width="80"><center>'+trainers[rand-1]+'</center>');
        },
		
	
	'8ball': function (arg, user, room) {
                if (room === user) return false;
                var text = "";
                var rand = ~~(21 * Math.random());
 
                switch (rand) {
                        case 0:
                                text += "Signs point to yes.";
                                break;
                        case 1:
                                text += "Yes.";
                                break;
                        case 2:
                                text += "Reply hazy, try again.";
                                break;
                        case 3:
                                text += "Without a doubt.";
                                break;
                        case 4:
                                text += "My sources say no.";
                                break;
                        case 5:
                                text += "As I see it, yes.";
                                break;
                        case 6:
                                text += "You may rely on it.";
                                break;
                        case 7:
                                text += "Concentrate and ask again.";
                                break;
                        case 8:
                                text += "Outlook not so good.";
                                break;
                        case 9:
                                text += "It is decidedly so.";
                                break;
                        case 10:
                                text += "Better not tell you now.";
                                break;
                        case 11:
                                text += "Very doubtful.";
                                break;
                        case 12:
                                text += "Yes - definitely.";
                                break;
                        case 13:
                                text += "It is certain.";
                                break;
                        case 14:
                                text += "Cannot predict now.";
                                break;
                        case 15:
                                text += "Most likely.";
                                break;
                        case 16:
                                text += "Ask again later.";
                                break;
                        case 17:
                                text += "My reply is no.";
                                break;
                        case 18:
                                text += "Outlook good.";
                                break;
                        case 19:
                                text += "Don't count on it.";
                                break;
                        case 20:
                                text += "What ever. Conbeef is Great :D.";
                                break;
                }
 
                this.say(room, text);
        },
		
	'lennyraid': function(arg, user, room) {
     //if (room === user || !user.hasRank(room.id, requiredAlt)) return false;
     var theuser = user.name;
     this.say(room, "/pm " + arg + ", Sorry " + arg + " But " + user + " Made me do this...");
     this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
              this.say(room, "/pm " + arg + ", Sorry " + arg + " But " + theuser + " Made me do this...");
 
 
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
              this.say(room, "/pm " + arg + ", Sorry " + arg + " But " + theuser + " Made me do this...");
 
 
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", ( ͡° ͜ʖ ͡°)");
         this.say(room, "/pm " + arg + ", Sorry " + arg + " But " + theuser + " Made me do this...");
},
	
	
     trivia: function(arg, user, room){
                if (room === user) return false;
                var text = '';
                if (game !="none"){
                 return this.say( room,"Cannot start a game of trivia because a scripted game is running. Do .endgame!")
                }
                if(triviaON){this.say( room, '**ERROR**: A game of trivia is going on another room and hence it cannot be started here'); return false;}
                triviaON = true;
                triviaRoom = toId(room);
                triviaA = '';
                triviaPoints = [];
                this.say( room,'' + user + ' is hosting a game of **trivia**. Answer the questions using -ta or -triviaanswer. First to get 10 points wins.');
				this.say( room, '**HOW TO PLAY:** I will ask a question and you must reply the question first in order to get points. First on to get 10 points will win the game');
                triviaTimer = setInterval( function() {
                        if(triviaA){this.say(room, '**currect answer is:**  ' + triviaA);}
                        var TQN = 2*(Math.floor(triviaQuestions.length*Math.random()/2))
                        triviaQ = triviaQuestions[TQN];
                        triviaA = triviaQuestions[TQN+ 1];
                        this.say( room, '**Question**: ' + triviaQ);
                }.bind(this), 15000);
               
        },
        triviapoints: function(arg, user, room){
                var text = "";
                if(!anagramON) return false;
                var text = '**Triviapoints so far**: '
                for (var i = 0; i < triviaPoints.length; i++){
                        text += '' + triviaPoints[i] + ': ';
                        text += triviaPoints[i + 1] + ' Triviapoints, ';
                        i++
                }
                this.say(room, text);
        },
        ta: 'triviaanswer',
        triviaanswer: function(arg, user, room){
                if(toId(room) !== triviaRoom) return false;
                if (game != "none") return false;
                if (!arg) return false;
                arg = (arg);
                var theuser = user;
                if(arg == triviaA){
                        if (triviaPoints.indexOf(theuser) > -1){
                                triviaA = '';
                                triviaPoints[triviaPoints.indexOf(theuser) + 1] += 1;
                                if (triviaPoints[triviaPoints.indexOf(theuser) + 1] >= 10) {
                                        clearInterval(triviaTimer);
                                        this.say( room, '**Congrats to ' + theuser + ' for winning Trivia!**');
                                        this.say(room,'/pm '+ theuser + ' ,**Congratulations** on winning the game of trivia.')
                                        //this.say(room,'/msg lustrousash,' + theuser + ' have been awarded **2 Points** for winning trivia')
                                        triviaON = false;
                                        return false;
                                }
                                this.say(room,'**' + theuser + '** got the right answer, and has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoints!');
                        } else {
                                triviaA = '';
                                triviaPoints[triviaPoints.length] = theuser;
                                triviaPoints[triviaPoints.length] = 1;
                                this.say(room,'**' + theuser + '** got the right answer, and has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoint!');
                        }
                }
        },
        triviaend: function(arg, user, room){
                if (game != "none") return false;
                if(toId(room) !== triviaRoom)return false;
                if(!triviaON) return false;
                //if (room === user || !this.hasRank(user, '#@+%')) return false;
                clearInterval(triviaTimer);
                this.say(room, 'The game of trivia has been ended.');
                triviaON = false;
        },
		
		///////////////////////////////////////////Scripted Game Setup//////////////////////////////////////////////////////////////
signups: 'signup',
'signup': function (arg, user, room) {
		if (room === user) return false;
                var text = "";
                var gametomake = arg.toLowerCase();

                if (triviaON){
                text += "**That game cannot be created, because there is a game of Trivia running. Do -triviaend**"
	  	return this.say(room, text);
                }

if (gametomake == "bj" || gametomake == "black jack"){
gametomake = "blackjack";
}

if (gametomake == "amb"){
gametomake = "ambush";
}

if (gametomake == "tt" || gametomake == "team trivia" || gametomake == "t trivia"){
gametomake = "ttrivia";
}

if (gametomake == "old" || gametomake == "rod" || gametomake == "old rod" || gametomake == "or"){
gametomake = "oldrod";
}


                  if (game == "none"){

        switch(gametomake){

        default:
                text += "**That is not a scripted game. Please check spelling**"
	  	return this.say(room, text);
                break;

        case "blackjack":
                game = "blackjack";
                requiredPlayers = 2;
                maxPlayers = 14;
                dealerstotal = 0;
                currentplayer = 0;
                numofaces = 0;
                started = false;
                joinusers = [];
                joinusersid = [];
                playerdata = [];
                cards = ["A","A","A","A",2,2,2,2,3,3,3,3,4,4,4,4,
                5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,
                10,10,10,10,"J","J","J","J","Q","Q","Q","Q","K","K","K","K"];
                text = "";
                text += "**A game of Blackjack was created! Do -joingame to join and -startgame to start!**";
	  	return this.say(room, text);
                break; 

        case "ambush":
                game = "ambush";
                requiredPlayers = 2;
                maxPlayers = 9999;
                joinusers = [];
                joinusersid = [];
                playerdata = [];
                text = "";
                text += "**A game of Ambush was created! Do -joingame to join and -startgame to start!**";
	  	return this.say(room, text);
                break; 

       
        case "oldrod":
                game = "oldrod";
                requiredPlayers = 2;
                maxPlayers = 9999;
                dealerstotal = 1;
                joinusers = [];
                joinusersid = [];
                safeusers = [];
                playerdata = [];
                rounds = 1;
                text = "";
                text += "**Old Rod was created! Do -joingame to join and -startgame to start!**";
	  	return this.say(room, text);
                break; 


       case "ttrivia":
                game = "ttrivia";
                requiredPlayers = 1;
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
	  	return this.say(room, text);
                break; 

                          }
                }else{
                text += "**A scripted game was already made. Please do $endgame to end the game.**";
	  	return this.say(room, text);
                text = "";
                }

	},

end: 'endgame',
'endgame': function (arg, user, room) {
		if (room === user) return false;
                var text = "";
                
       switch(game){
        
      case "none":
                text += "**There is no game currently running.**";
	  	return this.say(room, text);
                text = "";
                break;

      case "blackjack":
                game = "none";
                started = false;
                requiredPlayers = 0;
                text += "**The game of Blackjack has ended.**";
	  	return this.say(room, text);
                break;

      case "ambush":
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                text += "**The game of Ambush has ended.**";
	  	return this.say(room, text);
                break;

      case "ttrivia":
                game = "none";
                clearInterval(triviaTimer);
                started = false;
                triviaON = false;
                requiredPlayers = 0;
                text += "**The game of Team Trivia has ended.**";
	  	return this.say(room, text);
                break;
                  

       case "oldrod":
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                clearTimeout(active);
                text += "**The game of Old Rod has ended.**";
	  	return this.say(room, text);
                break; 
         }             
  
          },

start: 'startgame',
'startgame': function (arg, user, room) {
		if (room === user) return false;
                var text = "";
        if (started == false){
         if (game != "none"){
           if (joinusers.length >= requiredPlayers){

             if (game == "blackjack"){
                started = true;
                text = "";
                text += "**The game of Blackjack has started!**";
	  	this.say(room, text);
                text = "";
          
          var starttimer = setTimeout(function(){
             
 
                /////////////////////////////////////////////////////////////////////Draws Random Card For First Player/
          var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);


          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }

    playerdata[currentplayer] = choosencard;
    text += joinusers[currentplayer] + "'s top card is "+actualcard;
    this.say(room, text); 
    text = "";

    text += joinusers[currentplayer] + " -hit or -stay";
    this.say(room, text);            
    text = "";
/////////////////////////////////////////////////////////////////////Draws Random Card For First Player
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD   
            var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

          if (playerdata[currentplayer] >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (playerdata[currentplayer] < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


             playerdata[currentplayer] += choosencard;

             if (playerdata[currentplayer] > 21){
             if (numofaces > 0){
             playerdata[currentplayer] -= 10;
             numofaces -= 1
             }}

    text = "";
    text += "You got a "+actualcard;
    this.say(room,"/pm " +joinusersid[currentplayer]+","+text); 
    this.say(room,"/pm " +joinusersid[currentplayer]+","+"Your Total = "+playerdata[currentplayer]);
    text = "";
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD   
              }.bind(this), 4000);
              }

 if (game == "ambush"){
               var i;
               for(i=0;i < joinusers.length; i+=1){
                playerdata[i] = 2;
               }
               started = true;
                text = "";
                text += "**The game of Ambush has started! (do -fire [user] when I say FIRE!)**";
	  	this.say(room, text);
                text = "";

                var starttimer = setTimeout(function(){
                for(i = 0; i < joinusers.length; i +=1){
                 if (i == joinusers.length-1){
                 text += joinusers[i]+"! Get ready!";
                 }
                 if (i == joinusers.length - 2){
                 text += joinusers[i]+" and ";
                 }
                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+",";
                 }
                }
                text = "**"+text+"**";
                this.say(room, text);
                text = "";

               checked = true;
               var delaytime = Math.round(Math.floor(Math.random() * (13000 -7000) + 7000));
               var firetimer = setTimeout(function(){
               text = "**FIRE!**";
                this.say(room, text);
                checked = false;
                text = "";; 
               }.bind(this), delaytime);  
      active = setInterval(function(){
                turnspassed +=1
               if (turnspassed < 3){
                var starttimer = setTimeout(function(){
                for(i = 0; i < joinusers.length; i +=1){
                 if (i == joinusers.length-1){
                 text += joinusers[i]+"! Get ready!";
                 }
                 if (i == joinusers.length - 2){
                 text += joinusers[i]+" and ";
                 }
                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+",";
                 }
                }
                text = "**"+text+"**";
                this.say(room, text);
                text = "";

               checked = true;
               var delaytime = Math.round(Math.floor(Math.random() * (13000 -7000) + 7000));
               var firetimer = setTimeout(function(){
               text = "**FIRE!**";
                this.say(room, text);
                checked = false;
                text = "";
                active;

               }.bind(this), delaytime);  

               }.bind(this), 4000);
                }else{

                text = "A Greninja came out of no where and use water shuriken on everyone. RIP!!! **The game has ended due to inactivity**";
                this.say(room, text);
                text = "";
                clearInterval(active);
                game = "none";
                started = false;
                requiredPlayers = 0;
                turnspassed = 0;

                }
               }.bind(this), 20000);

               }.bind(this), 4000);
              }
             

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

		this.say( room, 'Hosting a game of **Team Trivia**. Answer the questions using $tta or $teamtriviaanswer. First to get 10 points wins.');

		this.say( room, "Team Ash: "+textone);
		this.say( room, "Team Conbeef: "+texttwo);

		triviaTimer = setInterval( function() {
                        if(triviaA){this.say(room, '**Current answer is:** ' + triviaA);}
			var TQN = 2*(Math.floor(triviaQuestions.length*Math.random()/2))
			triviaQ = triviaQuestions[TQN];
			triviaA = triviaQuestions[TQN+ 1];
			this.say( room, '**Question**: ' + triviaQ); 
		}.bind(this), 15000);

              }

if (game == "oldrod"){

               started= true;

               text = "";
               text += "**The game of Old Rod has started! (do -reel when the fish bite!(! appears when there's a bite))**";
	       this.say(room, text);
               text = "";
               text += "**Warning: If you do -reel before '!' appears you'll -30 points! GLHF! ^-^**";
	       this.say(room, text);
               text = "";

               var i;
               for(i = 0; i < joinusers.length; i += 1){
               playerdata[i] = 0;
               safeusers[i] = 1;         
              }

               var starttimer = setTimeout(function(){

                for(i = 0; i < joinusers.length; i +=1){

                 if (i == joinusers.length-1){
                 text += joinusers[i]+"! Get ready to fish!";
                 }

                 if (i == joinusers.length - 2){
                 text += joinusers[i]+" and ";
                 }

                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+",";
                 }

                }
                text = "**"+text+"**";
                this.say(room,"Round "+rounds+"!"+ text);
                text = "";

               checked = true;
               dealerstotal = 0;
               var times = 0;
               var randpull = ["...","...","...","...","...","...","...","...","...","...","...","...","not even a nibble.","!","!","!"];
               var reeltimer = setTimeout(function(){
               
          active = setInterval(function(){

                times += 1;

                if (times < 2){
                this.say(room, "**...**");
                active;
                }

                if (times >= 3){
                 
                var rand = (Math.round(Math.random()*(randpull.length-1)));
                var pick = randpull[rand];
 
                if (pick == "..."){
                this.say(room, "**...**");
                randpull.splice(0,4)
                }

                if (pick == "!"){
                this.say(room, "**!**");
                clearInterval(active);
                checked = false;   
           
          active = setTimeout(function(){
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                text = "";
                text += "The Rod has broken. **Game ended due to inactivity.**";
                return this.say(room, text);
                }.bind(this), 60000);           

                }

                if (pick == "not even a nibble."){
                 this.say(room, "**not even a nibble.**");
                 clearInterval(active);
                    if (rounds < 10){
                    rounds += 1;



                   var starttimerr = setTimeout(function(){


                for(i = 0; i < joinusers.length; i +=1){

                 if (i == joinusers.length-1){
                 text += joinusers[i]+"("+playerdata[i]+")"+"! Get ready to fish!";
                 }

                 if (i == joinusers.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+" and ";
                 }

                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+",";
                 }

                }
                text = "**"+text+"**";
                this.say(room,"Round "+rounds+"!"+ text);
                text = "";

               checked = true;
               dealerstotal = 0;
               var times = 0;
               var randpull = ["...","...","...","...","...","...","...","...","...","...","...","...","!","!","!","!","!"];
               var reeltimer = setTimeout(function(){
               
          active = setInterval(function(){

                times += 1;

                if (times < 2){
                this.say(room, "**...**");
                active;
                }

                if (times >= 3){
                 
                var rand = (Math.round(Math.random()*(randpull.length-1)));
                var pick = randpull[rand];
 
                if (pick == "..."){
                this.say(room, "**...**");
                randpull.splice(0,4)
                }

                if (pick == "!"){
                this.say(room, "**!**");
                clearInterval(active);
                checked = false;   
           
          active = setTimeout(function(){
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                text = "";
                text += "The Rod has broken. **Game ended due to inactivity.**";
                return this.say(room, text);
                }.bind(this), 60000);           

                }
               
                }           

               }.bind(this), 1500);  
              
               }.bind(this), 4000);

               }.bind(this), 2000);



                   }


                 }
                }           

               }.bind(this), 1500);  
              
               }.bind(this), 4000);

               }.bind(this), 2000);

              }

            }else{
            text = "";
            text += "**This game requires at least** "+requiredPlayers+" **player(s).**";
            return this.say(room, text);
            }
           }else{
           text = "";
           text += "**No scripted game was created to start.**";
           return this.say(room, text);
           }
          }
         },

join: 'joingame',
'joingame': function (arg, user, room) {
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
                           return this.say(room, text);
                           text = "";
                                          }
                                     }
                joinusers[joinusers.length] = user; 
                joinusersid[joinusersid.length] = userid;
                text += user + " has joined!";
	  	this.say(room, text);
                text = ""
              }else{
              for(i = 0; i < joinusers.length; i++){
                 checkjoin = joinusersid[i]
                 if (checkjoin == userid){
                           text += user+" has already joined!"
                           return this.say(room, text);
                           text = "";
                                          }
                                     }
              text += "Sorry "+user+". The maximum amount of players has been reached."
              return this.say(room, text);
             }
         },


leave: 'leavegame',
'leavegame': function (arg, user, room) {
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
                           return this.say(room, text);
                           text = "";
                           break;     
                }}           
         },

///////////////////////////////////////////Scripted Game Setup//////////////////////////////////////////////////////////////

//////////////Black Jack///////////////////

'hit': function (arg, user, room) {
		if (room === user) return false;
                var userid = toId(user);
		var text = "";
                if (user == joinusers[currentplayer] || userid == joinusersid[currentplayer]){
                if (game == "blackjack"){
                if (started == true) {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////HIT
            var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

          if (playerdata[currentplayer] >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (playerdata[currentplayer] < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


           playerdata[currentplayer] += choosencard;

             if (playerdata[currentplayer] > 21){
             if (numofaces > 0){
             playerdata[currentplayer] -= 10;
             numofaces -= 1
             }}
    text += "You got a "+actualcard;
    this.say(room,"/pm " +joinusersid[currentplayer]+","+text); 
    this.say(room,"/pm " +joinusersid[currentplayer]+","+"Your Total = "+playerdata[currentplayer]);
    text = "";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////HIT


        if (playerdata[currentplayer] > 21){
             if (numofaces <= 0){
        text = "";
        text += joinusers[currentplayer] + " has busted with " + playerdata[currentplayer] + "!";
        this.say(room, text); 
        text = "";
        currentplayer += 1;

        if (currentplayer == joinusers.length){
            text = ""
            text += "**Everyone has finished. Its the dealers turn. Calculating......**"
            this.say(room, text)
            text = "";
          }   

        if (currentplayer < joinusers.length){

        var hittimer = setTimeout(function(){
  /////////////////////////////////////////////////////////////////////Draws Random Card For First Player/
          var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);


          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }

    playerdata[currentplayer] = choosencard;
    text += joinusers[currentplayer] + "'s top card is "+actualcard;
    this.say(room, text); 
    text = "";

    text += joinusers[currentplayer] + " -hit or -stay";
    this.say(room, text);            
    text = "";
/////////////////////////////////////////////////////////////////////Draws Random Card For First Player
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD   
            var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

          if (playerdata[currentplayer] >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (playerdata[currentplayer] < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


             playerdata[currentplayer] += choosencard;

             if (playerdata[currentplayer] > 21){
             if (numofaces > 0){
             playerdata[currentplayer] -= 10;
             numofaces -= 1
             }}

    text = "";
    text += "You got a "+actualcard;
    this.say(room,"/pm " +joinusersid[currentplayer]+","+text); 
    this.say(room,"/pm " +joinusersid[currentplayer]+","+"Your Total = "+playerdata[currentplayer]);
    text = "";
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD   
        }.bind(this), 3000);
        }
       else{// if currentplayer is greater than or equal to the length of users
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (currentplayer == joinusers.length){
         var i;
         for(i=0; i < 5; i += 1){

          if (dealerstotal <= 14){  

            var rand = ~~(cards.length * Math.random());
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

         if (dealerstotal >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (dealerstotal < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
        }
 

           dealerstotal += choosencard;

             if (dealerstotal > 21){
             if (numofaces > 0){
             dealerstotal -= 10;
             numofaces -= 1
             }}
           }else{
           break;
          }
        }
         

        if (dealerstotal > 14 && dealerstotal <= 21){
        var mytimer = setTimeout(function(){
        text += "The dealer has got the total of " +"**"+dealerstotal+"**" + ". Calculating winners....";
        this.say(room, text);
        text = "";
        }.bind(this), 3000);


        var mytimer = setTimeout(function(){
        var i;
        var counter = 0;
        var winners = [];
        text += "Congratulations to our winner(s) "
        for(i = 0; i < joinusers.length; i++){
        if (playerdata[i] >= dealerstotal && playerdata[i] <= 21){
        winners[winners.length] = joinusers[i];
        counter += 1
        }}

        if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room, text+"!");
        game = "none";
        started = false; 
        }
        if (counter <=0){

        this.say(room, "**Sorry there are no winners :C**");
        game = "none";
        started = false; 
        }

         }.bind(this), 6000);
         }


        if (dealerstotal > 21){
        var mytimer = setTimeout(function(){
        text += "The dealer has busted with a total of " +"**"+dealerstotal+"**" + ". Calculating winners....";
        this.say(room, text);
        text = "";
        dealerstotal = 0;
         }.bind(this), 3000);
         

        var mytimer = setTimeout(function(){
        var i;
        var counter = 0;
        var winners = [];
        text += "Congratulations to our winner(s) "
        for(i = 0; i < joinusers.length; i++){
        if (playerdata[i] >= dealerstotal && playerdata[i] <= 21){
        winners[winners.length] = joinusers[i];
        counter += 1
        }}

        if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room, text+"!");
        game = "none";
        started = false; 
        }

        if (counter <=0){

        this.say(room, "**Sorry there are no winners :C**");
        game = "none";
        started = false;       
        }
         }.bind(this), 6000);
        }}
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }

        }}
      }}}

},

'stay': function (arg, user, room) {
		if (room === user) return false;
		var text = "";
                var userid = toId(user);
                var delay = 2000;
                if (user == joinusers[currentplayer] || userid == joinusersid[currentplayer]){
                if (game == "blackjack"){
                if (started == true) {
           
          if (playerdata[currentplayer] == 21){
          text += joinusers[currentplayer]+ " has got Blackjack."
          this.say(room, text);            
          text = "";
          }


          currentplayer += 1;
    
          if (currentplayer == joinusers.length){
            text = ""
            text += "**Everyone has finished. Its the dealers turn. Calculating......**"
            this.say(room, text);
            text = "";
          }   


          if (currentplayer < joinusers.length){

          var staytimer = setTimeout(function(){
  /////////////////////////////////////////////////////////////////////Draws Random Card For First Player/
          var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);


          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }

    playerdata[currentplayer] = choosencard;
    text += joinusers[currentplayer] + "'s top card is "+actualcard;
    this.say(room, text); 
    text = "";

    text += joinusers[currentplayer] + " -hit or -stay";
    this.say(room, text);            
    text = "";
/////////////////////////////////////////////////////////////////////Draws Random Card For First Player
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD   
            var rand = (Math.round(Math.random()*(cards.length-1)));
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

          if (playerdata[currentplayer] >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (playerdata[currentplayer] < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


             playerdata[currentplayer] += choosencard;

             if (playerdata[currentplayer] > 21){
             if (numofaces > 0){
             playerdata[currentplayer] -= 10;
             numofaces -= 1
             }}

    text = "";
    text += "You got a "+actualcard;
    this.say(room,"/pm " +joinusersid[currentplayer]+","+text); 
    return this.say(room,"/pm " +joinusersid[currentplayer]+","+"Your Total = "+playerdata[currentplayer]);
    text = "";
/////////////////////////////////////////////////////////////////////////////////////PM RANDOM CARD 
       }.bind(this), 3000);  
        } 
        else{ // if currentplayer is greater than or equal to the length of users

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (currentplayer == joinusers.length){
         var i;
         for(i=0; i < 5; i += 1){

          if (dealerstotal <= 14){  

            var rand = ~~(cards.length * Math.random());
            var choosencard = cards[rand];
            var actualcard = choosencard;
            cards.splice(rand,1);

         if (dealerstotal >= 11){

          switch(choosencard){
          case "A":
                   choosencard = 1;
                   actualcard += "(1)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
       }


          if (dealerstotal < 11){

          switch(choosencard){
          case "A":
                   numofaces += 1;
                   choosencard = 11;
                   actualcard += "(11)";
                   break;
          
          case "J":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "Q":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;

          case "K":
                   choosencard = 10;
                   actualcard += "(10)";
                   break;
          }
        }
 

           dealerstotal += choosencard;

             if (dealerstotal > 21){
             if (numofaces > 0){
             dealerstotal -= 10;
             numofaces -= 1
             }}
           }else{
           break;
          }
        }
         

        if (dealerstotal > 14 && dealerstotal <= 21){
        var mytimer = setTimeout(function(){
        text += "The dealer has got the total of " +"**"+dealerstotal+"**" + ". Calculating winners....";
        this.say(room, text);
        text = "";
        }.bind(this), 3000);


        var mytimer = setTimeout(function(){
        var i;
        var counter = 0;
        var winners = [];
        text += "Congratulations to our winner(s) "
        for(i = 0; i < joinusers.length; i++){
        if (playerdata[i] >= dealerstotal && playerdata[i] <= 21){
        winners[winners.length] = joinusers[i];
        counter += 1
        }}

        if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room, text+"!");
        game = "none";
        started = false; 
        }
        if (counter <=0){

        this.say(room, "**Sorry there are no winners :C**");
        game = "none";
        started = false; 
        }

         }.bind(this), 6000);
         }


        if (dealerstotal > 21){
        var mytimer = setTimeout(function(){
        text += "The dealer has busted with a total of " +"**"+dealerstotal+"**" + ". Calculating winners....";
        this.say(room, text);
        text = "";
        dealerstotal = 0;
         }.bind(this), 3000);
         

        var mytimer = setTimeout(function(){
        var i;
        var counter = 0;
        var winners = [];
        text += "Congratulations to our winner(s) "
        for(i = 0; i < joinusers.length; i++){
        if (playerdata[i] >= dealerstotal && playerdata[i] <= 21){
        winners[winners.length] = joinusers[i];
        counter += 1
        }}

        if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room, text+"!");
        game = "none";
        started = false; 
        }

        if (counter <=0){

        this.say(room, "**Sorry there are no winners :C**");
        game = "none";
        started = false;       
        }
         }.bind(this), 6000);
        }}
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

       }

}}}

},
//////////////Black Jack///////////////////
//////////////Ambush///////////////////////
kill: 'fire',
'fire': function (arg, user, room) {
		if (room === user) return false;
                if (game != "ambush") return false;
                if (started == false) return false;
                var userid = toId(user);
		var text = "";
                var userin = false;
                var i;
                var bullets;
                var playerid;
                for(i = 0; i< joinusers.length; i+=1){
                 if (user == joinusers[i] || userid == joinusersid[i]){
                 userin = true;
                 bullets = playerdata[i];
                 playerid = i;
                 break;
                 }
                }
                if (userin == true){
                if (checked == true){

                if (bullets > 0){
                playerdata[playerid] -= 1;
                }}else{
                 var usershotin;
                 var usertokill;
                 for(i = 0; i< joinusers.length; i+=1){
                 if (arg.toLowerCase() == joinusers[i].toLowerCase() || arg.toLowerCase() == joinusersid[i].toLowerCase()){
                  usershotin = true;
                  usertokill = i;
                  break;
                  }
                 }
                if (usershotin == true){
                 if (bullets > 0){
                  var safe = false;
                  for(i = 0; i < safeusers.length;i += 2){
                  if (arg.toLowerCase() == safeusers[i].toLowerCase() || arg.toLowerCase() == safeusers[i+1].toLowerCase()){
                  safe = true;
                  }}
                  clearInterval(active);
                  turnspassed = 0;
                  if (safe == false){
                  joinusers.splice(usertokill,1);
                  joinusersid.splice(usertokill,1);
                  safeusers[safeusers.length] = user;
                  safeusers[safeusers.length] = userid;
                  text += "/pm " + arg+",Sorry you lost. Better luck next time. ( ͡° ͜ʖ ͡°)";
                  this.say(room, text);
                  text = "";
                  }
                 }else{return false;}
                   
                   if (joinusers.length <= 1){
                     clearInterval(active);
                     text += "Congratulations to our winner "+joinusers[0]+"!";
                     this.say(room, text);
                     text = "";
                     game = "none";
                     started = false;
                     requiredPlayers = 0;
                    }
                    else{
                       var i;
               for(i=0;i < joinusers.length; i+=1){
                playerdata[i] = 2;
               }
     
                clearTimeout(starttimer);
                starttimer = setTimeout(function(){
                for(i = 0; i < joinusers.length; i +=1){
                 if (i == joinusers.length-1){
                 text += joinusers[i]+"! Get ready!";
                 }
                 if (i == joinusers.length - 2){
                 text += joinusers[i]+" and ";
                 }
                 if (i != joinusers.length -1 && i != joinusers.length - 2){
                 text += joinusers[i]+",";
                 }
                }
                text = "**"+text+"**";
                this.say(room, text);
                text = "";

               checked = true;
               safeusers = [];
               var delaytime = Math.round(Math.floor(Math.random() * (13000 -7000) + 7000));
               clearTimeout(firetimer);
               firetimer = setTimeout(function(){
               text = "**FIRE!**";
                this.say(room, text);
                checked = false;
                text = "";; 
               }.bind(this), delaytime);
               
  
      active = setInterval(function(){
                turnspassed +=1
               if (turnspassed < 3){
                text = "";
                var starttimer = setTimeout(function(){
                for(i = 0; i < joinusers.length; i +=1){
                 if (i == joinusers.length-1){
                 text += joinusers[i]+"! Get ready!";
                 }
                 if (i == joinusers.length - 2){
                 text += joinusers[i]+" and ";
                 }
                 if (i != joinusers.length -1 && i != joinusers.length - 2){
                 text += joinusers[i]+",";
                 }
                }
                text = "**"+text+"**";
                this.say(room, text);
                text = "";
                


               checked = true;
               safeusers = [];
               var delaytime = Math.round(Math.floor(Math.random() * (13000 -7000) + 7000));
               var firetimer = setTimeout(function(){
               text = "**FIRE!**";
                this.say(room, text);
                checked = false;
                text = "";
                //clearInterval(active);
                active;

               }.bind(this), delaytime); 

               }.bind(this), 4000);
                }else{

                text = "A Greninja came out of no where and use water shuriken on everyone. RIP!!! **The game has ended due to inactivity**";
                this.say(room, text);
                text = "";
                clearInterval(active);
                game = "none";
                started = false;
                requiredPlayers = 0;
                turnspassed = 0;

                }
               }.bind(this), 20000);

               }.bind(this), 4000);
                    }
                 }else{
                  return false;
                 }
                }
              }
            },
//////////////Ambush///////////////////////
//////////////Team Trivia/////////////////
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
					this.say( room, '**Congrats to ' + theuser + ' for winning Trivia!**');
					this.say(room,'/pm '+ user + ' ,**Congratulations** on winning the game of Team Trivia.')
					//this.say(room,'/msg lustrousash,' + user + ' have been awarded **2 Points** for winning trivia')
					triviaON = false; 
                                        game = "none";
                                        started = false;
                                        requiredPlayers = 0;
					return false;
				}
				this.say(room,'**' + user + '** got the right answer,' +"**"+theuser+"**"+ ' has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoints!');
			} else {
				triviaA = '';
				triviaPoints[triviaPoints.length] = theuser;
				triviaPoints[triviaPoints.length] = 1;
				this.say(room,'**' + user + '** got the right answer,' +"**"+theuser+"**"+ ' has **' + triviaPoints[triviaPoints.indexOf(theuser) + 1] + '** Triviapoint!');
			}
		}
	},
////////////////Team Trivia///////////////

  showsprite: function(arg, by, room) {
       		if (!this.hasRank(by, '+%@&#~') || room.charAt(0) === ',') return false;
       			this.say(room, "/declare <img src= " + arg);
       },

////////////////Old Rod//////////////////
'reel': function (arg, user, room) {
		if (room === user) return false;
                if (game != "oldrod") return false;
                if (started == false) return false;
                if (dealerstotal == 1) return false;
		var text = "";
                var userin = false;
                var i;
                var playerid;
                var userid = toId(user);
                for(i = 0; i< joinusers.length; i+=1){
                 if (user == joinusers[i] || userid == joinusersid[i]){
                 userin = true;
                 playerid = i;
                 break;
                 }
                }

             if (userin == false){return false;}else{
                 if (checked == true){
                   safeusers[i] = 0;
                   return playerdata[playerid] -= 30;
                  /*if (playerdata[playerid] != 0){
                   if (playerdata[playerid] >= 30){
                   safeusers[i] = 0;
                   return playerdata[playerid] -= 30;
                   }else{
                    safeusers[playerid] = 0;
                    playerdata[playerid] = 0;
                   }
                  }*/
                 }else{


                if (safeusers[playerid] == 1){
                dealerstotal = 1;
                checked = true;
                var randd = Math.round((Math.random()*(waterpoke.length-1-0)+0)/2)*2;
                var chosenpoke = waterpoke[randd]
                var addpoints = waterpoke[randd+1]

                playerdata[playerid] += addpoints;  
                text = joinusers[playerid] + " caught a "+chosenpoke+"(" +addpoints+").";
                this.say(room, text);
                text = "";

                }

                rounds += 1;
                clearTimeout(active); 
             for(i = 0; i < joinusers.length; i +=1){
                  safeusers[i] = 1;
                 }

             if (rounds != 10){


                 var starttimer = setTimeout(function(){

                for(i = 0; i < joinusers.length; i +=1){

                 if (i == joinusers.length-1){
                 text += joinusers[i]+"("+playerdata[i]+")"+"! Get ready to fish!";
                 }

                 if (i == joinusers.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+" and ";
                 }

                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+",";
                 }

                }
                text = "**"+text+"**";
                this.say(room,"Round "+rounds+"!"+ text);
                text = "";

               checked = true;
               dealerstotal = 0;
               var times = 0;
               var randpull = ["...","...","...","...","...","...","...","...","...","...","...","...","not even a nibble.","!","!","!"];
               var reeltimer = setTimeout(function(){
               
          active = setInterval(function(){

                times += 1;

                if (times < 2){
                this.say(room, "**...**");
                active;
                }

                if (times >= 3){
                 
                var rand = (Math.round(Math.random()*(randpull.length-1)));
                var pick = randpull[rand];
 
                if (pick == "..."){
                this.say(room, "**...**");
                randpull.splice(0,4)
                }

                if (pick == "!"){
                this.say(room, "**!**");
                clearInterval(active);
                checked = false;   
           
          active = setTimeout(function(){
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                text = "";
                text += "The Rod has broken. **Game ended due to inactivity.**";
                return this.say(room, text);
                }.bind(this), 60000);           

                }

                if (pick == "not even a nibble."){
                 this.say(room, "**not even a nibble.**");

                 rounds += 1;
                clearTimeout(active); 
             for(i = 0; i < joinusers.length; i +=1){
                  safeusers[i] = 1;
                 }

                    if (rounds < 10){


                   var starttimerr = setTimeout(function(){


                for(i = 0; i < joinusers.length; i +=1){

                 if (i == joinusers.length-1){
                 text += joinusers[i]+"("+playerdata[i]+")"+"! Get ready to fish!";
                 }

                 if (i == joinusers.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+" and ";
                 }

                 if (i != joinusers.length -1 && i != playerdata.length - 2){
                 text += joinusers[i]+"("+playerdata[i]+")"+",";
                 }

                }
                text = "**"+text+"**";
                this.say(room,"Round "+rounds+"!"+ text);
                text = "";

               checked = true;
               dealerstotal = 0;
               var times = 0;
               var randpull = ["...","...","...","...","...","...","...","...","...","...","...","...","!","!","!","!","!"];
               var reeltimer = setTimeout(function(){
               
          active = setInterval(function(){

                times += 1;

                if (times < 2){
                this.say(room, "**...**");
                active;
                }

                if (times >= 3){
                 
                var rand = (Math.round(Math.random()*(randpull.length-1)));
                var pick = randpull[rand];
 
                if (pick == "..."){
                this.say(room, "**...**");
                randpull.splice(0,4)
                }

                if (pick == "!"){
                this.say(room, "**!**");
                clearInterval(active);
                checked = false;   
           
          active = setTimeout(function(){
                game = "none";
                started = false;
                requiredPlayers = 0;
                clearInterval(active);
                text = "";
                text += "The Rod has broken. **Game ended due to inactivity.**";
                return this.say(room, text);
                }.bind(this), 60000);           

                }
               
                }           

               }.bind(this), 1500);  
              
               }.bind(this), 4000);

               }.bind(this), 2000);

            
            
                   }else{
                   var maxtotal = 0;
            var winners = [];

            for(i = 0;i < joinusers.length; i+= 1){

              if (maxtotal < playerdata[i]){
               maxtotal = playerdata[i];
               winners = [];
              }

              if (maxtotal == playerdata[i]){
               winners[winners.length] = joinusers[i]
              }

             }

            if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room,"Congrats to our winner(s) "+ text+"!");
        game = "none";
        started = false; 
        }else{

        this.say(room,"Sorry there are no winners. :c");
        game = "none";
        started = false; 

        }
                  }   
              }
             }
            
        

               }.bind(this), 1500);  
              
               }.bind(this), 4000);

               }.bind(this), 2000);


            }else{

            var maxtotal = 0;
            var winners = [];

            for(i = 0;i < joinusers.length; i+= 1){

              if (maxtotal < playerdata[i]){
               maxtotal = playerdata[i];
               winners = [];
              }

              if (maxtotal == playerdata[i]){
               winners[winners.length] = joinusers[i]
              }

             }

            if (winners.length > 0){
         var i;
         for(i = 0;i < winners.length; i += 1){
         if (i != winners.length-1){
         text += winners[i]+","
         }else{
         text += winners[i]
          }
         }
 
        this.say(room,"Congrats to our winner(s) "+ text+"!");
        game = "none";
        started = false; 
        }else{

        this.say(room,"Sorry there are no winners. :c");
        game = "none";
        started = false; 

        }}             

               }}
       },

};
