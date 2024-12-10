let smallStars = []; //storing smaller stars
let floating = false; //triggering floating effect

function setup() {
  createCanvas(700,700); 
}

function draw() {
  //pretty pink background
  background(252, 186, 204);
  //set stroke to periwinkle blue
  stroke (204, 204, 255)
  //setting stroke to 10 to make it thin and skinny purr
  strokeWeight (10);
  //drawing that 1st blue line pur
  line (0, 0, 700, 700)
  //drawing mirrored line
  line (0,  700, 700, 0)
  // putting in square with some color
  fill (204, 204, 255); 
  //ok ladies now lets get in formation
  rect (250, 250, 200, 200);
  
  // drawing a rlly pretty star
  drawStar (350,350,170,65,6);
  
  createSmallStars();
  //drawing smaller stars and applying a floating effect ^
  for (let i=0; i < smallStars.length; i++) {
    let star = smallStars[i];
    drawStar(star.x, star.y, star.size, star.size / 2, 5);
    if (floating) { 
      //creating the frames needed to rotate the stars
    star.size = 20 + 5 * sin(frameCount * 0.1 + i);
    star.x = 350 + cos(star. angle) * (star.distance + 20 * sin(frameCount*0.05 +i));
    star.y = 350 + sin (star.angle) * (star.distance + 20 * sin (frameCount * 0.05 +i));
    }
  }
}
//creating the small stars that r supposed to float
function createSmallStars() {
  if (smallStars.length === 0) {
    for (let i = 0; i <8; i++) {
      let angle = map (i, 0, 8, 0, TWO_PI);
      let x = 350 + cos(angle) *200;
      let y = 350 + sin (angle) * 200;
      smallStars.push({ x: x, y: y, size: 20, angle: angle, distance: 200});
    }
  }
}
//drawing the main center star
function drawStar (x, y, radius1, radius2, npoints) {
let angle = TWO_PI / npoints; // circle divided by points
  let halfAngle = angle / 2.0; 
  fill (255, 102, 204); // pink star color
  stroke(204, 102, 255); // stroke clor
  strokeWeight(3); //body teaaa waist is paper thin
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    //outer point
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    //inner point
    sx = x + cos (a + halfAngle) * radius2;
    sy = y + sin (a + halfAngle) * radius2;
    vertex(sx, sy);
  } 
endShape(CLOSE);
}
//click dat mouse so stars can float
function mousePressed() { 
// mouse inside main star command
let d = dist(mouseX, mouseY, 350, 350);
if (d < 150) { // radius of star
  floating = !floating} //floating state when clicked
}