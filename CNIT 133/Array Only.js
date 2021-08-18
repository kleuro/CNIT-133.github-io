// 1- .push() //
let names = ["Nick", "Chris", "Ben"];
names.push("Rebecca");
console.log(names);
//names =["Nick","Chris","Ben","Rebecca"];

// 2- .pop //
let cities = ["New York", "Los Angeles", "Atlanta"];
cities.pop();
console.log(cities);
// cities =["New York", "Los Angeles"];

// 3- .shift //
let ages = [30, 26, 24, 20];
ages.shift();
console.log(ages);
// ages = [26, 24, 20]

// 4-.unshift // 
let ages = [30, 26, 24, 20];
ages.unshift(60);
console.log(ages);
// ages = [60, 30, 26, 24, 20];

// 5- .splice // 
let animals = ["cat", "dog", "shark", "horse", "alligator"];
animals.aplice(1, 2);
// remove 2 elements at index 1, including index 1 
// so what's being"spliced" is "dog" and "shark"
console.log(animals);
//animals = ["cat", "horse", "alligator"]; 

// to add elements // 
let animals = ["cat", "dog", "shark", "horse", "alligator"];
animals.splice(2, 0, "zebra");
// at index 2,splice(or remove) 0 elements, add "zebra"
animals = ["cat", "dog", "zebra", "shark", "horse", "alligator"];

// to replace elements //
let animals = ["cat", "dog", "shark", "horse", "alligator"];
animals.splice(2, 1, "zebra");
// an index 2, replace 1 element ("shark") with "zebra" 
// at index 2, splice (or remove) 0 elements, add "zebra"
animals = ["cat", "dog", "zebra", "horse", "alligator"];

// 6- .slice //
let colors = ["Blue", "Red", "Orange", "Purple", "Pink"];
let lessColors = colors.slice(1, 3);
console.log(lessColors);
// colors =["Red", "Orange"];

let colors = ["Blue", "Red", "Orange", "Purple", "Pink"];
let lessColors = colors.slice(2);
// colors[2] = "Orange" which now becomes the 1st element 
console.log(lessColors);
// lessColors =["Orange", "Purple", "Pink"];

// 7-.forEach // 
let miles = [1, 3, 5, 10];
let moreMiles = [];
miles.forEach(element => moreMiles.push(element + 10))
console.log(moreMiles);
// [11, 13, 15, 20];

// 8-.map // 
let population = [200, 600, 170, 100];
let doublePopulation = population.map(element => element * 2);
// we are assing=ing the result of mapping to doublePopulation
// we would not be able to do this with the .forEach method
// because it returns undefined 
console.log(doublePopulation);
// [400, 1200, 340, 200]

// 9- .reduce // 
let ticketPrices = [99.54, 56.43, 122.94];
let totalCostOfTickets = ticketPrices.reduce((total, amount) => total + amount)
    // the accumulator is total; it's holding the new values as you add
    // the amount is the next ticket price. 
totalCostOfTickets = 278.91

// 10- .filter // 
let names = ["Rebecca", "Chris", "Ben", "Rachel"];
names = names.filter(name => name[0] === "R")
    // this is loopingthrough each name and checking if 
    // this first index of the string (aka first letter) is "R". 
console.log(names);
// names = ["Rebecca", "Rachel"];

let ages = [16, 21, 26, 14];
ages = ages.filter(age => age >= 21)
    // this is looping through each age and checking if
    // the value is greater then or equal to 21. 
console.log(ages);
// ages =[21, 26];