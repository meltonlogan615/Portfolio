// define ball
// define playerLeftPaddle
// define playerRightPaddle
// define score
// define volleys.
// incrementally increase speed per volley

// draw dashedLine down center
// mechanics for moving paddles up and down (AZ for left, UpDown for Right)
// if ball hits top or bottom of canvas, bounces
// if ball hits left or right of canvas, opposite side score++
var canvas = document.getElementById("pongCanvas");
var ctx = canvas.getContext("2d");
var paddleWidth = 10;
var paddleHeight = 100;
var paddleLeft = (canvas.height - paddleHeight) / 2;
var paddleRight = (canvas.height - paddleHeight) / 2;
var paddleLeftLeading = 10;
var paddleRightTrailing = canvas.width-20;
var ballSize = 20;
var ballPositionY = canvas.height / 2;
var ballPositionX = 20;
var centerWidth = canvas.width / 2;
var dx = 2;
var dy = -2;
var playerScoreLeft = 0;
var playerScoreRight = 0;
var aKeyPressed = false;
var zKeyPressed = false;
var pKeyPressed = false;
var lKeyPressed = false;
var fiveKeyPressed = false;

function drawCenterLine() {
  ctx.beginPath();
  ctx.rect(centerWidth, 0, 10, canvas.height);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath()
}

function leftPlayerScore() {
  ctx.font = "20px Courier";
  ctx.fillStyle = "white";
  ctx.fillText("Score: "+playerScoreLeft, 8, 20)
}

function rightPlayerScore() {
  ctx.font = "20px Courier";
  ctx.fillStyle = "white";
  ctx.fillText("Score: "+playerScoreRight, canvas.width - 120, 20);
}

function drawPlayerLeftPaddle() {
  ctx.beginPath();
  ctx.rect(paddleLeftLeading, paddleLeft, paddleWidth, paddleHeight);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}
function drawPlayerRightPaddle() {
  ctx.beginPath();
  ctx.rect(paddleRightTrailing, paddleRight, paddleWidth, paddleHeight);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
  ctx.beginPath();
  ctx.rect(ballPositionX, ballPositionY, ballSize, ballSize);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function tableTop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCenterLine();
  drawPlayerLeftPaddle();
  drawPlayerRightPaddle();
  drawBall();
  rightPlayerScore();
  leftPlayerScore();

  ballPositionX += dx;
  ballPositionY += dy;

  // Bounces of the top and bottom
  if (ballPositionY > canvas.height-ballSize || ballPositionY < 0) {
    dy = -dy;
  } 

  // Paddle Mechanisms
  if (ballPositionX < paddleLeftLeading) {
    if (ballPositionY - ballSize > paddleLeft - 30 && ballPositionY < paddleLeft + paddleHeight) {
      dx = -dx;
    } else {
      playerScoreRight += 1
      paddleLeft = (canvas.height - paddleHeight) / 2;
      paddleRight = (canvas.height - paddleHeight) / 2;
      dx = 2;
      dy = -2;
      ballPositionX = 20;
      ballPositionY = canvas.height / 2;
    }
  } else if (ballPositionX == canvas.width - ballSize*1.5) {
    if (ballPositionY - ballSize > paddleRight - 30 && ballPositionY < paddleRight + paddleHeight) {
      dx = -dx;
    } else {
      playerScoreLeft += 1
      paddleLeft = (canvas.height - paddleHeight) / 2;
      paddleRight = (canvas.height - paddleHeight) / 2;
      dx = 2;
      dy = -2;
      ballPositionX = 20;
      ballPositionY = canvas.height / 2;
    }
  } 

  // Left Side Player
  // MOVES UP
  if (aKeyPressed) {
    paddleLeft -= 7;
    if (paddleLeft < 0) {
      paddleLeft = 0;
    }
  }
  // MOVES Down
  if (zKeyPressed) {
    paddleLeft += 7;
    if (paddleLeft + paddleHeight > canvas.height) {
        paddleLeft = canvas.height - paddleHeight;
    }
  }

  //Right side Player  
  // MOVES UP
  // MOVES DOWN
  if (pKeyPressed) {
    paddleRight -= 7;
    if (paddleRight < 0) {
      paddleRight = 0;
    }
  }
  
  // MOVES DOWN
  if (lKeyPressed) {
    paddleRight += 7;
    if (paddleRight + paddleHeight > canvas.height) {
        paddleRight = canvas.height - paddleHeight;
    }  
  }
  if (fiveKeyPressed) {
    document.location.reload();
  }
  
}
setInterval(tableTop, 10);


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "a" || e.key == "A") {
    aKeyPressed = true;
  } else if (e.key == "z" || e.key == "Z") {
    zKeyPressed = true;
  } else if (e.key == "p" || e.key == "P") {
    pKeyPressed = true;
  } else if (e.key == "l" || e.key == "L") {
    lKeyPressed = true;
  } else if (e.key = "5") {
    fiveKeyPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key == "a" || e.key == "A") {
    aKeyPressed = false;
  } else if (e.key == "z" || e.key == "Z") {
    zKeyPressed = false;
  } else if (e.key == "p" || e.key == "P") {
    pKeyPressed = false;
  } else if (e.key == "l" || e.key == "L") {
    lKeyPressed = false;
  } else if (e.key == "5") {
    fiveKeyPressed = false;
  }
}