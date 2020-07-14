class Form {
    constructor() {
        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement("H3");

    }
    hide() {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    } 


    display() {
        var title = createElement("H2");
        title.html("Car Racing Game");
        title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(250, 200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);
            this.greeting.html("Hello"+" "+ player.name);
            this.greeting.position(130, 160);
        })
    }
}