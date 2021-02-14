const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1, b2, b3, b4, b5, b6, b7,b8,b9,b10,b11,b12;
var polygonBody, polygonImg;
var base1, base2, base3;
var engine, world;

function setup(){
   createCanvas(1000, 800);
   engine = Engine.create();
   world = engine.world;
   b1 = new BaseClass(200, 400, 40, 40, false);
   Engine.run();
}

function draw(){
   background(0);
   Engine.update();
   b1.display();
}
