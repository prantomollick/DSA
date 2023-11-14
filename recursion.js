/*

//print factorial of a number n;


function calcFactorial(n) {
  if (n===1 || n === 0) return 1;
  return  n * calcFactorial(n - 1);
}


const ans = calcFactorial(5)
console.log(ans)

*/

/*
//print fibonacci sequence
function printFib(a, b, n) {
  if (n === 0) return;
  const c = a + b;
  return printFib(b, c, n - 1);
}


const a = 0;
const b = 1;
const n = 7;
console.log(a)
console.log(b)
printFib(a, b, n - 2);
*/

/*
// print x^n (stack height = n)

function calcPower(x, n) {
  if(n === 0) return 1;
  if (x === 0) return;
  const xPowerNm1 = calcPower(x, n - 1);
  return x * xPowerNm1;
}


console.log(calcPower(2, 5))

*/

// print x^n (stack height = logn)



function calcPower(x, n) {
  if(n === 0) return 1;
  if (x === 0) return;

  // if n is even
  if(n % 2 === 0) {
    return calcPower(x, n/2) * calcPower(x, n/2);
  } else {//if n is odd
    return calcPower(x, Math.floor(n/2)) * calcPower(x, Math.floor(n/2)) * x;
  }
}


const x = 2;
const n = 5;
console.log(calcPower(x, n));
