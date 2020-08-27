// Forecast today in Kelvin
const kelvin = 293;
// Celcius subtracing 273 from kelvin
const celcius = kelvin - 273;
// Fahrenheit convert by celcius
let fahrenheit = celcius * (9/5) + 32;
/* Because the result decimal, convert by math floor */
fahrenheit = Math.floor(fahrenheit);

//Print degrees on Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);