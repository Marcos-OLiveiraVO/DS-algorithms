// acessando pelo index
let avgTemp = [];

avgTemp[0] = 33.5;
avgTemp[1] = 33.6;
avgTemp[2] = 35;
avgTemp[3] = 39.2;
avgTemp[4] = 43;

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

// // adição e remoção de cada item
// // let numbers1 = [1, 2, 3, 4, 5, 6];

// //adiciona no final
// numbers.push(7);

// //adiciona no inicio
// numbers.unshift(-4);

// //remove no inicio
// numbers.shift();

// //remove no final
// numbers.pop();

// console.log(numbers);

//remove a partir de uma posição especifica
let numbers = [0, 2, 3, 4, 5];

//apartir do primeiro elemento, vai remover determinados numeros
// numbers.splice(1, 1);
// numbers.splice(1, 0, 3, 4, 5);

// console.log(numbers);

// matrizes bidimensionais, arrays bidimensionais e como iterar sobre elas
// let avgTempWeek = [];

// let avgTempWeek1 = [33, 36, 34, 35, 32, 31, 26];
// let avgTempWeek2 = [36, 29, 31, 35, 33, 39, 42];

// avgTempWeek[0] = avgTempWeek1;
// avgTempWeek[1] = avgTempWeek2;

// for (let i = 0; i < avgTempWeek.length; i++) {
//   for (let j = 0; j < avgTempWeek[i].length; j++) {
//     console.log(avgTempWeek[i][j]);
//   }
// }

// matrizes tridimensionais e como iterar sobre elas

// let month = [];

// let firstWeeks = [];
// let lastWeeks = [];

// let avgTempWeek1 = [33, 36, 34, 35, 32, 31, 26];
// let avgTempWeek2 = [36, 29, 31, 35, 33, 39, 42];

// let avgTempWeek3 = [37, 23, 15, 22, 15, 14, 26];
// let avgTempWeek4 = [31, 38, 39, 33, 35, 22.2, 20];

// firstWeeks = [avgTempWeek1, avgTempWeek2];
// lastWeeks = [avgTempWeek3, avgTempWeek4];

// month = [firstWeeks, lastWeeks];

// for (let x = 0; x < month.length; x++) {
//   for (let y = 0; y < month[x].length; y++) {
//     for (let z = 0; z < month[x][y].length; z++) {
//       console.log(month[x][y][z]);
//     }
//   }
// }
