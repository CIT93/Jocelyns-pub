import { renderTbl } from "./render.js";
import {
  determineHouseholdPts,
  determineHouseSizePts,
} from "./carbonFootprint.js";
import { FORM, FNAME, LNAME, SUBMIT, WATER, BOTH } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
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

const determineRecycleItems = (e) => {
  const numberChecked = document.querySelectorAll(`.recycle:checked`).length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.food.checked,
    recycledPoints: 24 - numberChecked * 4,
  };
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  //const recycleObj = determineRecycleItems(e);
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";

    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
      e.target.water.value,
      e.target.dish_washer.checked
        ? parseInt(e.target.water.value) * 2
        : parseInt(e.target.water.value),
      e.target.dish_washer.checked,
      parseInt(e.target.purchases.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.vehicle.value),
      parseInt(e.target.publictrans.value),
      parseInt(e.target.flights.value)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disable = false;
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});
WATER.addEventListener("change", (e) => {
  if (parseInt(WATER.value) === 0) {
    BOTH.disable = true;
  } else {
    BOTH.disable = false;
  }
});
