///<reference path="p5.global-mode.d.ts"/>

let bubbles = [];
function setup() {
	createCanvas(400, 400);
	for (let eachBubble = 0; eachBubble < 5; eachBubble++) {
		var bubble = new Example(random(width), random(height), random(20, 40));
		bubbles.push(bubble);
	}
}

function draw() {
	background(55, 66, 70);
	for (let i = 0; i < bubbles.length; i++) {
		if (bubbles[i].clicked(mouseX, mouseY)) {
			bubbles[i].changeColor(255);
		} else {
			bubbles[i].changeColor(0);
		}
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mousePressed() {
	for (let i = 0; i < bubbles.length; i++) {
		if (bubbles[i].clicked(mouseX, mouseY)) {
			bubbles.splice(i, 1);
		}
	}
}
class Example {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.brightness = 0;
		this.move = function () {
			this.x = this.x + random(5, -5);
			this.y = this.y + random(5, -5);
		}
	}

	show() {
		strokeWeight(5);
		stroke(10);
		fill(this.brightness, 125);
		ellipse(this.x, this.y, this.d, this.d);
	}

	changeColor(bright){
		this.brightness = bright;
	}

	clicked(px, py) {
		let distance = dist(px, py, this.x, this.y);
		return distance <= this.d;
	}
}