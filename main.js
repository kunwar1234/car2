canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_x = 10;
car_1_y = 10;
car_1_image = "car1.png";

car_2_width = 120;
car_2_height = 70;
car_2_x = 20;
car_2_y = 20;
car_2_image = "pc78gnkzi.png";

background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car1_imgTag = new Image();
	car1_imgTag.onload = uploadcar1;
	car1_imgTag.src = car1_image;

	car2_imgTag = new Image();
	car2_imgTag.onload = uploadcar2;
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		car1up();
		console.log("up");
	}
	if (keyPressed == '40') {
		car1down();
		console.log("down");
	}
	if (keyPressed == '37') {
		car1left();
		console.log("left");
	}
	if (keyPressed == '39') {
		car1right();
		console.log("right");
	}
	if (keyPressed == '87') {
		car2up();
		console.log("up");
	}
	if (keyPressed == '83') {
		car2down();
		console.log("down");
	}
	if (keyPressed == '65') {
		car2left();
		console.log("left");
	}
	if (keyPressed == '68') {
		car2right();
		console.log("right");
	}
}

function car1up() {
	if (car1_y >= 0) {
		car1_y = car1_y - 10;
		uploadcar1();
		uploadBackground();
	}
}
function car1down() {
	if (rover_y <= 500) {
		rover_y = rover_y + 10;
		uploadBackground();
		uploadcar1();
	}
}
function car1left() {
	if (car1_x >= 0) {
		car1_x = car1_x - 10;
		uploadBackground();
		uploadcar1();
	}
}
function car1right() {
	if (car1_x <= 700) {
		car1_x = car1_x + 10;
		uploadBackground();
		uploadcar1();
	}
}
function car2up() {
	if (car2_y >= 0) {
		car2_y = car2_y - 10;
		uploadBackground();
		uploadcar2();
	}
}
function car2down() {
	if (car2_y <= 500) {
		car2_y = car2_y + 10;
		uploadBackground();
		uploadcar2();
	}
}
function car2left() {
	if (car2_x >= 0) {
		car2_x = car2_x - 10;
		uploadBackground();
		uploadcar2();
	}
}
function car2right() {
	if (car2_x <= 700) {
		car2_x = car2_x + 10;
		uploadBackground();
		uploadcar2();
	}
}


