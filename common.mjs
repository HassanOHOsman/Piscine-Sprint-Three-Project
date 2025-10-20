import words from "./words.json" with { type: "json" };

// export const getDictionarySize = () => words.length;

//Create and export a function to check if words entered by end-user exist in the JSON file list
export function wordsChecker(array) {
    const misspelledWords = [];
    for (let item of array) {
        if (!words.includes(item)) {
            misspelledWords.push(item);
        }
        
    } 
    return misspelledWords; 
}