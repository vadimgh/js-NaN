const arr = [1, 2, NaN];

console.log(arr.indexOf(NaN));

console.log(arr.lastIndexOf(NaN));

console.log(arr.findIndex(n => Number.isNaN(n)));

console.log(arr.includes(NaN));
