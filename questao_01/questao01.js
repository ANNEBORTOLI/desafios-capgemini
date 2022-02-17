function stair(numberOfSteps) {
  let myStair = "";

  for (let i = 1; i <= numberOfSteps; i++) {
    let step = "*".repeat(i).padStart(numberOfSteps, " ");
    myStair += step + "\n";
  }
  return myStair;
}

module.exports = stair;
