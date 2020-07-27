const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var helicopterIMG,packageIMG;
var engine,world;
var ground;
var box1,box2,box3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
function preload(){

  helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,20);
  box2 = new Box(460,520,20,100);
  box3 = new Box(350,520,20,100);
 
  packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

  helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
  helicopterSprite.scale=0.6
  
  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

ground.display();
box1.display();
box2.display();
box3.display();

drawSprites();
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false);
     
   }
   
 }
 