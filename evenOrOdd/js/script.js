let choice = prompt("Scegli pari o dispari")

let user_num = prompt("Ora inserisci un numero da 1 a 5")

function randomNum() {
    let num = Math.floor(Math.random() * 5 + 1)
    return num
}