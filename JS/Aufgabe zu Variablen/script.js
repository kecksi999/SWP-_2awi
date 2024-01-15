let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

let ApplePerKilo = 1 / appleWeight;
let BananaPerKilo = 1 / bananaWeight;

let PricePerApple = applePricePerKilo * appleWeight;
let PricePerBanana = bananaPricePerKilo * bananaWeight;

console.log("Der Preis von einem Kilo Äpfel beträgt " + ApplePerKilo + "€");
console.log("Der Preis von einem Kilo Bananen beträgt " + BananaPerKilo + "€");
console.log("Der Preis von einem Apfel beträgt " + PricePerApple + "€");
console.log("Der Preis von einer Banane beträgt " + PricePerBanana + "€");
console.log("Der Preis von einer Tonne Äpfel beträgt " + (ApplePerKilo * 1000) + "€");
console.log("Der Preis von einer Tonne Bananen beträgt " + (BananaPerKilo * 1000) + "€");
console.log("Preis von 8 Äpfeln ist " + (PricePerApple * 8) + "€");
console.log("Preis von 17 Bananen ist " + (PricePerBanana * 17) + "€");
