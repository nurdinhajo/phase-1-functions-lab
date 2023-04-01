// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
 const hqStreetNumber = 42
 return Math.abs(streetNumber - hqStreetNumber)
}

function distanceFromHqInFeet(location) {
 const headquarters = 42
 const feetPerBlock = 264
 let distanceInFeet = Math.abs(location - headquarters) * feetPerBlock;
 return distanceInFeet;
}

function distanceTravelledInFeet(start, end) {
 const feetPerBlock = 264;
 let distanceInFeet = Math.abs(end - start)* feetPerBlock
 return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
 const distance = distanceTravelledInFeet(start, destination);
 let farePrice;

 if (distance <= 400) {
   farePrice = 0;
 } else if (distance <= 2000) {
   farePrice = (distance - 400) * 0.02;
 } else if (distance <= 2500) {
   farePrice = 25;
 } else {
   return 'cannot travel that far'
 }

 return farePrice;
}
