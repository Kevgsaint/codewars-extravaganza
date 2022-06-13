function removeChar(str) {
    let wordsArray = str.split(" ")
    wordsArray2 = wordsArray.splice(1, 4);
    return wordsArray;
}

console.log(removeChar("Today was a good day"))