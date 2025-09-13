// Elian Arce  
// tp3 rec comision 1

let ilusion;
let mod;
let ColorB;
let XPos, YPos;

function preload() {
  ilusion = loadImage('data/ilusion.png');
}

function setup() {
  createCanvas(800, 400);
  image(ilusion, 0, 0, 400, 400);
  mod = 20;
  ColorB = color(200, 0, 0);
}

function draw() {
  dibujarGrilla();
  MousePos();
  let X = XPos;
  let Y = YPos;  

  for (let i = 410; i < 800; i += mod) {
    for (let j = 10; j < 400; j += mod) {
      let dis = dist(i, j, X, Y);
      let maxDis = dist(350, 200, X, Y);
      let radio = dis / maxDis;

      let ColorA = AgarraColor(radio);
      fill(ColorA);
      noStroke();
      ellipse(i, j, 18, 18);
    }
  }
}

function dibujarGrilla() {
  for (let i = 400; i < 800; i += mod) {
    for (let j = 0; j < 400; j += mod) {
      fill(18, 85, 34);
      stroke(0, 100, 37);
      rect(i, j, mod, mod);
    }
  }
}

function MousePos() {
  XPos = mouseX;
  YPos = mouseY;
}

function AgarraColor(radio) {
  let r = lerp(red(ColorB), 0, radio);
  let g = lerp(green(ColorB), 0, radio);
  let b = lerp(blue(ColorB), 0, radio);
  return color(r, g, b);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    ColorB = color(random(255), random(255), random(255));
  } else if (key === 'r' || key === 'R') {
    ColorB = color(200, 0, 0);    
  }
}
