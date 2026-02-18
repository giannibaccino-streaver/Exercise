function add(a, b) {
  console.log("Adding numbers");
  return a + b;
}

function subtract(a, b) {
  console.log("Subtracting numbers");
  return a - b;
}

function multiply(a, b) {
  console.log("Multiplying numbers");
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
};
