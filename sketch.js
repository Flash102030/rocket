var fundoImg, fundo;
var asteroidImg, asteroid, asteroidsGroup;
var rocket, rocketImg;
var gameState = "play"



function preload(){
 fundoImg = loadImage("fundo.png");
 asteroidImg = loadImage("asteroid.png");
 rocketImg = loadImage("rocket.png");
 spookySound = loadSound("spooky.wav");
}

function setup() {
    createCanvas(600,600);
    spookySound.loop();
    fundo = createSprite(300,300);
    fundo.addImage("fundo",fundoImg);
    fundo.velocityY = 1;
    
    asteroidGroup = new Group();
    
    rocket = createSprite(200,200,50,50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg)
}

function draw() {
    background(255); 

    if (gameState === "play") {
      
      if(keyDown("right_arrow")){
        rocket.x = rocket.x - 3;
  
      }
      if(keyDown("left_arrow")){
        rocket.x = rocket.x + 3;
  
        
      }
      if(keyDown("space")){
        rocket.velocityY = -10;
  
        
      }
    
    rocket.velocityY = rocket.velocityY + 0.8;
    
      if(fundo.y > 400){
        fundo.y = 300;
      }
      
        spawnDoors();
  
     
      
      if(asteroidGroup.isTouching(rocket) || rocket.y > 600){
        rocket.destroy();
        gameState = "end"
      }
      
    
    drawSprites();
  }
    if (gameState === "end"){
      stroke("yellow");
      fill("yellow");
      textSize(30);
      text("Game Over", 230,250)
    }
}