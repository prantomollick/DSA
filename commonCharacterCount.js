function solution1(s1, s2) {
    let count = 0;
    const node = {

    };
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                if(!(j in node)) {
                    count++;
                    node[j] = s2[j];
                    break;
                }
            }
        }
    }

    return count;

}

// function solution(s1, s2) {
//     for (let i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!")
//     }
//     let count =  s2.replace(/[^!]/g, "")
//     console.log(count)
//     return count.length;
// }

// function solution(s1, s2) {
//     let count = 0;
//     for (let i = 0; i < s1.length; i++) {
//         if(s2.indexOf(s1[i]) !== -1) {
//             count++;
//             s2 = s2.replace(s1[i], '');
//         }
//
//     }
//     return count;
// }


function solution(s1, s2) {
    s1.split('').forEach(c => s2 = s2.replace(c, "?"))
    return s2.replace(/[^?]/g, '').length
}



const s1 = "aabcc";
const s2= "adcaa";

console.log(s2.indexOf('k'))

console.log(solution(s1, s2))