// import { getDictionarySize } from "./common.mjs";

import {wordsChecker} from "./common.mjs"
import assert from "node:assert";
import test from "node:test";

// test("Dictionary size is correct", () => {
//   assert.equal(getDictionarySize(), 856);
// });

test("Return array of all words when none exist in the dictionary", () => {
  assert.deepStrictEqual(wordsChecker(["shark", "whale", "dolphin"]), ["shark", "whale", "dolphin"]);
});




