let anagramsCounter = (str) => {
  let substringsTable = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let target = str.substring(i, j).split("").sort().join("");

      if (target.length != str.length) {
        if (target in substringsTable) {
          substringsTable[target] += 1;
        } else {
          substringsTable[target] = 0;
        }
      }
    }
  }

  let counter = 0;
  for (let key in substringsTable) {
    counter += substringsTable[key];
  }
  return counter;
};

module.exports = anagramsCounter;
