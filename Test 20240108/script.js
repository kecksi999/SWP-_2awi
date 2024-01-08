let countLessThanOrEqual12 = 0;
let countGreaterThan12 = 0;

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 11) + 5;

  if (randomNumber > 12) {
    console.log(randomNumber);
    countGreaterThan12++;
  } else {
    countLessThanOrEqual12++;
  }
}

console.log("Anzahl der Zahlen kleiner-gleich 12:", countLessThanOrEqual12);
console.log("Anzahl der Zahlen größer als 12:", countGreaterThan12);