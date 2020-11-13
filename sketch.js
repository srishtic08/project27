
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	//Create the Bodies Here.
bobObject1 = new Bob (300,350,30);
bobObject2 = new Bob (350,350,30);
bobObject3 = new Bob (400,350,30);
bobObject4 = new Bob (450,350,30);
bobObject5 = new Bob (500,350,30);
roof1 = new Roof (400,100,410,40);

rope1 = new Rope (bobObject1.body, roof1.body, -bobDiameter*2,0)

  sling1= new Rope(bobObject1.body,roof1.body,-50*2,0);
  sling2= new Rope(bobObject2.body,roof1.body,-25*2,0);
  sling3= new Rope(bobObject3.body,roof1.body,-0*2,0);
  sling4= new Rope(bobObject4.body,roof1.body,25*2,0);
  sling5= new Rope(bobObject5.body,roof1.body,50*2,0);

	
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})

	}
}

