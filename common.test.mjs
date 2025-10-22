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





