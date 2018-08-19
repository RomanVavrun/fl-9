let login_true = false;
let password_true = false;
let date = new Date();

for (; login_true !== true;) {
    let login = prompt('Enter login', 'gecko');
    login_validet(login);
}

for (;password_true !== true;) {
    let password = prompt('Enter password', 'asd123');
    password_validet(password);
}


function login_validet (login) {
    if (login === '' || login === null) {
        alert('Canceled.')
    } else if (login.length < 4) {
        alert('I dont know any users having name length less than 4 symbols.');
    } else if (login !== 'User') {
        alert('I don’t know you!')
    } else {
        login_true = true;
    }
}

function password_validet (password) {
    if (password === '' || password === null) {
        alert('Canceled.');
    } else if (password !== 'SuperUser') {
        alert('Wrong password.')
    } else if (password === 'SuperUser' && date.getHours() < 20) {
        alert('Good day!');
        password_true = true;
    } else {
        alert('Good evening!');
        password_true = true;
    }
}