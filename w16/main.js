import { renderTbl } from "./render.js";
import {
  determineHouseholdPts,
  determineHouseSizePts,
} from "./carbonFootprint.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

// const start = (firstName, lastNme, houseHoldMembers, houseSize) =>{
//   const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: firstName,
//     lastNme: lastNme,
//     houseM: houseHoldMembers,
//     houseS:houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// }

const start = (...i) => {
  const houseHoldPTS = determineHouseholdPts(i[2]);
  const houseSizePTS = determineHouseSizePts(i[3]);
  const foodChoicePoints = determinefoodChoicePoints(i[4]);
  const foodSourcePoints = determinefoodSourcePoints(i[5]);
  const waterConsumPoints = determinewaterConsumPoints(i[6]);
  const householdPurchasesPoints = (i[7]);
  const total = houseHoldPTS + houseSizePTS + foodChoicePoints + foodSourcePoints + waterConsumPoints + householdPurchasesPoints;
  cfpData.push({
    firstName: i[0],
    lastNme: i[1],
    houseM: i[2],
    houseS: i[3],
    foodChoice: i[4],
    foodSource: i[5],
    waterConsum: i[6],
    householdPurchases: i[7],
   houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodChoicePoints: foodChoicePoints,
    foodSourcePoints: foodSourcePoints,
    waterConsumPoints: waterConsumPoints,
    householdPurchasesPoints: householdPurchasesPoints,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";

    const hasBothAppliances = e.target.hasBothAppliances.checked;
    const householdPurchases = parseInt(e.target.householdPurchases.value);
    //start(FNAME.value, LNAME.value, parseInt (FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
     parseInt(e.target.water.value),
     hasBothAppliances,
     householdPurchases
    );
    //  fpObj.houseHoldPoints();
    //  fpObj.houseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});

