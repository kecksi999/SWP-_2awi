let balance = 0;

function deposit(amount) {
    balance += amount;
    return `Einzahlung von ${amount} erfolgreich. Neuer Kontostand: ${balance}`;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        return `Auszahlung von ${amount} erfolgreich. Neuer Kontostand: ${balance}`;
    } else {
        return `Nicht genügend Guthaben für Auszahlung von ${amount}. Kontostand: ${balance}`;
    }
}

console.log(deposit(100));
console.log(withdraw(50));
console.log(withdraw(70));