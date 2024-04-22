// Berechne den Mittelwert der Temperaturen
// Werte die größer gleich 50 und kleiner gleich -30 sind sind
// Ausreißer und dürfen nicht berücksichtigt werden
const temperatures = "-1,5,51,-10,-11,2,90,-8,-44";
const temperatureArray = temperatures.split(",").map(Number);
let Gesamt = 0;
let Anzahl = 0;

for (let i = 0; i < temperatureArray.length; i++) {
    if (temperatureArray[i] >= -30 && temperatureArray[i] <= 50) {
        Gesamt += temperatureArray[i];
        Anzahl++;
    }
}

const average = Gesamt / Anzahl;
console.log(average);