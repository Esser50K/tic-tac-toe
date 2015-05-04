//comments and more comments
window.addEventListener("load", function () {	
	var eachSquare = document.querySelectorAll(".cell");
	for (i=0; i < eachSquare.length; i++) {
		eachSquare[i].addEventListener("click", newMark);
	}

var turn = "X";
function newMark(click) {
	if (turn === "X") {
		this.innerHTML = "X";
		this.style.color = "purple";
		turn = "O";
		alert("Your turn O");
	}
	else {
		this.innerHTML = "O";
		this.style.color = "orange";
		turn = "X";
		alert("Your turn X");
	}
}


document.getElementById("Button").addEventListener("click", clearBoard);
function clearBoard() {
	var newBoard = document.querySelectorAll('#board');
	for (i=0; i < newBoard.length; i++) {
		newBoard[i].style.width = '31em';
		newBoard[i].style.height = '30em';
		newBoard[i].style.position = 'relative';
		newBoard[i].style.top = '30px';
		newBoard[i].style.left = '10%';
		newBoard[i].style.color = "aqua";
	var topleft = document.querySelector("#topleft");
	topleft.innerHTML = "1";
	topleft.style.color = "aqua";
	var topCenter = document.querySelector("#topcenter");
	topCenter.innerHTML = "2";
	topCenter.style.color = "aqua";	
	var topRight = document.querySelector("#topright");
	topRight.innerHTML = "3";
	topRight.style.color = "aqua";
	var midLeft = document.querySelector("#midleft");
	midLeft.innerHTML = "4";
	midLeft.style.color = "aqua";
	var midCenter = document.querySelector("#midcenter");
	midCenter.innerHTML = "5";
	midCenter.style.color = "aqua";
	var midRight = document.querySelector("#midright");
	midRight.innerHTML = "6";
	midRight.style.color = "aqua";
	var bottomLeft = document.querySelector("#bottomleft");
	bottomLeft.innerHTML = "7";
	bottomLeft.style.color = "aqua";
	var bottomCenter = document.querySelector("#bottomcenter");
	bottomCenter.innerHTML = "8";
	bottomCenter.style.color = "aqua";
	var bottomRight = document.querySelector("#bottomright");
	bottomRight.innerHTML = "9";
	bottomRight.style.color = "aqua";
		}		
	}
// var random1 = document.querySelector("#topleft");
// var random2 = document.querySelector("#topcenter");
// var random3 = document.querySelector("#topright");
// var random4 = document.querySelector("#midleft");
// var random5 = document.querySelector("#midcenter");
// var random6 = document.querySelector("#midright");
// var random7 = document.querySelector("#bottomleft");
// var random8 = document.querySelector("#bottomcenter");
// var random9 = document.querySelector("#bottomright");

// if (random1.textContent === "X" && random2.textContent === "X" && random3.textContent === "X") {
// 	alert("X is the winner!");
// }
// else if (random4.textContent === "X" && random5.textContent === "X" && random6.textContent === "X") {
// 	alert("X is the winner!");
// }
// else if (random7.textContent === "X" && random8.textContent === "X" && random9.textContent === "X") {
// 	alert("X is the winner!");
// }
// else if (random1.textContent === "O" && random2.textContent === "O" && random3.textContent === "O") {
// 	alert("O is the winner!");
// }
// else if (random7.textContent === "X" && random8.textContent === "X" && random9.textContent === "X") {
// 	alert("O is the winner!");
// }

});	


// var one = document.getElementById("#topleft");
// var two = document.getElementById("topcenter");
// var three = document.getElementById("topright");
// var winner = function () {
// 	if (one.textContent === "X" && two.textContent === "X" && three.textContent === "X") {
// 		alert("X wins");
// 	}
// }	
