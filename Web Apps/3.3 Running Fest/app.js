let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
} 

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am and your race number: ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
console.log(`You will race at 11.00 am and your race number: ${raceNumber}`);
} else if (age < 18) {
console.log(`You will race at 12.30 pm with ${raceNumber} race number`);
} else {
  console.log(`You should see registration desk with ${raceNumber} race number`)
}
