/*
const arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
} 
*/

const arr = [1, 2, 3];
function plusI(n, i) { return n + i; }

var map = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const res = fn(arr[i], i);

    result.push(res);
  }

  console.log(result);
};

map(arr, plusI);

// Output: [2,3,4]
