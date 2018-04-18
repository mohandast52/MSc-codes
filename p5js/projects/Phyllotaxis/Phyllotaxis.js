
// https://www.youtube.com/watch?v=KWoJgHFYWxY&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=33

var n = 0;
var c = 4;
function setup() {
	createCanvas(400, 400);
	background(55, 66, 70);
	angleMode(DEGREES);
	colorMode(HSB);
}

function draw() {
	var a = n * 137.6;
	var r = c * sqrt(n);
	var x = r * cos(a) + width / 2;
	var y = r * sin(a) + height / 2;

	noStroke();
	fill(n % 255, 255, 255);
	ellipse(x, y, 5);

	n++;
}
