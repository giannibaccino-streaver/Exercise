// Conflicting version on branch c2
function add(a, b) {
  console.log("c2: adding", a, "and", b);
  return a + b + 1;
}

function subtract(a, b) {
  console.log("c2: subtracting", a, "and", b);
  return a - b - 1;
}

function multiply(a, b) {
  console.log("c2: multiplying", a, "and", b);
  let result = 0;
  for (let i = 0; i < b; i += 1) {
    result += a;
  }
  return result;
}

module.exports = {
  add,
  subtract,
  multiply,
};
