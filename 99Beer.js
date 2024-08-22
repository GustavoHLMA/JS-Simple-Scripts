function beerSong(number) {
  while (number > 0) {
  console.log(number + " bottles of number on the wall " + number + " bottles of number. \nTake one down and pass it around, " + (number -1) + " bottles of number on the wall.")
  number = number -1 
  }
}

beerSong(99)