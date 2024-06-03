console.log("madhu");

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    // console.log(numbers.length);
    //console.log(numbers[i] % 3 === 0);
    // if (numbers[i] % 2 === 0) {
    //     evenNumbers.push(numbers[i]);
    // }
// }

//console.log(evenNumbers);


// let numbers1 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers1.length; i++) {
//     console.log(sum += numbers1[i];);
//     sum += numbers1[i];
// }

// console.log("Sum:", sum);

let numbers= [3, 1, 4, 1, 5, 9, 2, 6, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Max:", max);