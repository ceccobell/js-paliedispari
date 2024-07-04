function IsPalindroma(word) {
    let reverse_word = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reverse_word += word[i]
    }

    if (word == reverse_word) {
        return true
    }

    return false
}

let str = prompt("inserisci una parola")

let reverse_word = " "

if (IsPalindroma(str)) {
    console.log(str, "è palindroma")
} else {
    console.log(str, "non è palindroma")
}