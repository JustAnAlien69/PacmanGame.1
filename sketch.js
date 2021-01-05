const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,wall1,wall2,wall3,wall4;
var player,playerImg;
var obsticle,obsticleImg;
var fruit,fruit1Img,fruit2Img,fruit3Img,fruit4Img;


function preload(){


}

function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  world = engine.world;
  wall1 = new Wall(200,200,900,10);
  wall2 = new Wall(200,500,10,900);
  wall3 = new Wall(1000,500,10,900);
  wall4 = new Wall(200,1000,900,10);
  wall5= new Wall(400,500,900,5)
}

function draw() {
background("white");
Engine.update(engine);
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();



}