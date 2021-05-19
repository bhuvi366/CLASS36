var playerCount = 0;
var db;
var gameState = 0;
var game;
var player,form;

function setup(){
    createCanvas(500,500);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("white");
    
}

