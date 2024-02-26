function Ausgabe(max) {
    for (let i = 1; i <= max; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
            console.log("FooBar");
        } else if (i % 5 === 0) {
            console.log("Foo");
        } else if (i % 7 === 0) {
            console.log("Bar");
        } else {
            console.log(i);
        }
    }
}


const max = 36;
Ausgabe(max);
