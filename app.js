document.write("Please press F12 and check the console!")
var name = "Remaining Health Bar" // this is the name displayed - GLOBAL STRING

const character = {model: "Male", HP: "1500", class: "Druid"} // this is the character description - OBJECT

let life = 1500;  // this is the life bar - BLOCK NUMBER

life = life - 275; // character takes one hit, loses health
life = life - 333; // character takes another hit, loses health
life = life + 150; // character takes health potion, restores health

console.log(character);
console.log(name);
console.log(life);