// Count the occurrences.

// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.

// -----------------------> Solution <-----------------------------

// function counter(text) {
//     const words = text.split(' ');
//     const wordCountMap = new Map();

//     for (const word of words) {
//       if (wordCountMap.has(word)) {
//         wordCountMap.set(word, wordCountMap.get(word) + 1);
//       } else {
//         wordCountMap.set(word, 1);
//       }
//     }

//     return wordCountMap;
//   }

//   const text = "Hey everyone my name is shivam, i hope everyone is super exicted";
//   const wordCount = counter(text);
//   console.log(wordCount);

// *******************************************************************************

// Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. 

// -----------------------> Solution <-----------------------------

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
//   const numbers = [1, 2, 3, 4, 2, 1, 5, 6, 3];
//   const uniqueNumbers = removeDuplicates(numbers);
//   console.log(uniqueNumbers);

// *******************************************************************************

// Swap the values.

// You are working on a project that requires you to swap the values of two variables without using a temporary variable. You decide to write a function that takes two variables as input and swaps their values using destructuring assignment with an array. The function should take the two variables as arguments, destructure them into an array, and then swap their positions within the array. Finally, the function should return an array with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should return an array [10, 5] with x now equal to 10 and y equal to 5.

// -----------------------> Solution <-----------------------------

// function swap(x, y) {
//     if (x < y) {
//         y = y - x
//         x = x + y
//     }
//     else {
//         x = x - y
//         y = y + x
//     }
//     console.log(`x = ${x} y = ${y}`);

// }
// swap(5, 10)

// *******************************************************************************

// Access random elements.

// You are building a program that takes an array of numbers as input and you need to extract the first, second, and last elements of the array. You decide to write a function that can accomplish this task using destructuring assignment with an array. The function should take the array as an argument, destructure it into three variables representing the first, second, and last elements, and then return an array with these three values. For example, if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

// -----------------------> Solution <-----------------------------

// function accessRandom(arr){
//     const [one, two, ...restItems] = arr
//     const popped = restItems.pop()
//     console.log(one, two, popped);

// }
// accessRandom([1, 2, 3, 4, 5])

// *******************************************************************************

// Min and max values.

// You are building a program that needs to find the maximum and minimum values in an array of numbers. You decide to write a function that can accomplish this task by taking an array of numbers as input and using the spread operator with the Math methods max() and min(). The function should return an object with two properties, max, and min, representing the maximum and minimum values in the input array, respectively. For example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.

// -----------------------> Solution <-----------------------------

// function minMaxValue(arr){
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     console.log(`Min Value ${min} Max Value ${max}`);
// }
// minMaxValue([5, 2, 7, 1, 9])

// *******************************************************************************

// Nested Objects.

// Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

// -----------------------> Solution <-----------------------------

// const person = {
//   name: "Mithun",
//   age: 21,
//   address: {
//     street: "B8, Block B, Industrial Area.",
//     city: "Sector 62, Noida",
//     state: "Uttar Pradesh",
//   },
// };
// const {name, age, address: {street, city, state}} = person
// console.log(name , street);

