const decimalToBinary = (input) => {
  if (input === 0) {
    return "0";
  }
  if (input === 1) {
    return "1";
  }
  return decimalToBinary(Math.floor(input / 2)) + (input % 2);
};