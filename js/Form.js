class Form{
    constructor(){
    this.input = createInput("").attribute("placeholder", "digite seu nome");
    this.playButton = createButton("play");
    this.titleImg = createImg("./assets/title.png");
    this.greeting = createElement("h2");
    }

    setElementPosition(){

        this.input.position(width/2-110, height/2-80);
        this.playButton.position(width/2-90, height/2-20);
        this.titleImg.position(120, 100);
        this.greeting.position(width/2-300, height/2-100);
    }

    hide(){

        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();
    }


    handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
            this.playButton.hide();

        var message =`
    Olá ${this.input.value()}
    </br> Espere outro jogador entrar...`;
    this.greeting.html(message);
   
   playerCount+=1;
    player.name = this.input.value();
    player.index = 1;
    player.updateCount(playerCount);

    player.addPlayer();

    player.updateCount(playerCount);

    player.getDistance();

    })
    }

  display(){
    this.setElementPosition();
    this.handleMousePressed();


  }  


}