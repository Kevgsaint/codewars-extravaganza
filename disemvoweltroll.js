function troll(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        let lower = str[i].toLowerCase()
        if (lower !== "a" && lower !== "e" && lower !== "i" && lower !== "o" && lower !== "u") {
            newStr = newStr + str[i]
        }

    }
    return newStr;
}

console.log(troll("This website is for losers LOL!"))