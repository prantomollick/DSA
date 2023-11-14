function matrixElementSum(matrix) {
    const hontedRoom= {};
    let sum = 0;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {


            if(matrix[row][col] === 0) {
                hontedRoom[col] = matrix[row][col];
                continue;
            }

            if(col in hontedRoom ) {
                continue;
            }

            sum += matrix[row][col];

        }
    }

    return sum;

}

matrix = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
//
// console.log(matrixElementSum(matrix));

function consecutiveArr(statues) {
    const min = Math.min(...statues);
    const max = Math.max(...statues);

    const includeNumber = [];

    for (let counter = min; counter <= max; counter++) {
        if(!statues.includes(counter)) {
            includeNumber.push(counter);
        }
    }

    return includeNumber.length;
}

function solution(statues) {
    const min = Math.min(...statues);
    const max = Math.max(...statues);

    const additionalStatues = [];

    let counter = min
    while(counter <= max) {
        if(!statues.includes(counter)) additionalStatues.push(counter);
        counter++;
    }

    return additionalStatues.length;
}


// const consecutive = [6, 2, 3, 8];
//
// console.log(solution(consecutive));

function longestStr(inputArray) {
    let strLongLength = inputArray[0].length;
    let collectStr = [];
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > strLongLength) {
            strLongLength = inputArray[i].length;
            collectStr = [inputArray[i]]
            continue;
        }

        if (strLongLength === inputArray[i].length) {
            collectStr.push(inputArray[i]);
        }
    }
    return collectStr;
}


inputArray = ["abc", "eeee", "abcd", "dcd"]

console.log(longestStr(inputArray))