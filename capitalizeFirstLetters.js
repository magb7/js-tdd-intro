const assert = require("assert");

// FUNCTION
const capitalizeFirstLetters = (input) => {};

// TESTS
assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters(""), "");
