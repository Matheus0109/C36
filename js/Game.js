class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
            gameStateRef.on("value", function(data){
            gameState = data.val();

        });

    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        });

    }

    start(){
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        car1 = createSprite(width/2-50, height-100);
        car1.addImage("car1", car1_img);
        car1.scale = 0.07;

        car2 = createSprite(width/2+100, height-100);
        car2.addImage("car2", car2_img);
        car2.scale = 0.07;

        cars = [car1, car2];

    }

    handleElements(){
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffects");


    }

    play(){
        this.handleElements();

        Player.getPlayersInfo();
        if(allPlayers!==undefined){
            image(track, 0, -height*5, width, height*6);

            var index = 0;
            for(var p in allPlayers){

                var x = allPlayers[p].positionX;
                var y = height - allPlayers[p].positionY;

                cars[index].position.x = x;
                cars[index].position.y = y;

                if(index == player.index){
                    stroke(10);
                    fill("red")
                    
                }

                index = index + 1;
            }

            if(keyDown("up")){
                player.positionY += 10;
                player.update();
            }

            drawSprites();

        }

        
    }
}