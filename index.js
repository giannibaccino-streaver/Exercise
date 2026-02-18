function add(a, b, c) {
  console.log("Adding 3 numbers");
  return a + b + c;
}

function subtract(a, b) {
  console.log("Subtracting two numbers");
  return a - b;
}

function multiply(a, b) {
  console.log("Multiplying two numbers");
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
