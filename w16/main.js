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
  const total = houseHoldPTS + houseSizePTS + foodChoicePoints + foodSourcePoints + waterConsumPoints;
  cfpData.push({
    firstName: i[1],
    lastNme: i[2],
    houseM: i[3],
    houseS: i[4],
    foodChoice: i[5],
    foodSource: i[6],
    
   houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodChoicePoints: foodChoicePoints,
    foodSourcePoints: foodSourcePoints,
    waterConsumPoints: waterConsumPoints,
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
    //start(FNAME.value, LNAME.value, parseInt (FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
     parseInt(e.target.water.value),
     hasBothAppliances
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

