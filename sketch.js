let x_position = 0
let x_direction = 'right'
let y_position = 0
let y_direction = 'down'
let speed = 3
let diameter = 100
let angle = 0
let box = 100


function setup() {

createCanvas(1200, 500)
x_position = random(0, width)
y_position = random(0, height)
angleMode(DEGREES)


}

function draw() {
	// strokeWeight(5)
	// // line(x_position, 0, x_position, height)


fill(255, 0 , 0)
noStroke()
rect(0, 0, width, height)

//background drawing
fill(250, 0, 0)
ellipse(98, 274, 120, 120)
fill(0, 250, 0)
ellipse(413, 406, 130, 120)
fill(0, 0, 250)
ellipse(645, 227, 150, 150)
fill(250, 10, 0)
ellipse(1001, 194, 110, 110)
fill(250, 40, 0)
ellipse(1102, 399, 160, 150)
fill(0, 100, 100)
triangle(235, 116, 296, 29, 383, 161)
fill(200, 100, 50)
triangle(688, 459, 795, 266, 920, 450)
stroke(0, 255, 0)
strokeWeight(15)
line(136, 495, 136, 0)
line(477, 0, 477, 490)
line(874, 0, 874, 498)
stroke(0)
strokeWeight(2)


	// translate(x_position, y_position)
	fill(255)
	noStroke()
	rect(0, 0, x_position, height)
	rect(x_position, 0, box, y_position)
	rect(x_position + box, 0, width, height)
	rect(x_position, y_position + box, box, height - (y_position + box))



	if(x_direction == 'right') {
		x_position = x_position + speed
	}

	if (x_direction == 'left') {
		x_position = x_position - speed
	}

	if(y_direction == 'up') {
		y_position = y_position - speed
	}

	if (y_direction == 'down') {
		y_position = y_position + speed
	}
//right wall
	if (x_position >= width - box) {
		x_direction = 'left'
		fill(random(0, 255), random(0, 255), random(0, 255))
	}
//left wall
	if (x_position <= 0) {
		x_direction = 'right'
		fill(random(0, 255), random(0, 255), random(0, 255))
	}
//top wall
	if (y_position <= 0) {
		y_direction = 'down'
		fill(random(0, 255), random(0, 255), random(0, 255))
	}
//bottom wall
	if (y_position >= height - box) {
		y_direction = 'up'
		fill(random(0, 255), random(0, 255), random(0, 255))
	}

stroke(0)
strokeWeight(2)
noFill()
rect(0, 0, width, height)




}

	function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}