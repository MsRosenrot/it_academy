const animal = 'Rabbit';
const isHuman = false;
const numberOfPaws = 4;

// Addition
let addStringAndBoolean = animal+isHuman
let addStringToNum = numberOfPaws+animal
let addNumToBoolean = numberOfPaws+isHuman
// Multiplication
let multStringAndBoolean = animal*isHuman
let multStringAndNum = animal*numberOfPaws
let multNumAndBoolean = numberOfPaws*isHuman
// Division
let divStringByBoolean = animal/isHuman
let divStringByNum = animal/numberOfPaws
let divNumByBoolean = numberOfPaws/isHuman
// Conversion
numberOfPaws.toString()
Boolean(numberOfPaws)
Number(animal)
Boolean(animal)
isHuman.toString()
Number(isHuman)

console.log(`Result of Addition: ${addStringAndBoolean}, ${addStringToNum}, ${addNumToBoolean};
Result of Multiplication: ${multStringAndBoolean}, ${multStringAndNum}, ${multNumAndBoolean}
Result of Division: ${divStringByBoolean}, ${divStringByNum}, ${divNumByBoolean}
Conversion:`, numberOfPaws.toString(), Boolean(numberOfPaws), Number(animal), Boolean(animal), isHuman.toString(), Number(isHuman))