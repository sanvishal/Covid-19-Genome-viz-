function preload() {
  genome = loadStrings("genome/china.txt");
}

function setup() {
  genome = genome[0];
  width = window.innerWidth - window.innerWidth / 6;
  height = window.innerHeight - 30;
  createCanvas(width, height);
  background(245, 245, 245);
  bp = 0;
}

function draw() {
  if (bp >= genome.length) {
    noLoop();
  } else {
    drawThing(genome[bp]);
    bp += 1;
  }
}

let x = 10,
  y = 10;

function drawThing(bp) {
  noStroke();
  if (x > width - 30) {
    x = 10;
    y += 10;
  } else {
    x += 10;
  }
  switch (bp) {
    case "t":
      fill(102, 79, 219);
      break;
    case "a":
      fill(238, 113, 85);
      break;
    case "g":
      fill(125, 201, 231);
      break;
    case "c":
      fill(84, 179, 116);
      break;
  }
  rect(x, y, 10, 10);
}
