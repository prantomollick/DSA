function solution(sequence) {
    let removeCount = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            removeCount++;

            if (removeCount > 1) {
                return false;
            }

            if (i === 1 || sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i];
            } else {
                sequence[i] = sequence[i - 1];
            }
        }
    }

    return true;
}
const sequence = [1, 2, 3, 4, 5, 3, 5, 6] //false
// const sequence= [3, 6, 5, 8, 10, 20, 15]; //false
console.log(solution(sequence));


let removeCount = 0;
function isStrictlySorted(ar, idx) {
    if(idx === ar.length - 1 ) return true;
    if(ar[idx] >= ar[idx + 1]) {
        removeCount++;
        if(removeCount > 1) {
            return false;
        }
        if (idx === 1 || ar[idx] > ar[idx - 2]) {
            ar[idx - 1] = ar[idx];
        } else {
            ar[idx] = ar[idx - 1];
        }
    }

    return isStrictlySorted(ar, idx + 1)
}

// const sequence = [1, 2, 3, 4, 5, 3, 5, 6] ;
//
// console.log(isStrictlySorted(sequence, 0))
//
