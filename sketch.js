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
stroke(247, 194, 94)
strokeWeight(40)
line(0, 20, 1200, 20)
stroke(237, 168, 199)
line(0, 60, 1200, 60)
stroke(209, 247, 94)
line(0, 100, 1200, 100)
stroke(196, 245, 233)
line(0, 140, 1200, 140)
stroke(240, 239, 175)
line(0, 180, 1200, 180)
stroke(179, 175, 240)
line(0, 220, 1200, 220)
stroke(175, 210, 240)
line(0, 260, 1200, 260)
stroke(240, 175, 180)
line(0, 300, 1200, 300)
stroke(255, 242, 156)
line(0, 340, 1200, 340)
stroke(128, 194, 105)
line(0, 380, 1200, 380)
stroke(200, 247, 240)
line(0, 420, 1200, 420)
stroke(225, 245, 218)
line(0, 460, 1200, 460)
stroke(207, 206, 240)
line(0, 500, 1200, 500)
stroke(0, 255, 0)
strokeWeight(15)
line(136, 495, 136, 0)
line(477, 0, 477, 490)
line(874, 0, 874, 498)
line(136, 495, 136, 0)
line(477, 0, 477, 490)
stroke(255, 0, 187)
line(874, 0, 874, 498)
line(308, 0, 308, 500)
line(660, 0, 660, 500)
line(1050, 0, 1050, 500)
stroke(0)
strokeWeight(1)
fill(255, 0, 0)
ellipse(98, 274, 120, 120)
fill(0, 255, 0)
ellipse(413, 406, 130, 120)
fill(0, 0, 255)
ellipse(645, 227, 150, 150)
fill(255, 0, 0)
ellipse(1001, 194, 110, 110)
fill(0, 255, 0)
ellipse(1102, 399, 160, 150)
fill(0, 0, 255)
triangle(235, 116, 296, 29, 383, 161)
fill(255, 0, 0)
triangle(688, 459, 795, 266, 920, 450)

stroke(0)
strokeWeight(2)


//mask	
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


//canvas stroke
stroke(0)
strokeWeight(2)
noFill()
rect(0, 0, width, height)



}

	function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}