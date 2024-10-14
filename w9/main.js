import { renderTbl } from "./render.js";
import { determineHouseholdPts,determineHouseSizePts } from "./carbonFootprint.js";
import { FORM } from "./global.js";
import { saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");

 
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
renderTbl(cfpData);

function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};


firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);
 
FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastNme = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNmeIsValid = lastNameEl.value !== '';
   if (firstNameIsValid && lastNmeIsValid) {
    submitEl.textContent = '';
    const houseHoldMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastNme, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
   } else {
   submitEl.textContent = "Form requires first and last name";
   }
   
});



