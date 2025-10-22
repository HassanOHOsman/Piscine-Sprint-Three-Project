// import { getDictionarySize } from "./common.mjs";

import {wordsChecker} from "./common.mjs"
import assert, { deepStrictEqual } from "node:assert";
import test from "node:test";

// test("Dictionary size is correct", () => {
//   assert.equal(getDictionarySize(), 856);
// });

test("Return ['shark', 'whale', 'dolphin'] since none exist in the dictionary", () => {
  assert.deepStrictEqual(wordsChecker(["shark", "whale", "dolphin"]), ["shark", "whale", "dolphin"]);
});


test("Return ['soil', 'compost'] only since they don't exist in the dictionary ", () => {
  assert.deepStrictEqual(wordsChecker(["plant", "seed", "soil", "compost"]), ["soil", "compost"]);
});


test("Return an empty array since all words exist in the dictionary", () => {
  assert.deepStrictEqual(wordsChecker(["blue", "green", "white", "brown", "black"]), []);
});

test("Return ['bloo', 'whyte', 'brawn'] since they are misspelled words", () => {
  assert.deepStrictEqual(wordsChecker(["bloo", "green", "whyte", "brawn", "black"]), ["bloo", "whyte", "brawn"]);
});




