// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// import getDictionarySize from "./common.mjs";

import { wordsChecker } from "./common.mjs";
import words from "./words.json" with { type: "json" };

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

    //Create a palceholder to display a message with all misspelled words
    const errorMessage = document.createElement("p");
    document.body.append(errorMessage);
    errorMessage.style.display = "none";

    //Style the message the show up when words are misspelled
    errorMessage.style.color = "#b71c1c";
    errorMessage.style.backgroundColor= "#ffebee";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.marginTop = "50px";
    errorMessage.style.padding = "10px";
    errorMessage.style.border = " 1px solid #ff0000";
    errorMessage.style.borderRadius = "5px";
    errorMessage.style.width = "fit-content";

    //Create event listener to check the presence of every word typed by end-user in the list after clicking the trigger button
    spellCheckBtn.addEventListener("click", () => {
        const typedSentence = textInput.value; 
        const arrayOfWords = typedSentence.split(" ");
        const misspelledWords = wordsChecker(arrayOfWords);

        //Create logic to create previous misspelling warnings, and display a new message based on the number of misspelled words
        errorMessage.textContent = "";
        if (misspelledWords.length === 1) {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = `⚠️ Warning: The following ${misspelledWords.length} word is potentially misspelled: ${misspelledWords.toString()}`;
        } else if (misspelledWords.length > 1) {
            errorMessage.style.display = "block";
            const lastWord = misspelledWords.pop();
            const allWordsButLast = misspelledWords.join(", ")
            errorMessage.innerHTML = `⚠️ Warning: The following ${misspelledWords.length + 1} words are potentially misspelled: ${allWordsButLast} and ${lastWord}`
        } else {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
        }

        //Wrap every misspelled word inside a span element
        misspelledWords.forEach((item) => {
            const clickableWord = document.createElement("span");
            errorMessage.append(clickableWord);
            clickableWord.textContent = item;
            clickableWord.style.color = "red";
            clickableWord.style.cursor = "pointer";

            //Add event listner to add misspelled words to dictionary when clicked on
            clickableWord.addEventListener("click", () => {
                words.push(item);
                
            })
        })
        
        
    });


     
}
