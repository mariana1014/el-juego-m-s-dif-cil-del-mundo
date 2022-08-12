console.log("hola");
var player=createSprite(184,40,12,12);
player.shapeColor="#2F55EF";

var meta=createSprite(280,375,200,48);
meta.shapeColor="#A8EBFF";

var wall_1=createSprite(15,200,5,300);
wall_1.shapeColor="#13E5C2";
var wall_2=createSprite(85,50,145,5);
wall_2.shapeColor="#13E5C2";
var wall_3=createSprite(150,349,265,5);
wall_3.shapeColor="#13E5C2";
var wall_4=createSprite(382,200,5,300);
wall_4.shapeColor="#13E5C2";
var wall_5=createSprite(350,349,60,5);
wall_5.shapeColor="#13E5C2";
var wall_6=createSprite(300,50,170,5);
wall_6.shapeColor="#13E5C2";
var wall_7=createSprite(100,90,110,5);
wall_7.shapeColor="#13E5C2";
var wall_8=createSprite(155,68,5,45);
wall_8.shapeColor="#13E5C2";
var wall_9=createSprite(215,112,5,130);
wall_9.shapeColor="#13E5C2";
var wall_10=createSprite(145,174,150,5);
wall_10.shapeColor="#13E5C2";
var wall_11=createSprite(72,150,5,50);
wall_11.shapeColor="#13E5C2";
var wall_12=createSprite(93,128,50,5);
wall_12.shapeColor="#13E5C2";
var wall_13=createSprite(165,128,30,5);
wall_13.shapeColor="#13E5C2";
var wall_14=createSprite(120,222,210,5);
wall_14.shapeColor="#13E5C2";
var wall_15=createSprite(222,244,5,50);
wall_15.shapeColor="#13E5C2";
var wall_16=createSprite(255,268,70,5);
wall_16.shapeColor="#13E5C2";
var wall_17=createSprite(287,180,5,172);
wall_17.shapeColor="#13E5C2";
var wall_18=createSprite(313,96,50,5);
wall_18.shapeColor="#13E5C2";
var wall_19=createSprite(335,150,5,105);
wall_19.shapeColor="#13E5C2";
var wall_20=createSprite(335,278,5,50);
wall_20.shapeColor="#13E5C2";
var wall_21=createSprite(357,254,45,5);
wall_21.shapeColor="#13E5C2";
var wall_22=createSprite(190,300,285,5);
wall_22.shapeColor="#13E5C2";
var wall_23=createSprite(170,285,5,35);
wall_23.shapeColor="#13E5C2";
var wall_24=createSprite(50,278,5,50);
wall_24.shapeColor="#13E5C2";
var wall_25=createSprite(85,255,75,5);
wall_25.shapeColor="#13E5C2";
var wall_26=createSprite(100,313,5,30);
wall_26.shapeColor="#13E5C2";

var enemy_1=createSprite(240,70,10,10);
enemy_1.setAnimation("diablo_malo");
var enemy_2=createSprite(320,265,10,10);
enemy_2.setAnimation("diablo_malo");

enemy_1.velocityY=4;
enemy_2.velocityY=-4;


function draw() {
  background("white");
  drawSprites();
  
  enemy_1.bounceOff(wall_16);
  enemy_1.bounceOff(wall_6);
  enemy_2.bounceOff(wall_22);
  enemy_2.bounceOff(wall_18);
  
  player.bounce(wall_1);
  player.bounce(wall_2);
  player.bounce(wall_3);
  player.bounce(wall_4);
  player.bounce(wall_5);
  player.bounce(wall_6);
  player.bounce(wall_7);
  player.bounce(wall_8);
  player.bounce(wall_9);
  player.bounce(wall_10);
  player.bounce(wall_11);
  player.bounce(wall_12);
  player.bounce(wall_13);
  player.bounce(wall_14);
  player.bounce(wall_15);
  player.bounce(wall_16);
  player.bounce(wall_17);
  player.bounce(wall_18);
  player.bounce(wall_19);
  player.bounce(wall_20);
  player.bounce(wall_21);
  player.bounce(wall_22);
  player.bounce(wall_23);
  player.bounce(wall_24);
  player.bounce(wall_25);
  player.bounce(wall_26);
  
  
  if (keyDown("down")){
    player.y=player.y+2;
  }
  
  if (keyDown("left")){
    player.x=player.x-2;
  }
  
  if (keyDown("right")){
    player.x=player.x+2;
  }
  
  if (keyDown("up")){
    player.y=player.y-2;
  }
  
  if (player.isTouching(enemy_1)||
          player.isTouching(enemy_2)){
            player.x=184;
            player.y=40;
            playSound("sound://default.mp3", false);
          }
  
  if ((player.y<1)||
      (player.y>399)){
    player.x=184;
    player.y=40;
  }
  
  if ((player.x<12)||
        (player.x>384)){
    player.x=184;
    player.y=40;
  }
  
  if (player.isTouching(meta)){
    textSize(50);
    stroke("#FF2020");
    fill("#FF2020");
    text("Ganaste :D",80,200);
  }
}
