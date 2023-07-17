// E@ Write a function called "addNumAer)" that take) two numAer) a) ar3ument) and return) their )um. 'all the
// function Aefore it i) declared to demon)trate hoi)tin3@ 

// --------------------------> Solution <------------------------

// function addNumbers(a, b) {
//   return a + b;
// }
// const num1 = 10;
// const num2 = 2;

// const sum = addNumbers(num1, num2);
// console.log(sum);


// &@ Write a function called "multiplyNumAer)" that take) two numAer) a) ar3ument) and return) their product.
// !)e function expre))ion) to define the function and call the function Aefore it i) declared to demon)trate
// hoi)tin3@

// --------------------------> Solution <------------------------

// const multiplyNumbers = function(a, b) {
//     return a * b;
//   };
  
//   const num1 = 5;
//   const num2 = 10;
  
//   const product = multiplyNumbers(num1, num2);
//   console.log(product);

// @ Write a function that take) two numAer) a) ar3ument) and return) their )um. Declare a variaAle in)ide the
// function u)in3 the var keyword and lo3 it) value to the con)ole Aefore it i) a))i3ned a value to demon)trate
// variaAle hoi)tin3@

// --------------------------> Solution <------------------------

// function addNumbers(a, b) {
//     console.log(myVar);
//     var myVar;
//     myVar = 10;
//     return a + b + myVar;
//   }
  
//   const num1 = 5;
//   const num2 = 22;
  
//   const sum = addNumbers(num1, num2);
//   console.log(sum); 
  

// 2@ Declare three variaAle), one u)in3 let, one u)in3 var, and one u)in3 con)t, all in)ide a Alock )cope. A))i3n
// them value) and lo3 their value) to the con)ole Aefore and after they are declared to demon)trate variaAle
// hoi)tin3@

// --------------------------> Solution <------------------------
// {
//     console.log(myVar);
  
//     let myLet = "Hello";
//     var myVar = "Everyone";
//     const myConst = "$";
    
//     console.log(myLet); // Output: Hello
//     console.log(myVar); // Output: Everyone
//     console.log(myConst); // Output: $
  
//     console.log(myVar); // Output: Everyone
//   }
  
//   console.log(myVar); // Output: Everyone
//   console.log(myLet); // Output: ReferenceError: myLet is not defined
//   console.log(myConst); // Output: ReferenceError: myConst is not defined
  
// (@ Declare a variaAle u)in3 let in)ide a Alock )cope and attempt to lo3 it) value to the con)ole Aefore it i)
// a))i3ned a value to demon)trate the temporal dead zone.

// --------------------------> Solution <------------------------

// {
//     console.log(myVar); // Output: ReferenceError: myVar is not defined
  
//     let myVar;
//     console.log(myVar); // Output: undefined
  
//     myVar = 10;
//     console.log(myVar); // Output: 10
//   }
  
//   console.log(myVar); // Output: ReferenceError: myVar is not defined
  