
// https://www.youtube.com/watch?v=KkyIDI6rQJI&index=4&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH

var drops = [];
var numberOfDrops = 200;
function setup() {
	createCanvas(400, 400);

	for (let i = 0; i < numberOfDrops; i++) {
		drops[i] = new Drop(100, 100, 15);
	}
}

function draw() {
	background(55, 66, 70);
	for (let i = 0; i < numberOfDrops; i++) {
		drops[i].show();
		drops[i].play();
	}
}

class Drop {

	constructor(x, y, h) {
		this.z = random(0, 20); // z-axis to get some 3d effect
		this.x = random(width);
		this.y = random(-500, -100);
		this.speed = map(this.z, 0, 20, 4, 8);
		this.h = h;
	}
	show() {

		strokeWeight(map(this.z, 0, 20, 1, 6)); // stroke size depends on z-axis
		// means heigherStroke = fast drop
		stroke(215, 84, 255);
		line(this.x, this.y, this.x, this.y + this.h);
	}
	play() {
		this.y = this.y + this.speed;
		if (this.y > width) {
			this.y = random(-500, -100);
			this.speed = map(this.z, 0, 20, 4, 8);
		}
	}
}