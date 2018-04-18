
let bubbles = [];
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(55, 66, 70);
	for (let eachBubble = 0; eachBubble < bubbles.length; eachBubble++) {
		bubbles[eachBubble].move();
		bubbles[eachBubble].show();
	}
}
function mousePressed(){
	let bubble = new Example(mouseX, mouseY, random(10,40));
	bubbles.push(bubble);
}
class Example {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.move = function () {
			this.x = this.x + random(5, -5);
			this.y = this.y + random(5, -5);
		}
	}

	show() {
		strokeWeight(5);
		noStroke();
		fill(255, 1, 12);
		ellipse(this.x, this.y, this.d, this.d);
	}
}