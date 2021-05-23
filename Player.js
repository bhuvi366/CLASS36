class Player{

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

getCount(){
    var getCountnode = database.ref("PlayerCount")
    getCountnode.on("value", function(data){
        playerCount = data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount: count,
});
}
update(){
var playerIndex = "players/player"+ this.index;
database.ref('playerIndex').set({
   name:this.name,
   distance:this.distance
})
}
 static getPlayerInfo(){
    var getinfonode = database.ref("players")
    getinfonode.on("value", function(data){
        allPlayers = data.val();
    })
 }   

}