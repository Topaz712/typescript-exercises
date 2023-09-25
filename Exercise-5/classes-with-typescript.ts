/* Create a class named Student in TypeScript. The class should define certain properties and methods.
studentName: string
studentAge: number
studentGrade: number */

//The constructor should take in the above three properties when instantiating a new student object.

class Student {
  // Define the properties here
  studentName: string;
  studentAge: number;
  studentGrade: number;

  // Define the constructor here
  constructor(name: string, age: number, grade: number) {
  this.studentName = name;
  this.studentAge = age;
  this.studentGrade = grade;

  }
  // Define the displayInfo method here
  displayInfo(): void {
    console.log(`${this.studentName} is ${this.studentAge} years old and their grade is ${this.studentGrade}% out of 100 percent`);
  }
  // Define the isPassing method here
  isPassing(gradeThreshold: number): boolean {
    return this.studentGrade >= gradeThreshold;
  }
}
// Instantiate a new student object and call the methods to test your class

const topaz = new Student("Topacio", 150, 85);
topaz.displayInfo();

const passOrNoPass = topaz.isPassing(60);
console.log(`Is the student passing? ${passOrNoPass ? 'yes' : 'no'}`);
