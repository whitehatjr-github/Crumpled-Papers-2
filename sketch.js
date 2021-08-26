var dustbinobj, paperobj, groundobj, world;

var paperimg, dustbinimg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



function setup() {
	createCanvas(1600, 700);


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	dustbinobj = new dustbin(1200,650);
	paperobj = new paper(200,450,70);
	groundobj = new ground(width/2,670,width,20);



	Engine.run(engine);
  
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
		width:1200,
		height:700,
		wireframes:false
		}
	})
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paperobj.display()
  groundobj.display()
  dustbinobj.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145});
  
	}
}
