
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,SlingShot;

function preload()
{
	dude=loadImage("Plucking mangoes/boy.png")
	mango=loadImage("Plucking mangoes/mango.png")
	Stone=loadImage("Plucking mangoes/stone.png")
	tree= loadImage("Plucking mangoes/tree.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = createSprite(330,235,30,40);
ground = new Ground(600,height,800,20);
tree = createSprite(330,235,30,40);
Stone= new stone(330,235,30,40);
mango1 = new mangos(330,235,30,40);
mango2 = new mangos(332,237,30,40);
mango3 = new mangos(334,234,30,40);
mango6 = new mangos(336,232,30,40);
mango7 = new mangos(338,239,30,40);
mango8 = new mangos(340,231,30,40);

	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
 background(0);
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 detectcollision(Stone,mango1);
 detectcollision(Stone,mango2);
 detectcollision(Stone,mango3);
 detectcollision(Stone,mango4);
 detectcollision(Stone,mango5);
 detectcollision(Stone,mango6);
 detectcollision(Stone,mango7); 
 detectcollision(Stone,mango8);
  drawSprites();
 
}
function detectcollision(stone,mangoes){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition,y,mangoBodyPosition.x,mangoBodyPosition.y) 
if (dist<-mango+stone){
	Matter.body.setStatic(mango.body,false)
}
}
function keyPressed(){
	if (keyCode===32){
	  slingshot.attach(Stone.body);
	}
  } 
  function mouseDragged() {
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}