class Vehicle
{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information() {
        console.log(`Make: ${this.make} \nModel: ${this.model} \nYear: ${this.year}`);
    }
 
}

class Car extends Vehicle
{
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    Information() {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// let car = new Vehicle("Toyota", "Corolla E12", 06);
// car.Information();

let car = new Car("Toyota", "Corolla E12", 06, 5);
car.Information();