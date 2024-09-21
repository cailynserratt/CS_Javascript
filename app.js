document.write("Please press F12 and check the console for a small game!")
const HP = 23;
const healthPotion = 100;
const potions = "0";

console.log(
    `Hello Player! Your HP is currently at ${HP} and health potions restore ${healthPotion} HP! Have Fun!`
)

if (HP >= 50) {
    console.log("Your HP is looking good!");
} else if (HP < 25) {
    console.log("Wow your HP is super low...take a health potion to heal...");
} else {
    console.log("Your HP could be better.")
}

const combined = HP + healthPotion;
console.log("You took a health potion! " + combined + " is now your total HP!")

switch (potions) {
    case "0":
        console.log("You have no potions left!");
      break;
    case "1":
        console.log("You have 1 potions left!");
      break;
    case "2":
        console.log("You have 2 potions left!");
      break;
    case "3":
        console.log("You have 3 potions left!");
      break;
    case "4":
        console.log("You have more than 3 potions left!");
      break;
    default:
        console.log("This is your potion stock!")
        break;
  }