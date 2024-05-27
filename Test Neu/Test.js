
const Satz = "Hans geht heute schwimmen das ist gut";
const Aufteilung = Satz.split(" ");
let umgekehrt = "";
for (let i = Aufteilung.length - 1; i >= 0; i--) {
    umgekehrt += Aufteilung[i] + " ";
}
console.log(umgekehrt);