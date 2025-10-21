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
        let typedSentence = textInput.value; 

        //Create a variable to store the typed text without punctuations
        const punctuationFreeText = typedSentence.replace(/[.,!?;:]/g, "");

        const arrayOfWords = punctuationFreeText.split(" ");
        const misspelledWords = wordsChecker(arrayOfWords);

        //Create logic to create previous misspelling warnings, and display a new message based on the number of misspelled words
        errorMessage.textContent = "";
        if (misspelledWords.length === 1) {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "⚠️ Warning: The following word is potentially misspelled. Click on it if you think it is correct: ";
        } else if (misspelledWords.length > 1) {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "⚠️ Warning: The following words are potentially misspelled. Click on any word you think is correct: ";
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
            clickableWord.style.marginRight = "10px";

            //Add event listner to add misspelled words to dictionary when clicked on
            clickableWord.addEventListener("click", () => {
                words.push(item);

                //Add visual effects on misspelled words when clicked on
                clickableWord.style.opacity = "0.5"; 
                clickableWord.style.cursor = "default";
                clickableWord.style.textDecoration = "line-through";
                
            });    
        })   
    });

    //Make warning message clears when end-user changes text in the input
    textInput.addEventListener("input", () => {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";   
    });

            
            


     
}
