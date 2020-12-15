

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
 var redGroup,blueGroup,greenGroup,pinkGroup;
var arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
 
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrowGroup = new Group();
  redGroup = createGroup();
  pinkGroup = createGroup();
  blueGroup = createGroup();
  greenGroup = createGroup();
}

function draw() {
 
  
  
  bow.y = World.mouseY
  
   
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
if (arrowGroup.isTouching(redGroup)) {
  arrowGroup.destroyEach();
  redGroup.destroyEach();
  score = score + 2;
}
  if (arrowGroup.isTouching(greenGroup)) {
  arrowGroup.destroyEach();
  greenGroup.destroyEach();
  score = score + 2;
}
  if (arrowGroup.isTouching(blueGroup)) {
  arrowGroup.destroyEach();
  blueGroup.destroyEach();
  score = score + 2;
}
  if (arrowGroup.isTouching(pinkGroup)) {
  arrowGroup.destroyEach();
  pinkGroup.destroyEach();
  score = score + 2;
}
  
  
  drawSprites();
  textSize(22);
  text("Score: "+ score,470,50)
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1
  red.lifetime=200;
  redGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1
  blue.lifetime=200;
  blueGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1
  green.lifetime=200;
  greenGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1
  pink.lifetime=200;
  pinkGroup.add(pink);
}



function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}

