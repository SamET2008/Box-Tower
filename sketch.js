const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(200,height,width,20)
    box1 = new Box(200,300,50,50);
    box2 = new Box(220,250,70,100);
    box3 = new Box(210,200,70,70);
}

function draw(){
    background(random(0,255),random(0,255),random(0,255))
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
}