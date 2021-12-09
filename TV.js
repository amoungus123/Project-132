img = "";

function preload() {
    img = loadImage('TV.jpg');
}

function setup() {
    canvas = createCanvas(450, 420);
    canvas.position(750, 200);
}

function draw() {
    image(img, 0, 0, 450, 420);
    fill("#FF0000");
    text("TV", 105, 115);
    noFill()
    stroke("#FF0000");
    rect(90, 100, 250, 150, 10);
}