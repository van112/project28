var paperIMG, paperSprite;
var paperBody,ground
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;



	

	//Create a Ground
	ground = new Ground(600,height,1600,20);
	paper=new Paper(200,450,40);
	dustbin=new Dustbin(1200,650);
    launcher = new Launcher(paper,{x:200,y:100});
	 


	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  rectMode(CENTER);
  ground.display();
  paper.display();
  dustbin.display();

 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly();
}




