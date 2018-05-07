class Person {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log("Nom, Nom");
	}
	speak() {
		console.log(`${this.name} says Hello!`);
	}
}
class Student extends Person {
	constructor(name) {
		super(name);

	}
	speak() {
		console.log(`A friendly student named ${this.name} says hello!`);
	}
}

let tim = new Person("Tim");
let luke = new Student("Luke");
tim.speak();
tim.eat();
luke.speak();
luke.eat();