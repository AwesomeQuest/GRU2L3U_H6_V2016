var plr=document.getElementById('plr');

var plrLeft = 400;
var plrTop = 400;

var countMoves = 0;

function anim(e){

	if (e.keyCode==39) {
		plrLeft +=5;
		plr.style.left = plrLeft + 'px';
		if (countMoves == 0) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveRight2.png';
		}
		else if (countMoves == 5) {
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
		if (countMoves == 0) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveLeft2.png';
		}
		else if (countMoves == 5) {
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
		if (countMoves == 0) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveFront2.png';
		}
		else if (countMoves == 5) {
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
		if (countMoves == 0) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack2.png';
		}
		else if (countMoves == 5) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack1.png';
		}
		else if (countMoves == 10) {
			plr.src='C:/Users/torfi/Documents/GitHub/GRU2L3U_H6_V2016/Things/MainCharMoveBack3.png';
			countMoves=0;
		}
		countMoves++;

	}
}

document.onkeydown = anim;