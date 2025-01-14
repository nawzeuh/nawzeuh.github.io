let bgImage;
let pinkie;
let clickSound;
let raveTime = false
let PressTime = 0;




let pinkieX, pinkieY; //pinkie formation
let pinkieWidth = 900; //width pinkie
let pinkieHeight = 700; //height pinkie
let pinkieVisible = false;
let currentText = "";
let textTimer = 0;


function preload() {
  bgImage = loadImage ('images/background.jpeg'); //back image of rave at stonehedge
  
  pinkie = loadImage ('images/pinkie.png'); //pinkie
   
  clickSound = loadSound('sounds/yasss.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  //starting pinkie beyond screen
  pinkieX = width / 3 - pinkieWidth / 2;
  pinkieY = height / 2 - pinkieHeight / 2;
  
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255, 102, 204);
  

}

function draw() {
    
  
  if (raveTime) {
    let timeElapsed = millis() - lastPressTime;
    if (timeElapsed > 3000) {
      let colorValue = random(255);
      background(colorValue, random(255), random(255));
      
      tint(255,100);
    }
  }
  
  image (bgImage, 0, 0, width, height);
     if (pinkieVisible) {
      image(pinkie, pinkieX, pinkieY, pinkieWidth, pinkieHeight)
       
       noTint();
    }

  if (currentText !== "" && millis() < textTimer) {
    text(currentText, width / 2, height / 8);
  }
}

function mousePressed() {
  
  lastPressTime = millis();
  raveTime = true;
  
  if (clickSound) {
    clickSound.play();
  }
  pinkieVisible = true
  
  showTextSequence();
}


function showTextSequence() {
  currentText = "COME ON EVERYPONY!!!";
  textTimer = millis() + 2000;

  setTimeout (() => {
    currentText = "ITS PARTY TIME!!!";
    textTimer = millis() + 1000;
  }, 1600);
  
  setTimeout(() => {
    currentText = "";
  }, 5000);
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight)
  
  targetX = width / 2 - pinkieWidth / 2;
  targetY= height / 2 - pinkieHeigt/ 2;
}

