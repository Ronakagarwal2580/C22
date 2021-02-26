  var ball,ground;
  var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Matter.Engine.create();
  world = engine.world;
  var groundOptions = {
    isStatic: true, 
    friction: 1
  }
  ground = Matter.Bodies.rectangle(400,390,width,5,groundOptions);

  Matter.World.add(world,ground);
  
  //console.log(ground);
  var ballOptions = {
    restitution:3
  }
  ball = Matter.Bodies.circle(400,200,50,ballOptions);
  Matter.World.add(world,ball);
  console.log(ball);


  rectMode("center");
}

function draw() {
  background(255,255,255); 

  Matter.Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,5);
  ellipse(ball.position.x,ball.position.y,50);

}