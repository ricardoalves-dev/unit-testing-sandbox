function fizzBuzz(number) {
  let outPut = number;

  if (number % 15 === 0) {
    outPut = 'fizzbuzz';
  } else if (number % 3 === 0) {
    outPut = 'fizz';
  } else if (number % 5 === 0) {
    outPut = 'buzz';
  }

  return outPut;
}

module.exports = fizzBuzz;
