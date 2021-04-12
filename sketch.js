const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var secHand,hrHand,minHand;
var hr,sec,min;
var hrAngle, minAngle, secAngle;
var secArc;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0,0,0);

  

  hr = hour();
  hrAngle = map(hr, 0, 24, 0, -360);
  hrHand = new Hand(100, 'red', hrAngle)

  min = minute();
  minAngle = map(min, 0, 60, 0, 360);
  minHand = new Hand(120, 'blue', minAngle - 180)

  sec = second();
  secAngle = map(sec, 0, 60, 0, 360);
  secHand = new Hand(130, 'green', secAngle);
  
  secHand.display();
  hrHand.display();
  minHand.display();

  drawSprites();
}