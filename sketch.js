var bullet,wall;
var bulletSpeed,bulletWeight,wallThickness;
var damage;

function setup() {

  createCanvas(1600,400);

  bulletSpeed = random (20,140);
  bulletWeight = random (400,1500);
  wallThickness = random (22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "White";
  bullet.velocityX = bulletSpeed;

  wall = createSprite(720,200,wallThickness,200);
  wall.shapeColor = "White"
  
}

function draw() {

  background("black");

  hasCollided();

  drawSprites();
}
function hasCollided(){
  if (bullet.x - wall.x > (bullet.width + bullet.width)/2){
    bullet.velocityX = 0;
    var damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(wallThickness*wallThickness*wallThickness); 
    if(damage < 10 ){
      wall.shapeColor = ("green")
    }
    if(damage > 10){
      wall.shapeColor = ("red")  
   }
  }
}

