var plr=document.getElementById('plr');
var bgr=document.getElementById('bgr');
var npc=document.getElementById('npc');
var intText=document.getElementById('intText')

var plrLeft = 400;
var plrTop = 400;

var npcLeft = 450;
var npcTop = 300;


var countMoves = 0;

var map = 11;

function anim(e){


	/*
	-------------------------------------
	MOVEMENT
	-------------------------------------
	*/

	if (e.keyCode==39) {
		plrLeft +=5;
		plr.style.left = plrLeft + 'px';
		if (countMoves < 5) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveRight2.png';
		}
		else if (countMoves > 5 && countMoves < 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveRight1.png';
		}
		else if (countMoves == 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveRight3.png';
			countMoves=0;
		}
		countMoves++;

	}
	else if (e.keyCode==37) {
		plrLeft -=5;
		plr.style.left = plrLeft + 'px';
		if (countMoves < 5) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveLeft2.png';
		}
		else if (countMoves > 5 && countMoves < 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveLeft1.png';
		}
		else if (countMoves == 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveLeft3.png';
			countMoves=0;
		}
		countMoves++;
	}
	else if (e.keyCode==40) {
		plrTop +=5;
		plr.style.top = plrTop + 'px';
		if (countMoves < 5) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveFront2.png';
		}
		else if (countMoves > 5 && countMoves < 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveFront1.png';
		}
		else if (countMoves == 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveFront3.png';
			countMoves=0;
		}
		countMoves++;
	}
	else if (e.keyCode==38) {
		plrTop -=5;
		plr.style.top = plrTop + 'px';
		if (countMoves < 5) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack2.png';
		}
		else if (countMoves > 5 && countMoves < 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack1.png';
		}
		else if (countMoves == 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack3.png';
			countMoves=0;
		}
		countMoves++;

	}


	/*
	------------------------------------------------
	INTERACT
	------------------------------------------------
	*/

	else if (e.keyCode==13 && map == 11 && plrLeft >= 400 && plrLeft <= 500 && plrTop >= 250 && plrTop <= 350) {
		alert('Hello');
	}

	/* 
	------------------------------------------------
	CHANGE MAP
	------------------------------------------------
	*/



	// If The player is on map 1_1
if (map == 11) {
	if (plrLeft >= 940) {

		bgr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/Map/2_1.png';
		npc.style.display = 'none';

		plrLeft = 0;
		map = 21;
	}
	else if (plrLeft < 0) {

		bgr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/Map/0_1.png';
		npc.style.display = 'none';
		plrLeft=920;
		map = 1;
	}
}	

	//STOP




	// If The player is on map 0_1
if (map == 1) {
	if (plrLeft >= 940) {

		bgr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/Map/1_1.png';
		npc.style.display = 'inline';

		plrLeft = 0;
		map = 11;
	}
	else if (plrLeft <= 282) {
		plrLeft = 282;
	}
}

	//STOP


	// If The player is on map 2_1
if (map == 21) {
	if (plrTop == 0) {

		bgr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/Map/2_0.png';
		bgr.style.height= '640px';
		bgr.style.width= '960px';

		npc.style.display = 'none';

		plrTop = 620;
		map = 21;
	}
	else if (plrTop >= 620) {

		bgr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/Map/2_2.png';
		npc.style.display = 'none';
		plrTop=0;
		map = 21;
	}
}	

	//STOP

}

document.onkeydown = anim;