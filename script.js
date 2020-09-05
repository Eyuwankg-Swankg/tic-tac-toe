//starter variables
var xo = "X";
var count = 0;
var flag = "p";
var xo_array = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],
];
var game_ends = true;

//geting user names
var player1 = "";
var player2 = "";
while (player1 == undefined || player1 == null || player1 == "")
  player1 = prompt("Enter Player 1 Name:");
while (player2 == undefined || player2 == null || player2 == "")
  player2 = prompt("Enter Player 2 Name:");

let name = document.getElementById("player");

name.innerHTML = player1 + "(X) vs " + player2 + "(O)";

//function for x,o buttons
function game(element, x, y) {
  if (xo_array[x][y] == "0" && game_ends) {
    element.innerHTML = xo;
    xo_array[x][y] = xo;
    console.log(xo_array[0], xo_array[1], xo_array[2]);
    count++;
    if (count > 2) flag = end();
    if (flag == "X") {
      name.innerHTML = `${player1} Wins!!!`;
      game_ends = false;
    }
    if (flag == "O") {
      name.innerHTML = `${player2} Wins!!!`;
      game_ends = false;
    }
    if (game_ends && count == 9) {
      name.innerHTML = "Draw!!!";
      game_ends = false;
    }
    if (xo == "X") xo = "O";
    else xo = "X";
  }
}

//to check for end of the game
function end() {
  // 1st row
  if (
    xo_array[0][0] != "0" &&
    xo_array[0][0] == xo_array[0][1] &&
    xo_array[0][1] == xo_array[0][2]
  )
    return xo_array[0][0];
  // 1st column
  else if (
    xo_array[0][0] != "0" &&
    xo_array[0][0] == xo_array[1][0] &&
    xo_array[1][0] == xo_array[2][0]
  )
    return xo_array[0][0];
  // main diagonal
  else if (
    xo_array[0][0] != "0" &&
    xo_array[0][0] == xo_array[1][1] &&
    xo_array[1][1] == xo_array[2][2]
  )
    return xo_array[0][0];
  // 3rd column
  else if (
    xo_array[0][2] != "0" &&
    xo_array[0][2] == xo_array[1][2] &&
    xo_array[1][2] == xo_array[2][2]
  )
    return xo_array[0][2];
  // opposite diagonal
  else if (
    xo_array[0][2] != "0" &&
    xo_array[0][2] == xo_array[1][1] &&
    xo_array[1][1] == xo_array[2][0]
  )
    return xo_array[0][2];
  // 3rd row
  else if (
    xo_array[2][0] != "0" &&
    xo_array[2][0] == xo_array[2][1] &&
    xo_array[2][1] == xo_array[2][2]
  )
    return xo_array[2][0];
  // 2nd row
  else if (
    xo_array[1][1] != "0" &&
    xo_array[1][1] == xo_array[1][0] &&
    xo_array[1][0] == xo_array[1][2]
  )
    return xo_array[1][1];
  // 2nd column
  else if (
    xo_array[1][1] != "0" &&
    xo_array[1][1] == xo_array[0][1] &&
    xo_array[0][1] == xo_array[2][1]
  )
    return xo_array[1][1];
  // if nothing matches
  else return null;
}

// Refresh the page
function reload() {
  location.reload();
}
