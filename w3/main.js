// function determineHouseholdPts(numberInHousehold) {
  // console.log("Inside the function")
  // if (numberInHousehold === 1) {
    // carbonFootprintPoints = carbonFootprintPoints + 14;
 // } else if (numberInHousehold === 2) {
 //   carbonFootprintPoints = carbonFootprintPoints + 12;
 // } else if (numberInHousehold === 3) {
  //  carbonFootprintPoints = carbonFootprintPoints + 10;
 // } else if (numberInHousehold === 4) {
 //   carbonFootprintPoints = carbonFootprintPoints + 8;
 // } else if (numberInHousehold === 5) {
 //   carbonFootprintPoints = carbonFootprintPoints + 6;
 // } else if (numberInHousehold === 6) {
 //   carbonFootprintPoints = carbonFootprintPoints + 4;
  // } else if (numberInHousehold > 6) {
 //   carbonFootprintPoints = carbonFootprintPoints + 2;
  // }
  // console.log(
 //   `Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`
 // );
// }
// let carbonFootprintPoints = 0;
// const numberInHousehold = 3;

// global scope

// determineHouseholdPts(3);
// determineHouseholdPts(4);

// i forgot to commit when i setup for week 3 and now im trying to commit for functions








function determineHouseSizePoints(houseSize) {
    console.log("Inside the function");

    
    if (houseSize === "largeHouse") {
        carbonFootprintPoints = carbonFootprintPoints +10;
    } else if (houseSize === "mediumHouse") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "smallHouse") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    } 
        

    console.log(`Based on the house size '${houseSize}', the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;

determineHouseSizePoints("smallHouse");