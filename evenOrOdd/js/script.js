let choice = prompt("Scegli pari o dispari")

while (choice.toLowerCase() != "pari" && choice.toLowerCase() != "dispari") {
    choice = prompt("Devi scegliere tra pari o dispari!!")
}

console.log("tu sei", choice)

let user_num = prompt("Ora inserisci un numero da 1 a 5")
while (user_num < 1 || user_num > 5) {
    user_num = prompt("Devi scegliere un numero da 1 a 5!!")
}
console.log("Hai scelto il:", user_num)

let pc_num = randomNum()
console.log("Al computer è uscito il", pc_num)

let num_sum = pc_num + parseInt(user_num)

console.log("Il risultato è", num_sum)

if (choice.toLowerCase() == "pari") {
    if (evenOrOdd(num_sum)) {
        console.log("Hai vinto!")
    } else {
        console.log("Ha vinto il computer")
    }
} else if (choice.toLowerCase() == "dispari") {
    if (evenOrOdd(num_sum)) {
        console.log("Ha vinto il computer")
    } else {
        console.log("Hai vinto!")
    }
}

function randomNum() {
    let num = Math.floor(Math.random() * 5 + 1)
    return num
}

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return true
    }

    return false
}