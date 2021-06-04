const isValidWalk = (walk) => {
  if (walk.length !== 10) {
    return false
  }
  //set starting position as 0
  let startingPoint = 0;
  //loop through the array
  for (let step of walk) {
  //switch statement based on the letter in the array
  //n=1, s=-1, w=2, e=-2
    switch (step) {
      case "n":
        startingPoint++
        break;
      case "s":
        startingPoint--
        break;
      case "w":
        startingPoint += 2
        break;
      case "e":
        startingPoint -=2
        break;
      default:
        console.log("where did I go?")
    }
  }
  //by end of array, you should make it back to zero
  //if length of array is <10 return false
  return startingPoint === 0 ? true : false
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])