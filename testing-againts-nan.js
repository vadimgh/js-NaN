const nan = Number(undefined);

console.log(nan !== nan);

console.log(NaN === NaN);

console.log(isNaN(NaN));

console.log(isNaN(Number.NaN));

console.log(Number.isNaN(NaN));

const checkIsNan = v => v !== v;

console.log(checkIsNan(NaN));
