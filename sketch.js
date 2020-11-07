
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bob1= new Bob(500,400,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  drawSprites();
 
  keypressed();
}


function keypressed()
 {
 if (keyCode === UP_ARROW)
 {
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100, y:-100});
   Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50, y:-50});
   Matter.Body.applyForce(bob3.body,bob3.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob4.body,bob4.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:25, y:-25});
   Matter.Body.applyForce(bob2.body,bob2.body.position,{x:10, y:-10});
 }
 }
