function lifeInWeeks(age) {
  remaining = 90-age
  return(" You have " + remaining*365 + " days, " + remaining*52 + " weeks, and " + remaining*12 + " months left. ")
}
  
const yourAge = prompt("Type your age")
lifeInWeeks(yourAge)
