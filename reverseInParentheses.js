function solution(inputString) {
    const stack = [];
    let resultStr = '';

    for(const chr of inputString) {
        if(chr === "(") {
            stack.push(resultStr);
            resultStr = '';
        } else if(chr === ')') {
            const popped = stack.pop();
            resultStr = popped + resultStr.split('').reverse().join('');
        } else {
            resultStr += chr;
        }
    }

    return resultStr;

}

console.log(solution("(bar)"))