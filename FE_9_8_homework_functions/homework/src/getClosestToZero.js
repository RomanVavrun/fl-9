function getClosestToZero(...arguments) {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    let closest = args.sort((a, b) => Math.abs(0 - a) - Math.abs(0 - b))[0];
    return closest;
}