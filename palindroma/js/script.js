function IsPalindroma(word) {
    let reverse_word = ""
    for (let i = word.lenght - 1; i >= 0; i--;) {
        reverse_word += word[i]
    }

    if (word == reverse_word) {
        return true
    }

    return false
}