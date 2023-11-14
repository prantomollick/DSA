//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function solution(picture) {
    const strisk = '*';
    const countStar = picture[0].length+2;
    const borderedArray = []

    borderedArray.push(strisk.repeat(countStar))
    for (let i = 0; i < picture.length; i++) {
        const result = `${strisk}${picture[i]}${strisk}`
        borderedArray.push(result)
    }
    borderedArray.push(strisk.repeat(countStar))

}


picture = ["abc", "ded"]
console.log(solution(picture))