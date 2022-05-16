// This is today's temperature in Kelvin
let kelvin = 0;

//This converts the Kelvin to Celsius
let celsius = kelvin - 273;

//This coverts Celsius to Fahrenheit
let fahrenheit = (celsius * (9 / 5) + 32);
// Round down the values
fahrenheit = Math.floor(fahrenheit);

//This converts Celsius to the Newton scale
let newton = (celsius * (33 / 100));
//Round down the value
newton = Math.floor(newton);

console.log(`The temperature today is ${kelvin} degrees Kelvin.`);
console.log(`The temperature today is ${celsius} degrees Celsius.`);
console.log(`The temperature today is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature today is ${newton} degrees Newton.`);