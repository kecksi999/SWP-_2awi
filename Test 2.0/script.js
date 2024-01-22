

let countOf49 = 0;

for (let i = 35; i < 52; i++) {
    let randomNumber = Math.floor(Math.random() * (52 - 35)) + 35;

    if (randomNumber < 38 && randomNumber > 36) {
        console.log(randomNumber);
    } else if (randomNumber === 35) {
        console.log("ohhhh");
    } else if (randomNumber === 50 || randomNumber === 51) {
        console.log("jupidu");
    }

    if (randomNumber === 49) {
        countOf49++;
    }
}

console.log("Die Zahl 49 ist" + countOf49 + "Mal vorgekommen.");