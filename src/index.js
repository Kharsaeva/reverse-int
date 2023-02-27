module.exports = function reverse (n) {
  let reversed = 0;

  while (number !== 0) {
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversed;
}
