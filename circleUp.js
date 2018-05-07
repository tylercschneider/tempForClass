class Circle {
	constructor(radius){
		this.radius = radius;
	}
	drawCircle() {
		let circle = document.createElement('div');
		//calculate the diameter aka the height and width
		let diameter = this.calcDiameter();
		//give the circle an id so previously written css will take effect
		circle.setAttribute('id', 'circle');

		//set height and width of circle
		circle.style.height = `${diameter}px`;
		circle.style.width = `${diameter}px`;

		//target space you want to put the circle
		let drawSpace = document.getElementById('drawSpace');
		//append circle to target space
		drawSpace.appendChild(circle);
	}
	calcArea() {
		return this.radius*Math.pi*this.radius;
	}
	calcDiameter() {
		return this.radius*2;
	}
	dataOutput() {
		let diamOut = document.createElement('p');
		let areaOut = document.createElement('p');
		diamOut.textContent

	}
}

let submit = document.getElementById('add');
submit.addEventListener("click", () => {
	let radiusInput = document.getElementById('radius');
	let myCircle = new Circle(radiusInput.value);
	myCircle.drawCircle();
	radiusInput.value = "";
});