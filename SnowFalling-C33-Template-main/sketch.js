 const Bodies=Matter .Bodies
const Engine=Matter.Engine
const World=Matter.World
 var engine ,world,snow
function setup() {


  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world
 boy=createSprite(400, 300, 350, 50);
  boy.addImage(snowboy)
  boy.scale=0.5
  snow=new snoww(200,200,10)
  console.log(snow)
}
function preload(){
  bg=loadImage("snow2.jpg")
   snowboy=loadImage("snow boy.jpg")

}

function draw() {
  
  background(bg)
  //if( frameCount%100==0){
    
   snow.display()
  //}
  drawSprites();
}