import { PETS_TABLE, ERROR_MESSAGE } from "./global.js";

const renderTable = (petsData) => {
  const petsTable = PETS_TABLE;
  const petsTableBody = document.getElementById("petsTableBody");

  petsTableBody.innerHTML = "";

  if (petsData.length === 0) {
    petsTable.style.display = "none";
    ERROR_MESSAGE.textContent = "No pets to display.";
    ERROR_MESSAGE.style.display = "block";
    return;
  }

  petsTable.style.display = "table";
  ERROR_MESSAGE.style.display = "none";

  petsData.forEach((pet, index) => {
    const row = document.createElement("tr");

    const petNameCell = document.createElement("td");
    petNameCell.textContent = pet.name;

    const petMoodCell = document.createElement("td");
    petMoodCell.textContent = pet.mood;

    const petTreatTimeCell = document.createElement("td");
    petTreatTimeCell.textContent = pet.treatTime;

    const petSizeCell = document.createElement("td");
    petSizeCell.textContent = pet.size;

    const actionsCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.setAttribute("data-index", index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.setAttribute("data-index", index);

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(petNameCell);
    row.appendChild(petMoodCell);
    row.appendChild(petTreatTimeCell);
    row.appendChild(petSizeCell);
    row.appendChild(actionsCell);

    const decisionMessageCell = document.createElement("td");
    const decisionMaker = new DecisionMaker(
      pet.name,
      pet.mood,
      pet.treatTime,
      pet.size
    );
    decisionMessageCell.textContent = decisionMaker.getDecisionMessage();
    row.appendChild(decisionMessageCell);

    petsTableBody.appendChild(row);

    editButton.addEventListener("click", () => editPet(index));
    deleteButton.addEventListener("click", () => deletePet(index));
  });
};

export { renderTable };
