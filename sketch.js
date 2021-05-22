const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var paper;
var ground;
var bg;
var Dustbinimg;
var Dustbin1, Dustbin2, Dustbin3;
var world, engine;
var chain;
var gameState = "on slingshot";

function preload() {
	
	dustbinimg = loadImage("Dustbinimg.png");
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	
	world = engine.world;

	Engine.run(engine);


	chain =new Chain(paper.body,{x:200,y:200});
ground = new Ground(200, 580, 3000, 50);
  
paper = new Paper(65, 540, 75);

Dustbin1 = new Dustbin(610, 463, 50, 200);


Dustbin2 = new Dustbin(400, 463, 50, 200);

Dustbin3 = new Dustbin(505.5, 583, 260, 50);

}





function draw() {
	background("white");
Engine.update(engine);
	
	rectMode(CENTER);
	Dustbin1.display();
	
	Dustbin2.display()
	
	Dustbin3.display()
	
	ground.display();
	
	paper.display();
	chain.display();
	
	image(Dustbinimg,500,420,210,240);

}

function mouseDragged(){
 Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased() 
  {
	chain.fly();
  }
  
  function keyPressed() {
	if(keyCode === 32) {
		
		chain.attach(paper.body);
		
	}
  }

