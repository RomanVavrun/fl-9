// task 1
function findType(value) {
    return typeof value;
}
// task 2
function forEach(array, fun) {
    for (let i = 0; i < array.length; i++) {
        fun(array[i])
    }
}
// task 3
function map(array, fun) {
    let new_array = [];
    forEach(array, (el) => new_array.push(fun(el)))
    return new_array;
}
// tassk 4
function filter(array, fun) {
    let new_array = [];
    forEach(array, (el) => {
        if (fun(el)) {
            new_array.push(el);
        }
    });
    return new_array;
}
// task 5
function getAdultAppleLovers(data) {
    return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
}
//task 6
function keys (obj) {
    let new_array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            new_array.push(key);
        }
    }
    return new_array;
}
//task 7
function values(obj) {
    let new_array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            new_array.push(obj[key]);
        }
    }
    return new_array;
}

// task 8
function showFormattedDate(date) {
    let mounts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${mounts[date.getMonth()]}, ${date.getFullYear()}`;
}

// data
let data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
]