function loveCalc(user, crush) {
  let love = Math.random();
  love = love * 100+1;
  love = Math.floor(love);
  return love;
}

const user = prompt("Type your name: ");
const crush = prompt ("Type your crush name: ");
compatibility = loveCalc(user, crush);
alert(user + " compatibility with " + crush + " is " + compatibility + "%");

if (compatibility > 50) {
  alert("You are compatible");
} else {
  alert("You are uncompatible");
}

console.log(compatibility)