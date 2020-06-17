const assert = require("assert");
const { stringify } = require("querystring");

// FUNCTION
const capitalizeFirstLetters = (input) => {
  if (input.length > 0) {
    let splitInput = input.split(" ");
    for (let i = 0; i < splitInput.length; i++) {
      splitInput[i] =
        splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1);
    }
    return splitInput.join(" ");
  } else return "";
};

// TESTS
assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters(""), "");
