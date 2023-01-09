function whosPaying(names) {
  nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
  nameNum = nameList.length
  randomName = Math.random() * nameNum
  guest = Math.floor(randomName)
  return nameList[guest]
}

whosPaying()