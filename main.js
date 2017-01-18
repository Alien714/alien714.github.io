var coins = 0;
var clickMod = 1;
var cursors = 0;
var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));

function coinClick(number) {
	coins = coins + number;
	document.getElementById("coins").innerHTML = coins;
}

function buyCursor() {
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
	if(coins >= cursorCost) {
		cursors = cursors + 1;
		coins = coins - cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('coins').innerHTML = coins;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
	document.getElementById('cursorCost').innerHTML = nextCost;
	var cursorCost = nextCost;
	console.log(cursorCost);
};

function roundNumbers(input) {
	var output = Math.round(input * 1000)/1000;
		return output;
}

function save() {
	var save = {
		coins: coins,
		cursors: cursors
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.coins !== "undefined") coins = savegame.coins;
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
		document.getElementById('cursors').innerHTML = cursors;
}

function deleteSave() {
	localStorage.removeItem("save");
}
 
window.setInterval(function() {
	coinClick(cursors);
}, 1000);