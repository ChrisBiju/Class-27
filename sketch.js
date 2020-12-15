
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
	
bobDiameter = 50

roof = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, roof);

	bobObject1 = Bodies.circle(200,500,50)
	World.add(world,bobObject1);

	bobObject2 = Bodies.circle(300,500,50)
	World.add(world,bobObject2);

	bobObject3 = Bodies.circle(400,500,50)
	World.add(world,bobObject3);

	bobObject4 = Bodies.circle(500,500,50)
	World.add(world,bobObject4);

	bobObject5 = Bodies.circle(600,500,50)
	World.add(world,bobObject5);

rope =new Chain(bobObject1.body,roof.body,-bobDiameter*2,0)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  rect(400,100,600,40)

  ellipse(200,500,50,50)
ellipse(300,500,50,50)
ellipse(400,500,50,50)
ellipse(500,500,50,50)
ellipse(600,500,50,50)

rope.display();


  drawSprites();
 
}



