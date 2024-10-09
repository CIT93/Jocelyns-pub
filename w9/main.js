import { renderTbl } from "./render.js";
import { determineHouseholdPts,determineHouseSizePts } from "./carbonFootprint.js";
import { FORM } from "./global.js";
import { saveLS, cfpData} from "./storage.js";



 
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

const validateField = event => {
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


document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);
 
FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastNme = document.getElementById('lastName').value;
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNmeIsValid = document.getElementById('lastName').value !== '';
  if (firstNameIsValid && lastNmeIsValid) {
  alert('Form is valid. You can proceed with submitting the form to the server.');
    const houseHoldMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastNme, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
   }
   
});



