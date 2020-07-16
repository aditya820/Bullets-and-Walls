var bullet1, bullet2, bullet3, bullet4
var speed1, weight1;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;
var damage1,damage2,damage3,damage4
var thickness1, thickness2, thickness3, thickness4
var wall1, wall2, wall3, wall4

function setup() {
  createCanvas(1600,400);
  
  speed1 = random (223,321);
  weight1 = random(30,52);
  thickness1 = random(22,83);

  speed2 = random (223,321);
  weight2 = random(30,52);
  thickness2 = random(22,83);

  speed3 = random (223,321);
  weight3 = random(30,52);
  thickness3 = random(22,83);

  speed4 = random (223,321);
  weight4 = random(30,52);
  thickness4 = random(22,83);
  
  bullet1 = createSprite(50,50,25,10);
  bullet1.shapeColor = "white";
  bullet1.velocityX = speed1;

  bullet2 = createSprite(50,150,25,10);
  bullet2.shapeColor = "white";
  bullet2.velocityX = speed2;

  bullet3 = createSprite(50,250,25,10);
  bullet3.shapeColor = "white";
  bullet3.velocityX = speed3;

  bullet4 = createSprite(50,350,25,10);
  bullet4.shapeColor = "white";
  bullet4.velocityX = speed4;
  
  wall1 = createSprite(1400,50,thickness1,50);
  wall1.shapeColor = color(80,80,80);

  wall2 = createSprite(1400,150,thickness2,50);
  wall2.shapeColor = color(80,80,80);

  wall3 = createSprite(1400,250,thickness3,50);
  wall3.shapeColor = color(80,80,80);

  wall4 = createSprite(1400,350,thickness4,50);
  wall4.shapeColor = color(80,80,80);

  damage1 = (0.5 * weight1 * speed1 * speed1) / 22500; 
  damage2 = (0.5 * weight2 * speed2 * speed2) / 22500; 
  damage3 = (0.5 * weight3 * speed3 * speed3) / 22500; 
  damage4 = (0.5 * weight4 * speed4 * speed4) / 22500; 
}

function draw() {
  background(0,0,0);
  
  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);

  stroke("white");
  line(0,100,1600,100);
  line(0,200,1600,200);
  line(0,300,1600,300);

  if(hasCollided1(bullet1,wall1)) {
    bullet1.velocityX = 0;
    damage1 = 0.5 * weight1 * speed1 * speed1/(thickness1 * thickness1 * thickness1);

    if(damage1 >= 10) {
      wall1.shapeColor = color(255,0,0);
    }

    if(damage1 < 10) {
      wall1.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided2(bullet2,wall2)) {
    bullet2.velocityX = 0;
    damage2 = 0.5 * weight2 * speed2 * speed2/(thickness2 * thickness2 * thickness2);

    if(damage2 >= 10) {
      wall2.shapeColor = color(255,0,0);
    }

    if(damage2 < 10) {
      wall2.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided3(bullet3,wall3)) {
    bullet3.velocityX = 0;
    damage3 = 0.5 * weight3 * speed3 * speed3/(thickness3 * thickness3 * thickness3);

    if(damage3 >= 10) {
      wall3.shapeColor = color(255,0,0);
    }

    if(damage3 < 10) {
      wall3.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided4(bullet4,wall4)) {
    bullet4.velocityX = 0;
    damage4 = 0.5 * weight4 * speed4 * speed4/(thickness4 * thickness4 * thickness4);

    if(damage4 >= 10) {
      wall4.shapeColor = color(255,0,0);
    }

    if(damage4 < 10) {
      wall4.shapeColor = color(0,255,0);
    }
  }

 drawSprites();

}

function hasCollided1(lBullet,lWall) {
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}

function hasCollided2(lBullet,lWall) {
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}

function hasCollided3(lBullet,lWall) {
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}

function hasCollided4(lBullet,lWall) {
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}