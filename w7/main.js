import { renderTbl } from "./render.js";
import { determineHouseSizePts,determineHouseholdPts } from "./carbonFootPrint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
const tbody = document.getElementById("output");




function start(firstName, lastNme, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    firstName: firstName,
    lastNme: lastNme,
  });
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastNme = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastNme, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
