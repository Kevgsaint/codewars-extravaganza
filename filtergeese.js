
function filtergeese(birds) {

    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return geese.filter(function (x) {
        console.log("x: " + x)
        console.log("index: " + geese.indexOf(x))
        return geese.indexOf(x) === -1 
    })

  
}
console.log(filtergeese(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))





