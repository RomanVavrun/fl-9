function isPrime(num) {
    let prime = 2;
    if (num === 1 || num === prime || num === prime + 1) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else if (num % i !== 1) {
            return true;
        }
    }
}