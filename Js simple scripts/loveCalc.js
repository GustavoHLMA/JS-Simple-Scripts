function loveCalc(user, crush) {
  let love = Math.random();
  love = love * 100;
  love = Math.floor(love)+1;
  return love;
}

const user = prompt("Type your name: ");
const crush = prompt ("Type your crush name: ");
alert(user + " compatibility with " + crush + " is " + loveCalc(user,crush) + "%");