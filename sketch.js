let canvas;

let planetOneImg;
let planetTwoImg;
let planetThreeImg;
let planetFourImg;
let planetFiveImg;

let mouseShuttle;

let theta = 0;

const scrolling = document.scrollingElement || scrolling.documentElement;
scrolling.addEventListener('wheel', mouseWheel);





function preload() {
  planetOneImg = loadImage('assets/planetImg/planetThreeImg.png');
  mouseShuttle = loadImage("assets/mouse/shuttle.png");
  imageMode(CENTER);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style('position', 'fixed');
  imageMode(CENTER);
}

function draw() {
  background(225, 225, 225);
  drawPlanets();
  addHTMLText();
  followCursor();  
}





function drawPlanets() {
  // rotateZ(theta * mouseX * 0.001);
  // rotateX(theta * mouseX * 0.001);
  // rotateY(theta * mouseX * 0.001);
  
  noStroke();
  texture(planetOneImg);
  sphere(80);

  theta += 0.05;
}


function addHTMLText() {
  let firstSection = createElement('h1', 'FIRST TEXT');
  firstSection.position(500, 0);
  
  let secondSection = createElement('h1', 'SECOND TEXT');
  secondSection.position(1000, 0);

  let thirdSection = createElement('h1', 'THIRD TEXT');
  thirdSection.position(1500, 0);

  
  let spacing = createElement('h1', '&nbsp;');
  spacing.position(2000, 0);
}


function followCursor() {
  image(mouseShuttle, pmouseX-width/2.15, pmouseY-height/2.25, mouseShuttle.width/10, mouseShuttle.height/10);
}




function mouseWheel(event) {
  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  mouseScrollAmount = window.scrollX;
  event.preventDefault();
}