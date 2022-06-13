function findShort(s) {
    let wordsArray = s.split(" ")
    let newVar = wordsArray[0]

    for (let i = 0; i < wordsArray.length; i++) {
    if (newVar.length > wordsArray[i].length) { 
        newVar = wordsArray[i]
        }
    }
    return (newVar.length)
}

console.log(findShort("headphones apple bus"))