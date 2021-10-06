function getRandomPositiveFloat(firstNumber, secondNumber, decimalPlaces = 1) {
  const lower = Math.min(Math.abs(firstNumber), Math.abs(secondNumber));
  const upper = Math.max(Math.abs(firstNumber), Math.abs(secondNumber));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(decimalPlaces);
}
function getRandomPositiveInteger(firstNumber, secondNumber) {
  const lower = Math.min(Math.abs(firstNumber), Math.abs(secondNumber));
  const upper = Math.max(Math.abs(firstNumber), Math.abs(secondNumber));

  const result = Math.random() * (upper - lower) + lower;

  return result;
}

getRandomPositiveFloat();
getRandomPositiveInteger();
