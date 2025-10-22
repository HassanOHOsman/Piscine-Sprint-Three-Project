
import {wordsChecker} from "./common.mjs"
import assert, { deepStrictEqual } from "node:assert";
import test from "node:test";

//Test for when words don't exist at all in the dictionary
test("Return ['shark', 'whale', 'dolphin'] since none exist in the dictionary", () => {
  assert.deepStrictEqual(wordsChecker(["shark", "whale", "dolphin"]), ["shark", "whale", "dolphin"]);
});


//Test for when some of thr words exist and others don't
test("Return ['soil', 'compost'] only since they don't exist in the dictionary ", () => {
  assert.deepStrictEqual(wordsChecker(["plant", "seed", "soil", "compost"]), ["soil", "compost"]);
});


//Test for when all words are present in the dictionary
test("Return an empty array since all words exist in the dictionary", () => {
  assert.deepStrictEqual(wordsChecker(["blue", "green", "white", "brown", "black"]), []);
});

//Test for when some of the words are misspelled/incorrect
test("Return ['bloo', 'whyte', 'brawn'] since they are misspelled words", () => {
  assert.deepStrictEqual(wordsChecker(["bloo", "green", "whyte", "brawn", "black"]), ["bloo", "whyte", "brawn"]);
});




