// Operatori aritmetici

let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(b % a);
console.log(a % b);

// Verifica daca un numar este par sau impar folosind %

console.log(10 % 2);
console.log(11 % 2);

console.log(5 * 5 + 5);
console.log(5 * (5 + 5));

// Daca restul impartirii la 2 este mai mare decat 0, numarul este impar, altfel este par.

// ++ adauga 1 ex. ++a sau a++
// -- scade 1 ex. --a sau a--

// Operatori de atribuire

//  acestia salveaza valoarea calculata in avariabile din partea stanga
// a += b; echivalent cu a = a + b;
// a -= b; echivalent cu a = a - b;
// a *= b; echivalent cu a = a * b;
// a /= b; echivalent cu a = a / b;

// a++; echivalent cu a += 1;
// a--; echivalent cu a -= 1;

// Concatenare string-uri folosind +

let nume = 'Nume';
let prenume = 'Prenume';

console.log(nume + ' ' + prenume);

let numePrenume = nume + ' ' + prenume;
console.log(numePrenume);

nume += ' ';
nume += prenume;

console.log(nume);

// Concatenare string si numar

let number = 7;
let name = 'Agent 00';

console.log(name + number);

let stringNumber = '37';

console.log(parseInt(stringNumber) + number);

console.log(5 + 10 + ' Calcul');

// Operatori pentru comparatii

let number1 = 10;
let number2 = 20;
let number3 = 10;

let numberString = '10';

console.log(number1 == number3);
console.log(number1 == number2);

console.log(number1 == numberString);
console.log(number1 === numberString);

console.log(number1 != number3);
console.log(number1 != number2);

console.log(number1 < number2);
console.log(number1 > number3);

console.log(number1 <= number2);
console.log(number1 >= number3);

if (number1 < number3) {
    console.log('Mai mic');
} else {
    console.log('Mai mare sau egal');
}

console.log(number1 <= number3 ? 'Mai mic' : 'Mai mare sau egal');

// Operatori logici

/*
    &&

    true && true => true
    true && false => false
    false && true => false
    false && false => false
*/

if (number1 != number3 && number1 < number2) {
    console.log(true);
} else {
    console.log(false);
}

/*
    ||

    true || true => true
    true || false => true
    false || true => true
    false || false => false
*/

if (number1 != number3 || number1 > number2) {
    console.log(true);
} else {
    console.log(false);
}

/*
    Combinatie de operatori logici
*/

if (number1 <= number3 && !(number1 != number3 || number1 > number2)) {
    console.log(true);
} else {
    console.log(false);
}
