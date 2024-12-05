import {
  FORM,
  PET_NAME,
  PET_SIZE,
  TREAT_TIME,
  MOOD,
  PET_AGE,
  SUBMIT,
  ERROR_MESSAGE,
  PETS_TABLE,
} from "./global.js";
import { saveData, getData } from "./storage.js";
import { DecisionMaker } from "./decisionMaker.js";

let petsData = getData();

const renderTable = () => {
  const petsTable = document.getElementById("petsTable");
  const petsTableBody = document.getElementById("petsTableBody");

  petsTableBody.innerHTML = "";

  if (petsData.length === 0) {
    petsTable.style.display = "none";
    return;
  }

  petsTable.style.display = "table";

  petsData.forEach((pet, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${pet.name}</td>
      <td>${pet.mood}</td>
      <td>${pet.treatTime}</td>
      <td>${pet.size}</td>
      <td>${pet.age}</td> 
      <td>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;

    petsTableBody.appendChild(row);

    const editButton = row.querySelector(".edit-btn");
    const deleteButton = row.querySelector(".delete-btn");

    if (editButton) {
      editButton.addEventListener("click", () => editPet(index));
    }

    if (deleteButton) {
      deleteButton.addEventListener("click", () => deletePet(index));
    }

    const decisionMaker = new DecisionMaker(
      pet.name,
      pet.mood,
      pet.treatTime,
      pet.size,
      pet.age
    );
    const decisionMessage = decisionMaker.getDecisionMessage();

    const decisionCell = document.createElement("td");
    decisionCell.textContent = decisionMessage;
    row.appendChild(decisionCell);
  });
};

const addPet = (event) => {
  event.preventDefault();

  const name = PET_NAME.value.trim();
  const mood = MOOD.value;
  const treatTime = TREAT_TIME.value;
  const size = PET_SIZE.value;
  const age = PET_AGE.value.trim();

  if (!name || !mood || !treatTime || !size || !age) {
    ERROR_MESSAGE.textContent = "All fields are required!";
    ERROR_MESSAGE.style.display = "block";
    return;
  }

  const newPet = { name, mood, treatTime, size, age };
  petsData.push(newPet);

  saveData(petsData);

  renderTable();

  FORM.reset();
  ERROR_MESSAGE.style.display = "none";
};

const editPet = (index) => {
  const pet = petsData[index];

  PET_NAME.value = pet.name;
  MOOD.value = pet.mood;
  TREAT_TIME.value = pet.treatTime;
  PET_SIZE.value = pet.size;
  PET_AGE.value = pet.age;

  SUBMIT.textContent = "Update Pet";

  FORM.removeEventListener("submit", addPet);
  FORM.addEventListener("submit", (event) => updatePet(event, index));
};

const updatePet = (event, index) => {
  event.preventDefault();

  const name = PET_NAME.value.trim();
  const mood = MOOD.value;
  const treatTime = TREAT_TIME.value;
  const size = PET_SIZE.value;
  const age = PET_AGE.value.trim();

  if (!name || !mood || !treatTime || !size || !age) {
    ERROR_MESSAGE.textContent = "All fields are required!";
    ERROR_MESSAGE.style.display = "block";
    return;
  }

  petsData[index] = { name, mood, treatTime, size, age };
  saveData(petsData);

  renderTable();

  FORM.reset();
  ERROR_MESSAGE.style.display = "none";
  SUBMIT.textContent = "Add Pet";

  FORM.removeEventListener("submit", updatePet);
  FORM.addEventListener("submit", addPet);
};

const deletePet = (index) => {
  petsData.splice(index, 1);
  saveData(petsData);
  renderTable();
};

FORM.addEventListener("submit", addPet);

renderTable();
