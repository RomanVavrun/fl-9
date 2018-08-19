const max_num = 6;
let attempts = 3;
let step_3 = 1;
const win_in_step_1 = 10;
const win_in_step_2 = 5;
const win_in_step_3 = 2;
let prize = 0;
let play = confirm('Do you want to play a game?');

if (play === false) {
    alert('You did not become a millionaire, but can.');
} else {
    for (; attempts !== 0; attempts--) {
        let random_number = randomInt(0, max_num);
        console.log(attempts, random_number, prize);
        let user_num = prompt('Enter a number from 0 to 5', '')
        if (user_num === random_number && attempts === 3) {
            prize += win_in_step_1;
        } else if (random_number === user_num && attempts === 2) {
            prize += win_in_step_2;
        } else if (random_number === user_num && attempts === step_3) {
            prize += win_in_step_3;
        }
    }

    alert(`Thank you for a game. Your prize is: ${prize} $`);
}

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }