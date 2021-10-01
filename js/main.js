function getRandomNumber(from, to, decimalPlaces) {
  if (from < 0 || to < from) {
    return console.log('Введен некорректный диапазон');
  }
  if (from == to) {
    return from;
  }

  let randomNumber = (Math.random() * (to - from + 1) + from).toFixed(decimalPlaces);
  return randomNumber;
}

getRandomNumber();
