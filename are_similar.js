function solution(a, b) {
    //Count the number of differences between two arrays
    //if there are more than 2 differences, then the arrays are not similar
    // If there are exactly 2 differences, then check if the two differences are
    // at the same positions in the two arrays.
    // Count the number of differences between the two arrays.
    let numDiffs = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            numDiffs++;
        }
    }

    // If there are more than 2 differences, then the arrays are not similar.
    if (numDiffs > 2) {
        return false;
    }

    // If there are exactly 2 differences, then check if the two differences are
    // at the same positions in the two arrays.
    if (numDiffs === 2) {
        let diffPos1 = null;
        let diffPos2 = null;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                if (diffPos1 === null) {
                    diffPos1 = i;
                } else {
                    diffPos2 = i;
                }
            }
        }

        if (diffPos1 === null || diffPos2 === null) {
            return false;
        }

        return a[diffPos1] === b[diffPos2] && a[diffPos2] === b[diffPos1];
    }

    // If there are 0 or 1 difference, then the arrays are similar.
    return true;
}

a= [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
b= [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]

console.log(solution(a, b))


function solution(a, b) {
    if(a.length !== b.length) return false;

    let diffCount = 0;
    let pos1 = null;
    let pos2 = null;

    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            diffCount++;
            if(pos1 === null) pos1 = i
            else pos2 = i;
        }
    }

    if(diffCount > 2) return false;

    if (pos1 !== null && pos2 !== null) {
        return a[pos1] === b[pos2] && a[pos2] === b[pos1];
    }


    return true;

}
