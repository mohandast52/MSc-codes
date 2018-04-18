var ball = {
	diamater : 30,
	xAxis : 0,
	yAxis : 0,
	xSpeed : 3, 
	ySpeed : 4
};
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(55, 66, 70);
	rectMode(CENTER);
	fill(2, 234, 217);
	noStroke();
	ellipse(ball.xAxis, ball.yAxis, ball.diamater, ball.diamater);

	if (ball.xAxis > (width - ball.diamater / 2)) {
		ball.xSpeed = -3;
	} else if (ball.xAxis < (ball.diamater / 2)) {
		ball.xSpeed = 3;
	}

	if(ball.yAxis > (width - ball.diamater / 2)){
		ball.ySpeed = -4;
	} else if(ball.yAxis < (ball.diamater / 2)){
		ball.ySpeed = 4;
	}
	ball.yAxis +=ball.ySpeed;
	ball.xAxis += ball.xSpeed;
}