// Задание 1

function math(a, b, c) {
    return (a - b)/c;
}

let m = math(7, 3, 2);
console.log(m);

// Задание 2    -----------------------------------------------------------

function kub(a) {
      if (a > 1 && a % 1 == 0 ) {
          return a**3 && a**2;
      } else {
          alert ( `Введите целое число, больше 1`)
      }
  }
  
  console.log(kub(4));

// function kub(a) {
//     let first = a**3;
//     let second = a**2;

//     console.log(first, second); 
// }

// kub(7);

// Задание 3    -----------------------------------------------------------

function min(a, b) {
    if(a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(3, 8));

function max(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(7, 4));

// Задание 4    -----------------------------------------------------------

// function first (t, q) {
//     let arr = [],

//     f = +prompt('Указать первое число массива'),
//     k = +prompt('Указать последнее число массива');
//     // f = prompt('Указать 1-ое число диапазона значений массива'),
//     // k = prompt('Указать 2-ое число диапазона значений массива');
//    // arr.push(f);
//     for(i = f; i <= k; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
// }

// let a = prompt('Указать первое число массива'),
//     b = prompt('Указать последнее число массива');

// first();

// Задание 5    -------------------------------------------------------------

function isEven(num) {
    num % 1 === 0;

    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(33));

//let result = isEven(33);

// if(result == true) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// Задание 6    -----------------------------------------------------------

function getArray(len) {
    let newArrEven = []
    return isEven(arr);
}

let arr = [];
    
    for (i = 1; i <= 34; i++) {
        arr.push(i);
        i % 1 == 0;
    }

// console.log(arr);

getArray(arr);

console.log(getArray(arr));