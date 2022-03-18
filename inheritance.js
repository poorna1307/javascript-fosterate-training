console.log("Program on inheritance");
// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    
}

// inheriting parent class
class Student extends Person {
constructor(name,pin){
    super(name)
    this.pin=pin;
    }
    greet() {
        console.log(`Hello ${this.name} ${this.pin}`);
    }
}

let student1 = new Student('Jack',001);
student1.greet();