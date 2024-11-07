const exerciseForm = document.getElementById("form");
const exerciseTypeInput = document.getElementById("typeOfExercise");
const repetitionsInput = document.getElementById("reps");
const durationInput = document.getElementById("time");
const messageContainer = document.getElementById("message");

exerciseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const exerciseType = exerciseTypeInput.value;
  const repetitions = repetitionsInput.value;
  const duration = durationInput.value;

  displayStartMessage(exerciseType, repetitions, duration);



  waitForExerciseDuration(exerciseType,2000)
  .then(function() {
    displayEndMessage(exerciseType);
  })
  .catch (function(error){
    console.log("There was an error:", error);
  });

 
});

function waitForExerciseDuration(exerciseType,duration) {
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log(`${exerciseType} exercise is done!`);
      resolve();
    },duration);

    });
  }
  function displayStartMessage(typeOfExercise,reps,time){
  const startMessage = document.createElement("p");
  startMessage.textContent = `Your chosen exercise is: ${typeOfExercise} and the goal is ${reps} reps in ${time} mins.`;
  messageContainer.appendChild(startMessage);
  console.log("Starting exercise...");
}

function displayEndMessage(typeOfExercise) {
  const endMessage = document.createElement("p");
  endMessage.textContent = `Time's up for ${typeOfExercise} exercise.`;
  messageContainer.appendChild(endMessage);
  console.log("Exercise ended.");
}
