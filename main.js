const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasCoin = true

if (choice === "village" || hasMap) {
    console.log("After entering the village, you encounter a weapons shop");
}

const choiceTwo = readline.question("Do you buy a 'sword' or a 'bow and arrow'?");

if (choiceTwo === "sword" && hasCoin) {
    console.log("You have acquired a sword.");
} else if (choiceTwo === "bow and arrow") {
    console.log("You have acquired a bow and arrow.");
}

