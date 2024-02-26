function zaehler(s) {
    let counts = [0, 0, 0, 0]; // A, C, G, T
    for (let nucleotide of s) {
        if (nucleotide === 'A') {
            counts[0] += 1;
        } else if (nucleotide === 'C') {
            counts[1] += 1;
        } else if (nucleotide === 'G') {
            counts[2] += 1;
        } else if (nucleotide === 'T') {
            counts[3] += 1;
        }
    }
    return counts;
}

const s = "AACT";
const result = zaehler(s);
console.log(result.join(' '));
