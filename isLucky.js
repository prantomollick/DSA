function solution(n) {
    const tickNumber = n.toString();

    const firstHalf = tickNumber.slice(0, tickNumber.length/2);
    const secondHalf = tickNumber.slice(tickNumber.length/2);

    const firstHalfTotal = firstHalf.split('').reduce((acc, cur) => acc + cur*1, 0)
    const secondHalfTotal = secondHalf.split('').reduce((acc, cur) => acc + cur*1, 0)

    return firstHalfTotal === secondHalfTotal;
}





const n = 1230;

// console.log(n.toString().split(''))
console.log(solution(n))
