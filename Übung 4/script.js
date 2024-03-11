function canAffordRent(P, H, R) {
    let totalIncome = P * H;
    if (totalIncome > R) {
        return "YES";
    } else if (totalIncome === R) {
        return "BARELY";
    } else {
        return "NO";
    }
}

// Example usage
let P = 20;
let H = 100;
let R = 600;
console.log(canAffordRent(P, H, R));