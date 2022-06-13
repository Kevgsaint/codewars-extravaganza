function highAndLow(numbers) {
    let numArray = numbers.split(" ")
    let varHigh = Number(numArray[0])
    let varLow = Number(numArray[0])

    for (let i = 0; i < numArray.length; i++) {

    if (varHigh < Number(numArray[i])) { 
        varHigh = Number(numArray[i])
    } else if (varLow > Number(numArray[i])) { 
        varLow = Number(numArray[i])
    }
}
return String(varHigh + " " + varLow)
}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5")) 
console.log(highAndLow("1 9 3 4 -5")) 