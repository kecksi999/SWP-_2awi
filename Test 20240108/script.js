let countLessThanOrEqual12 = 0;
let countGreaterThan12 = 0;      // zählt die zahlen die kleiner bzw größer als 12 sind

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 11) + 5;   // sozusagen zufallsgenerator von 5 bis 15

  if (randomNumber > 12) {
    console.log(randomNumber);
    countGreaterThan12++;
  } else {
    countLessThanOrEqual12++; // ++ steht dafür das es immer 1 dazu addiert 
  }
}

console.log("Anzahl der Zahlen kleiner-gleich 12:", countLessThanOrEqual12);
console.log("Anzahl der Zahlen größer als 12:", countGreaterThan12);            // console.log zeigt in der konsole wie viele zahlen größer und kleiner- gleich sind.