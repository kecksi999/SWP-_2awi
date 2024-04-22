const zahlen = "8,2,1,4,6,1,8,7";
const numberArray = zahlen.split(",").map(Number);
let höchste = Number.MIN_VALUE;
let count = 0;

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > höchste) {
        höchste = numberArray[i];
        count = 1;
    } else if (numberArray[i] === höchste) {
        count++;
    }
}

console.log(höchste, count);