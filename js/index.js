var topNum = 150;
var leftNum = 150;

document.getElementById("up").onclick = goUp;
document.getElementById("left").onclick = goLeft;
document.getElementById("right").onclick = goRight;
document.getElementById("down").onclick = goDown;

function goUp(){
//move player up
//subtract from top position value in css
  // need numbers
topNum = topNum - 5;
//reminder: modify top value
document.getElementById("playerOne").style.top = topNum+"px";
}

function goLeft(){
//move player left
//subtract from left position value in css
  // need numbers
leftNum = leftNum - 5;
//reminder: modify left value
document.getElementById("playerOne").style.left = leftNum+"px";
}


function goRight(){
//move player right
//add to left position value in css
  // need numbers
leftNum = leftNum + 5;
//reminder: modify left value (add)
document.getElementById("playerOne").style.left = leftNum+"px";

}

function goDown(){
//move player down
//add to top position value in css
  // need numbers
topNum = topNum + 5;
//reminder: modify left value
document.getElementById("playerOne").style.top = topNum+"px";
}
