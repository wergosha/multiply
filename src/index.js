module.exports = function multiply(first, second) {

  let result;
  let bigFirst = BigInt(first);
  let bigSecond = BigInt(second);

  result = bigFirst * bigSecond;

  let bigResult = BigInt(result);

  return bigResult.toString();

};
