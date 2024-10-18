import { renderTbl } from "./render.js";
import { determineHouseholdPts,determineHouseSizePts } from "./carbonFootprint.js";
import { FORM, FNAME,LNAME,SUBMIT } from "./global.js";
import { saveLS, cfpData} from "./storage.js";



 
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



const start = (... i  ) =>{
  const houseHoldPTS = determineHouseholdPts(i[2]);
  const houseSizePTS = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: i[0],
    lastNme: i[1],
    houseM: i[2],
    houseS:i[3],
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


FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);
 
FORM.addEventListener('submit',e =>{
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt (FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
   } else {
   SUBMIT.textContent = "Form requires first and last name";
   }
   
});
 
//rest operator

// const add2 = function (...a) {
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);



// arrow function
const add2 = a => 2 + a;

const result = add2(100);

//IIFE

const a = 3;

(function(a){
    console.log("inside the function");
    console.log(a);
})(a);