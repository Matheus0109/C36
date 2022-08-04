var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var car1, car2;
var cars = [];
var allPlayers;

function preload() {
  backgroundImage = loadImage("assets/background.png");

  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  // atualize estado do jogo
  if(playerCount == 2){
    game.updateState(1);
    gameState = 1;
  }
 

  if (gameState === 1) {
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showError(){
  console.log("dados não recebidos do banco de dados");

}
