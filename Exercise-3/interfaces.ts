//Add another method in the interface called brake and implement it in the car object.

interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(): void {
      console.log(`The ${this.brand} is braking`);
    }
}

car.accelerate();
car.brake();