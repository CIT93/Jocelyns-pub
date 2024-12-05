class DecisionMaker {
  constructor(name, mood, treatTime, size, age) {
    this.name = name;
    this.mood = mood;
    this.treatTime = treatTime;
    this.size = size;
    this.age = age;
  }

  isTreatTime() {
    return this.treatTime === "yes";
  }

  getMoodMessage() {
    switch (this.mood) {
      case "Hungry":
        return `${this.name} is hungry and ready for a treat!`;
      case "Happy":
        return `${this.name} is happy and enjoying the day.`;
      case "Playful":
        return `${this.name} is playful and ready to have some fun!`;
      default:
        return `${this.name} is in a neutral mood.`;
    }
  }

  getSizeMessage() {
    switch (this.size) {
      case "Small":
        return `${this.name} is small and easy to carry around.`;
      case "Medium":
        return `${this.name} is of medium size, just right!`;
      case "Large":
        return `${this.name} is large and needs plenty of space.`;
      default:
        return `${this.name}'s size is unknown.`;
    }
  }

  getDecisionMessage() {
    let decisionMessage = this.getMoodMessage();
    if (this.isTreatTime()) {
      decisionMessage += ` It's treat time!`;
    } else {
      decisionMessage += ` No treats right now.`;
    }
    decisionMessage += ` ${this.getSizeMessage()}`;
    decisionMessage += ` ${this.name} is ${this.age} years old.`;

    return decisionMessage;
  }
}

export { DecisionMaker };
