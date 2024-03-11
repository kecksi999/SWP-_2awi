function fast0(...temperatures) {
    let closest = Infinity;

    for (let temp of temperatures) {
        if (Math.abs(temp) < Math.abs(closest) || (Math.abs(temp) === Math.abs(closest) && temp > closest)) {
            closest = temp;
        }
    }

    return closest;
}

// Example usage
let temperatures = [1, -2, -8, 4, 5];
console.log(fast0(...temperatures));