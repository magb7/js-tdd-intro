const assert = require("asset");

// Function

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.lenght, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD", "I Am Learning TDD")
);
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters(""), "");
