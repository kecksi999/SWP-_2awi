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

function checkBalance() {
    return `Aktueller Kontostand: ${balance}`;
}

function displayMenu() {
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Beenden");
}

function ATM() {
    displayMenu();

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Bitte wählen Sie eine Option: ", (option) => {
        switch (option) {
            case '1':
                readline.question("Geben Sie den Einzahlungsbetrag ein: ", (amount) => {
                    console.log(deposit(parseFloat(amount)));
                    ATM();
                    readline.close();
                });
                break;
            case '2':
                readline.question("Geben Sie den Auszahlungsbetrag ein: ", (amount) => {
                    console.log(withdraw(parseFloat(amount)));
                    ATM();
                    readline.close();
                });
                break;
            case '3':
                console.log(checkBalance());
                ATM();
                break;
            case '4':
                console.log("Vielen Dank für die Nutzung des Bankautomaten. Auf Wiedersehen!");
                readline.close();
                break;
            default:
                console.log("Ungültige Option. Bitte wählen Sie erneut.");
                ATM();
                break;
        }
    });
}

ATM();