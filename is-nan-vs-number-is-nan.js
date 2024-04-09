const couldBeNaN = 'nan';

const nan = Number(undefined);

console.log(isNaN(couldBeNaN));

console.log(Number.isNaN(couldBeNaN));

console.log(Number.isNaN(nan));

try {
  isNaN(1n);
} catch(err) {
  console.log(err.message);
}
