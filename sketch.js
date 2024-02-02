let e1x = 200;
let e1y = 200;
let speed1 = 5;
let speed2 = 5;
let speed = 5;
let bounce1 = 0;
let bounce2 = 0;

// speed of color change
// 1 = e1fill, 3 = e1stroke
let colorspeed01 = 1;
let colorspeed05 = 5;
let colorspeed10 = 10;
let colorspeed20 = 20;
let colorspeed1 = 10;
let colorspeed2 = 10;
let colorspeed3 = 20;
let colorspeed4 = 20;
let colorspeed5 = 10;
let colorspeed6 = 10;
let colorspeed7 = 20;
let colorspeed8 = 20;

// fill color reverse of ellipse1
let e1colorbouncefillR = 0;
let e1colorbouncefillG = 0;
let e1colorbouncefillB = 0;

// stroke color reverse of ellipse1
let e1colorbouncestrokeR = 0;
let e1colorbouncestrokeG = 0;
let e1colorbouncestrokeB = 0;

// ellipse1 fill
let e1colorfillR = 222;
let e1colorfillG = 47;
let e1colorfillB = 162;

// ellipse1 stroke
let e1colorstrokeR = 138;
let e1colorstrokeG = 29;
let e1colorstrokeB = 18;

// mousepressed counter
let mousepress = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(4, 20, 70);
}

function draw() {
  // random position
  let randX = random(0, windowWidth);
  let randY = random(0, windowHeight);
  
  fill(e1colorfillR, e1colorstrokeG, e1colorstrokeB);
  circle(randX, randY, random(0.1, 3));
  
  stroke(e1colorstrokeR, e1colorfillG, e1colorstrokeB);
  line(e1x, e1y, e1x-(speed1*10), e1y-(speed2*30));
  line(e1x, e1y, e1x-(speed1*30), e1y-(speed2*10));
  
  
  // background clear + random color
  if (mouseIsPressed) {
    background(0+random(0,50), 30+random(0,50), 22+random(20,50), 30);
    line(randX, randY, mouseX, mouseY)
    line(e1x, e1y, randX, randY)
    circle(randX, randY, random(4, 10))
    e1x += random(-mousepress, mousepress);
    e1y += random(-mousepress, mousepress);
    mousepress += 0.2;
    e1colorfillR += random(-mousepress/2, mousepress/2);
    e1colorfillG += random(-mousepress/2, mousepress/2);
    e1colorfillB += random(-mousepress/2, mousepress/2);
  } else { 
    mousepress = 0;
  }
  
  
  //ellipse 1 colorshift
  e1colorfillR += colorspeed1;
  e1colorfillG += colorspeed2;
  e1colorfillB += colorspeed5;
  
  e1colorstrokeR += colorspeed3;
  e1colorstrokeG += colorspeed4;
  e1colorstrokeB += colorspeed7;
  
  // ellipse 1
  fill(e1colorfillR, e1colorfillG, e1colorfillB);
  stroke(e1colorstrokeR, e1colorstrokeG, e1colorstrokeB)
  ellipse(e1x, e1y, 70);
  
  // ellipse 1 movement
  e1x += speed1;
  e1y += speed2;
  
  // i am a good programmer 100 percent real check out my "if else loops" that run every frame
  if (e1x > windowWidth) {
    bounce1 = 1;
    console.log('bounceRight')
  } 
  
  if (e1y > windowHeight) {
    bounce2 = 1;
    console.log('bounceBottom');
  }
  
  if (e1x < 0) {
    bounce1 = 0;
    console.log('bounceLeft');
  }
  
  if (e1y < 0) {
    bounce2 = 0;
    console.log('bounceTop');
  }
  
  if (bounce1 == 1) {
    speed1 = -speed;
  } else {
    speed1 = speed;
  }
    if (bounce2 == 1) {
    speed2 = -speed;
  } else {
    speed2 = speed;
  }
  
      //color control start
  if (e1colorfillR > 255) {
    e1colorbouncefillR = 1;
  }
  
  if (e1colorfillR < 0) {
    e1colorbouncefillR = 0;
  }
  
  if (e1colorbouncefillR == 1) {
    colorspeed1 = -colorspeed05;
  } else {
    colorspeed1 = colorspeed10;
  }
  
  if (e1colorfillG > 255) {
    e1colorbouncefillG = 1;
  }
  
  if (e1colorfillG < 0) {
    e1colorbouncefillG = 0;
  }
  
  if (e1colorbouncefillG == 1) {
    colorspeed2 = -colorspeed10;
  } else {
    colorspeed2 = colorspeed20;
  }
  
  if (e1colorfillB > 255) {
    e1colorbouncefillB = 1;
  }
  
  if (e1colorfillB < 0) {
    e1colorbouncefillB = 0;
  }
  
  if (e1colorbouncefillB == 1) {
    colorspeed5 = -colorspeed01;
  } else {
    colorspeed5 = colorspeed10;
  }
  
  //stroke
    if (e1colorstrokeR > 255) {
    e1colorbouncestrokeR = 1;
  }
  
  if (e1colorstrokeR < 0) {
    e1colorbouncestrokeR = 0;
  }
  
  if (e1colorbouncestrokeR == 1) {
    colorspeed3 = -colorspeed10;
  } else {
    colorspeed3 = colorspeed01;
  }
  
  if (e1colorstrokeG > 255) {
    e1colorbouncestrokeG = 1;
  }
  
  if (e1colorstrokeG < 0) {
    e1colorbouncestrokeG = 0;
  }
  
  if (e1colorbouncestrokeG == 1) {
    colorspeed4 = -colorspeed20;
  } else {
    colorspeed4 = colorspeed20;
  }

}