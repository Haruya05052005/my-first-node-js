'use strict';
const numer = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= numer; i++){
    sum = sum + i;
}
console.log(sum);