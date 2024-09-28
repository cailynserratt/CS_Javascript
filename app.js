const characterclasses= ["Elf", "Druid", "Barbarian", "Bard", "Cleric", "Paladin", "Rogue"];
let health = 0;

for (characterclass of characterclasses) {
  console.log(characterclass);
  if (characterclass === "Rogue") {
    console.log("Rogue is an available class!");
    break;
  }
}

while(health < 100) {
  console.log("Your health is still recovering!")

  health++;
}