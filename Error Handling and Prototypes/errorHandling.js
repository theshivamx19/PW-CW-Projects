// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

// -------------------------> Solution <-----------------------------

// function convertToNumber(str) {
//     try {
//         const number = Number(str);
//         if (isNaN(number)) {
//             throw new Error("Invalid number");
//         }
//         return number;
//     } catch (error) {
//         return "Invalid number";
//     }
// }
// console.log(convertToNumber("12"));



// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.

// function getPerson(person) {
//     try {
//       if (typeof person !== 'object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
//         throw new Error('Invalid parameter type');
//       }
//       return `Name: ${person.name}, Age: ${person.age}`;
//     } catch (error) {
//       return error.message;
//     }
//   }
//   const person1 = { name: 'Shivam', age: 22 };
//   console.log(getPerson(person1));


//   3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

// class Car {
//     constructor(company, model, year) {
//         this.company = company
//         this.model = model
//         this.year = year
//     }
//     getDescription() {
//         console.log(this.company, this.model, this.year);
//     }
// }
// const myCar = new Car('TATA', 'XUV', 2010)
// myCar.getDescription()

// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.

// class Employee {
//     constructor(name, position, salary) {
//         this.name = name
//         this.position = position
//         this.salary = salary

//     }
//     getSalary() {
//         return `Employee Salary is ${this.salary}`
//     }
// }

// const EmployeeDetails = new Employee('Shivam', 'Software Engineer', 150000)
// console.log(EmployeeDetails.getSalary());


// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

// class Person {
//     constructor(name = 'Unknown', age = 0){
//         this.name = name 
//         this.age = age
//     }
//     getDetails(){
//         return `Name : ${this.name} Age : ${this.age}`
//     }
// }

// const getPerson1 = new Person()
// const getPerson2 = new Person('Shivam', 22)
// console.log(getPerson1.getDetails());
// console.log(getPerson2.getDetails());


// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

// class Calculator {
//     static add(num1, num2) {
//         this.num1 = num1
//         this.num2 = num2
//         return `Sum is : ${this.num1 + this.num2}`
//     }
// }

// const calculate = Calculator.add(5, 6)
// console.log(calculate);

// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.

// function Student(name) {
//     this.name = name;
//   }
  
//   Student.prototype.printDetails = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
//   const student = new Student('Mithun');
//   student.printDetails();
  
// 9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

// function numberChecker(numbers) {
//     return function(number) {
//       return numbers.includes(number);
//     };
//   }
  
//   const checkNumber = numberChecker([1, 2, 3, 4, 5]);
//   console.log(checkNumber(3));

  
//   10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.

// function filterByCategory(products) {
//     return function(category) {
//       return products.filter(product => product.category === category);
//     };
//   }
  
//   const products = [
//     { name: 'Detol', category: 'Soap' },
//     { name: 'Colgate', category: 'Toothpaste' },
//     { name: 'Lux', category: 'Soap' },
//     { name: 'Coconut', category: 'Oil' },
//   ];

//   const filtered = filterByCategory(products);
//   const categoryAProducts = filtered('Soap');
//   console.log(categoryAProducts);
  
  