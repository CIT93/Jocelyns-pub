const exerciseForm = document.getElementById("form");

exerciseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const exerciseType = document.getElementById("typeOfExercise").value;
  const repetitions = document.getElementById("reps").value;
  const duration = document.getElementById("time").value;

  displayStartMessage(exerciseType, repetitions, duration);

  setTimeout(function () {
    displayEndMessage(exerciseType);
  }, 2000);
});

function displayStartMessage(typeOfExercise, reps, time) {
  const startMessage = document.createElement("p");
  startMessage.textContent = `Your chosen exercise is: ${typeOfExercise} and the goal is ${reps} reps in ${time} mins.`;
  document.getElementById("message").appendChild(startMessage);
  console.log("Starting exercise...");
}

function displayEndMessage(typeOfExercise) {
  const endMessage = document.createElement("p");
  endMessage.textContent = `Time's up for ${typeOfExercise} exercise.`;
  document.getElementById("message").appendChild(endMessage);
  console.log("Exercise ended.");
}
