var spaceShip
var spaceShipImg
var background
var backgroundImg
var gameState = "play"

function preload() {
  spaceShipImg = loadImage("1.png")
  backgroundImg = loadImage("spacew bg.png")
}
function setup(){
createCanvas(600,800)
spaceShip = createSprite(250,650,10,10)
spaceShip.addImage("spaceship",spaceShipImg)
spaceShip.scale=0.4
}
function draw(){
/*if(gameState==="wait"){
  background("white")
  textSize(50)
  text("instructions",20,200)
  if(keyIsDown("Up_Arrow")){
    gameState="play"
  }
}*/
if (gameState==="play"){
    background(backgroundImg) 
spaceShip.x=mouseX 
drawSprites()
}



}