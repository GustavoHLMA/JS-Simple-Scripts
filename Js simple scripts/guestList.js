let guestList = ["Kanye", "Taylor", "Henry", "Jhon", "Joe", "Kim", "Elon"];
const userNotCap = prompt("Type your name").toLowerCase();
const firstLetter = userNotCap.slice(0,1);
const firstLetterCap = firstLetter.toUpperCase();
const user = firstLetterCap + userNotCap.slice(1, userNotCap.lenght);


if (guestList.includes(user)) {
  alert("Welcome " + user)
} else 
  alert("Sorry " + user + " your name isn't on the guestlist")