function invertvalues(array) {
    let resultArray = []; 

    resultArray = array.map(function(value){
        return value * -1
    })
    return resultArray
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log([])