const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
function preload(){
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,200,250,10);
  stand2 = new Stand(700,300,250,10);
 
  //level one
  block1 = new Block(300,175,30,40);
  console.log(block1);
  block2 = new Block(330,175,30,40);
  block3 = new Block(360,175,30,40);
  block4 = new Block(390,175,30,40);
  block5 = new Block(420,175,30,40);
  block6 = new Block(450,175,30,40);
  block7 = new Block(480,175,30,40);
  //level two
  block8 = new Block(330,135,30,40);
  block9 = new Block(360,135,30,40);
  block10 = new Block(390,135,30,40);
  block11 = new Block(420,135,30,40);
  block12 = new Block(450,135,30,40);

  block13 = new Block(360,95,30,40);
  block14 = new Block(390,95,30,40);
  block15 = new Block(420,95,30,40);
  //top
  block16 = new Block(390,55,30,40);


  //level one
  block1s = new Block(610,275,30,40);
  console.log(block1s);
  block2s = new Block(640,275,30,40);
  block3s = new Block(670,275,30,40);
  block4s = new Block(700,275,30,40);
  block5s = new Block(730,275,30,40);
  block6s = new Block(760,275,30,40);
  block7s = new Block(790,275,30,40);
  //level two
  block8s = new Block(640,235,30,40);
  block9s = new Block(670,235,30,40);
  block10s = new Block(700,235,30,40);
  block11s = new Block(730,235,30,40);
  block12s = new Block(760,235,30,40);
  //level three
  block13s = new Block(670,195,30,40);
  block14s = new Block(700,195,30,40);
  block15s = new Block(730,195,30,40);
  //top
  block16s = new Block(700,155,30,40);

 polygon = new Polygon(100,100,50,50)
  

 slingShot = new SlingShot(polygon.body,{x:100, y:200});
  }
  





function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  //Engine,update(engine);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill(101,67,33);
  block1s.display();
  block2s.display();
  block3s.display();
  block4s.display();
  block5s.display();
  block6s.display();
  block7s.display();
  fill(225,198,152);
  block8s.display();
  block9s.display();
  block10s.display();
  block11s.display();
  block12s.display();
  fill(207,170,151);
  block13s.display();
  block14s.display();
  block15s.display();
  fill(240,912,182);
  block16s.display();  

  
  //slingShot = new Slingshot(polygon.body,{x:100, y:200});
  //console.log(slingShot)

  slingShot.display();
  polygon.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly()
}