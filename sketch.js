//Load Variable
var player, obstacle, wall;
var forest, ground, collect;
var pause;

//Load Animation And Image
var run, stand, shoot;
var cobble, stone, backspace;
var coin;
var pauseImg;

//Load Variable And Give Value
var score = 0
var life = 0
var gameState = 0;
var action = "running";

//Load Group
var Obstacles;

function preload(){
    run = loadImage("./Assets/Running.gif");
    cobble = loadImage("./Assets/Wall.png");
    stone = loadImage("./Assets/obstacle.png");
    backspace = loadImage("./Assets/Forest.png");
    coin = loadImage("./Assets/coin.png");
    pauseImg = loadImage("./Assets/Pause.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    //backspace
    forest = createSprite(width*2,height/2);
    forest.addImage(backspace);
    forest.scale = 5.1
    forest.velocityX = -12;

    //pause

    //Player
    player = createSprite(250,550);
    player.addImage("run",run);
    player.scale = 1;

    //ground
    crust = createSprite(width/2,650,width,1)
    crust.visible = false;

    Obstacles = new Group;
}

function draw() {
    //console.log(mouseY)
   background(255)
    //Condition
if(gameState == 0 ){
    if(frameCount%10 == 0){
        score += 1
    }
    if(forest.x<=-100){
        forest.x = width*2;
    }
    if(keyDown("space")&&player.y >= 475){
        player.velocityY = -15;
        console.log("jump");
    }else{
        player.velocityY += 0.8;
    }
    if(frameCount % 200 == 0){
        speedbreakers(obstacle,stone, 0.5,600);
    }
    if(frameCount % 300 == 0){
        speedbreakers(wall, cobble, 0.7,630);
    }
    if(player.collide(Obstacles)){
        gameState = 2;
    }
}else if(gameState == 1){


}else if(gameState == 2){
    forest.velocityX = 0;
    Obstacles.setVelocityXEach(0)
    player.velocityX = 0;
    player.scale = 0.00000000000000000000000000000000000000000000000000001;
    sweet();
}
    //Gravity
    player.collide(crust);

    drawSprites();
    rectMode(CENTER);
    fill("cyan")
    rect(175,50,300,75)
    textSize(30)
    fill("black")
    text("score:"+score,30,40);
    text("Press Space To Jump",30,80)
}

function speedbreakers(rock,img,scale,y){
        rock = createSprite(width,y);
        rock.addImage(img);
        rock.scale = scale;
        rock.velocityX = -12;
        rock.life = 500
        Obstacles.add(rock);
}
function sweet(){
    swal({
        title: `Oh No.....`,
        text: "Well Played",
        imageUrl:"https://i.pinimg.com/736x/74/20/8b/74208bd0e8cd28038ae53798d73f1eb3.jpg",
        imageSize: "250x250",
        confirmButtonText: "Please Reset The Web Page"
      });
}