class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount() {
        var playercountref = database.ref('Playercount');
        playercountref.on("value", function(data){
            playercount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playercount: count 
        })
    }
    update(){
        var playerindex = "Players/Player" + this.index;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            playercount = data.val();
        })
        
    }
}