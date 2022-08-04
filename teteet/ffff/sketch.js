var Ball, database;
var position, ballPosition;

function setup() {
    
    createCanvas(500, 500);
    database = firebase.database();
    console.log(database);
    Ball = createSprite (250,250,10,10);
    Ball.shapeColor = "red"; 
    ballPosition = database.ref('bola/position');
    ballPosition.on("value", readPosition, showError);

    
    
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref("bola/position").set({
        x:position.x + x,
        y:position.y + y,
    });
    
    
}

function readPosition(data) {
    position = data.val();
    console.log(position.x);
    console.log(position.y);
    Ball.x = position.x;
    Ball.y = position.y;
    
}

function showError() {
   console.log("dados não recebidos do banco de dados");
   
}