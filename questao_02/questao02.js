function checkPassword(password) {
  // Removes whitespace from both ends of a string and returns a new string
  //const password = password.trim();

  const digit = new RegExp("[0-9]+");
  const uppercaseChar = new RegExp("[A-Z]+");
  const lowercaseChar = new RegExp("[a-z]+");
  const specialChar = new RegExp("[!@#$%^&*()-+]+");

  // Keeps the number of missing requirements needed to make a strong password
  let errorCounter = 0;

  // Checks all of the requirements and add to the errorCounter if not met
  if (!digit.test(password)) errorCounter += 1;
  if (!uppercaseChar.test(password)) errorCounter += 1;
  if (!lowercaseChar.test(password)) errorCounter += 1;
  if (!specialChar.test(password)) errorCounter += 1;

  // Calculates the number of characters missing for length == 6
  const charsMissing = 6 - password.length;

  return Math.max(charsMissing, errorCounter);
}

module.exports = checkPassword;
