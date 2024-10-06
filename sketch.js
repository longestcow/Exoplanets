let canvas;

let NUM_OF_PLANETS = 6;
let planetImgs = [];

let mouseShuttle;
let mouseShuttle2;
let shuttleXPos;
let shuttleYPos;
let pShuttleXPos;
let pShuttleYPos;

let ufoXPos;

let theta = 0;

const scrolling = document.scrollingElement || scrolling.documentElement;
scrolling.addEventListener('wheel', mouseWheel);





function preload() {
  for (let planet = 0; planet < NUM_OF_PLANETS; planet++) {
    planetImgs.push(loadImage("assets/planetImg/planet" +planet+ "Img.png"));
  }
  mouseShuttle = loadImage("assets/mouse/shuttle.png");
  mouseShuttle2 = loadImage("assets/mouse/shuttle.png");

  // imageMode(CENTER);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style('position', 'fixed');
}

function draw() {
  background(225, 225, 225);
  drawPlanets();
  addHTMLText();
  followCursor();  
  followScroll();
}





function drawPlanets() {
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  
  noStroke();
  texture(planetImgs[5]);
  
  // push(); 
  // translate(100, 100, 10);
  // ellipsoid(100, 60);
  sphere(80);
  // pop();

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
  shuttleXPos = mouseX-width/2.15;
  shuttleYPos = mouseY-height/2.25;
  pShuttleXPos = pmouseX-width/2.15;
  pShuttleYPos = pmouseY-height/2.25;
  
  image(mouseShuttle, shuttleXPos, shuttleYPos, mouseShuttle.width/10, mouseShuttle.height/10);
}

function followScroll() {
  imageMode(CENTER);
  let ufoXPos = map(scrollX, 0, width, 0, windowWidth) - width/2.2 - 10;
  image(mouseShuttle2, ufoXPos, (height/2)-50, mouseShuttle2.width/10 , mouseShuttle2.height/10);
}



function mouseWheel(event) {
  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}