//Determines how many sheets available
const numRolls = 10;
const sheetsOnRoll = 500;

const numSheets = numRolls * sheetsOnRoll;

//Determines how many sheets used in a day
const tripsPerDay = 3;
const wipesPerTrip = 3;
const sheetsPerWipe = 3;
const peopleInHouse = 6;

const numUsedPerDay = sheetsPerWipe * wipesPerTrip * tripsPerDay * peopleInHouse;

//Determines how many days of TP left
const daysLeft = numSheets/numUsedPerDay;
const monthsLeft = daysLeft/30;
const yearsLeft = monthsLeft/12;

function printInfo() {
    console.log(`Days: ${daysLeft}`);
    console.log(`Months: ${monthsLeft}`);
    console.log(`Years: ${yearsLeft}`);
}

printInfo();