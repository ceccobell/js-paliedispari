let choice = prompt("Scegli pari o dispari")

let user_num = prompt("Ora inserisci un numero da 1 a 5")

let pc_num = randomNum()

let num_sum = pc_num + user_num

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