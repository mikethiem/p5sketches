function setup() {
  createCanvas(300, 300);
  background(0, 200, 0);
}

function draw() {
  drawFlower(150, 150, 100);
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 2;

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}