function whosPaying(names) {
  let nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  let nameNum = nameList.length;
  let randomName = Math.random() * nameNum;
  let guest = Math.floor(randomName);
  return nameList[guest];
}

whosPaying();