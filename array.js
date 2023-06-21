// acessando pelo index
// let avgTemp = [];

// avgTemp[0] = 33.5;
// avgTemp[1] = 33.6;
// avgTemp[2] = 35;
// avgTemp[3] = 39.2;
// avgTemp[4] = 43;

// console.log(avTemp[3]);

// iteração sobre cada valor do array
let daysOfWeek = [
  "monday",
  "tuesday",
  "wedsney",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  // console.log(daysOfWeek[i]);
}

// calculo do fibonacci
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 2;

for (let i = 3; i < 8; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// console.log(fibonacci);

// iteração sobre cada valor do fibonacci
for (let i = 0; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}

// adição e remoção de cada item
let numbers = [1, 2, 3, 4, 5, 6];

//adiciona no final
numbers.push(7);

//adiciona no inicio
numbers.unshift(-4);

//remove no inicio
numbers.shift();

//remove no final
numbers.pop();

console.log(numbers);
