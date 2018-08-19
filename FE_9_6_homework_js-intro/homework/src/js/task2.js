let A = parseFloat(prompt('Enter side a length', '0'));
let B = parseFloat(prompt('Enter side b length', '0'));
let angle = parseFloat(prompt('Enter angle', '0'));
let output;

const ANGLE_SUM = 180;

function input_check(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}

function get_C(A, B, angle) {
    const gamma = Math.PI / ANGLE_SUM * angle;
    return Math.sqrt(A * A + B * B - 2 * A * B * Math.cos(gamma));
}

function get_square(perimeter, A, B, C) {
    return Math.sqrt(perimeter * ((perimeter - A) * (perimeter - B) * (perimeter - C)));
}

let outputTemplate = (C, square, perimeter) => `
c length: ${+C.toFixed(2)} 
Triangle square: ${+square.toFixed(2)}
Triangle perimeter: ${+perimeter.toFixed(2)}
`;

if (input_check(A) || input_check(B) || input_check(angle) || angle > ANGLE_SUM) {
    output = 'Invalid data';
} else {
    let C = get_C(A, B, angle);
    let perimeter = A + B + C;
    let square = get_square(perimeter / 2, A, B, C);
    output = outputTemplate(C, square, perimeter);
}

console.log(output);