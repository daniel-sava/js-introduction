/*
    Tipuri de date obiecte
*/

// Array cu numere

let numbersArray = [1, 5, 12, 33, -90];

console.log(numbersArray);
console.log(typeof numbersArray);

console.log(numbersArray[0]);
console.log(typeof numbersArray[0]);

// Array cu string-uri

let stringsArray = ['I', 'T', 'S', 'c', 'h', 'o', 'o', 'l'];

console.log(stringsArray);
console.log(typeof stringsArray);

console.log(stringsArray[2]);
console.log(typeof stringsArray[2]);

// Array cu valori mixe

let mixedArray = [3, 'A', 7, 8, 'B'];

console.log(mixedArray);
console.log(typeof mixedArray);

console.log(typeof mixedArray[0]);
console.log(typeof mixedArray[1]);

// Date

let date = new Date();
console.log(date);

let now = Date.now();
console.log(now);

// Perechi key => value

let brand = 'BMW';
let year = 2022;
let hp = 440;
let isHybrid = true;

let bmw = {
    brand: 'BMW',
    year: 2022,
    hp: 440,
    isHybrid: true,
};

console.log(bmw);
console.log(typeof bmw);

console.log(bmw.year);
console.log(typeof bmw.year);

bmw.isHybrid = false;
console.log(bmw);
