// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// import getDictionarySize from "./common.mjs";

window.onload = function() {
    // document.querySelector("body").innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
    //Create text input for the spell checker
    const textInput = document.createElement("textarea");
    textInput.id = "text-input";
    textInput.placeholder = "Enter or paste a text here";
    document.body.append(textInput);

    //Create a spell check trigger to check on written text
    const spellCheckBtn = document.createElement("button");
    spellCheckBtn.id = "spell-check-btn";
    spellCheckBtn.textContent = "Check";
    spellCheckBtn.type = "button";
    document.body.append(spellCheckBtn);
}
