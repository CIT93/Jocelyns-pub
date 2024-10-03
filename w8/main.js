import { renderTbl } from "./render.js";
import { determineHouseholdPts,determineHouseSizePts } from "./carbonFootprint.js"

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];





function start(firstName, lastNme, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastNme: lastNme,
    houseM: houseHoldMembers,
    houseS:houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastNme = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastNme, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});


// I unintentionally overlooked a section and only noticed it after it was too late :(