const checkIsNan = x => {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
};

console.log(checkIsNan('0'));

console.log(checkIsNan(1));

console.log(checkIsNan('Not a Number'));

NaN = 5;

console.log(NaN);

delete global.NaN;

console.log(global.NaN);
