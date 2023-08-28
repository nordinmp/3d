let boxDimension = 50;

let speedOfMovement = 5;
let speedOfRotation = 2;

let cameraXPosition = 0;
let cameraYPosition = 0;
let cameraZPosition = 0;

let rotationAngleX = 0;
let rotationAngleY = 270;

let distance = 500;

let deathCount = 0;

let zBoxPos = -2500;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  xBoxPos = random(-200,200);
  yBoxPos = random(-200,200);
  cam = createCapture(VIDEO)
  cam.hide()
}

function draw() {
  background(220);
  
  
  push()
  translate(xBoxPos,yBoxPos,zBoxPos);
  box(boxDimension);
  
  zBoxPos = zBoxPos+50;
  
  if (zBoxPos > cameraZPosition + distance)
  {
    zBoxPos = -2500; 
    xBoxPos = cameraXPosition //+ random(-50,50);
    yBoxPos = cameraYPosition //+ random(-50,50);
  }
  pop()  

  zAf = abs((cameraZPosition + distance) - zBoxPos);
  if(zAf <= (boxDimension/2)+20) 
  {
    
    xAf = abs(cameraXPosition - xBoxPos);
    console.log("xaf" + xAf);
    if(xAf <= (boxDimension/2)+20) 
    {
      yAf = abs(cameraYPosition - yBoxPos);
      console.log("yaf" + yAf);
      if(yAf <= (boxDimension/2)+20) 
      {
        console.log("yaf" + yAf);
        console.log("You died " + deathCount);  
        deathCount++
      }  
    }
  }
  
  if (pewPew == true) 
  {
     if (cameraXPosition == xBoxPos)
    { 
      if (cameraYPosition == yBoxPos)
      { 

      }  
    }     
  }
  
  
  noStroke();
  // WallBack
  push()
  translate(0,0,-700)
  texture(cam)
  plane(900,400)
  pop()
  
  //WallFloor
  push()
  translate(0,200,-300)
  rotateX(90)
  texture(cam)
  plane(900,900)
  pop()
  
  //WallRoof
  push()
  translate(0,-200,-300)
  rotateX(90)
  texture(cam)
  plane(900,900)
  pop()
  
  //Wall Left
  push()
  translate(-450,0,-300)
  rotateY(90)
  texture(cam)
  plane(900,400)
  pop()
  
  //Wall Right
  push()
  translate(450,0,-300)
  rotateY(90)
  texture(cam)
  plane(900,400)
  pop()
  
   camera(cameraXPosition, cameraYPosition, distance + cameraZPosition, 
         cameraXPosition + cos(rotationAngleY) * cos(rotationAngleX), 
         cameraYPosition + sin(rotationAngleX), 
         cameraZPosition + sin(rotationAngleY) * cos(rotationAngleX), 
         0, 1, 0);
    moveCameraWithWASDKeys();
}

function BoxMax(x,y,z,h,d,b) 
{
  translate(x,y,z);
  box(h,d,b);
}

function moveCameraWithWASDKeys()
{
  if (keyIsDown(87)) // W key
  { 
    cameraXPosition = cameraXPosition + speedOfMovement * cos(rotationAngleY);
    cameraZPosition = cameraZPosition + speedOfMovement * sin(rotationAngleY);
  }
  if (keyIsDown(83)) // S key
  { 
    cameraXPosition = cameraXPosition - speedOfMovement * cos(rotationAngleY);
    cameraZPosition = cameraZPosition - speedOfMovement * sin(rotationAngleY);
  }
  if (keyIsDown(65)) // A key
  { 
    cameraXPosition = cameraXPosition + speedOfMovement * cos(rotationAngleY - 90);
    cameraZPosition = cameraZPosition + speedOfMovement * sin(rotationAngleY - 90);
  }
  if (keyIsDown(68)) // D key
  { 
    cameraXPosition = cameraXPosition + speedOfMovement * cos(rotationAngleY + 90);
    cameraZPosition = cameraZPosition + speedOfMovement * sin(rotationAngleY + 90);
  }
  if (keyIsDown(32)) 
  {
    shootBox(cameraXPosition,cameraYPosition)
  }
}

function shootBox(bulletX,bulletY) 
{
  bulletZ = cameraZPosition;
  translate(bulletX,bulletY,bulletZ)
  box(10)
  
}