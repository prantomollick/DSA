const a = [7, 8, 3, 1, 2];

//bubble Sort
//time complexity = O(n^2)
for (let i = 0; i < a.length - 1; i++) { //n-1
    for (let j = 0; j < a.length - i - 1; j++) {
        if(a[j] > a[j+1]) {
            [a[j], a[j+1]] = [a[j+1], a[j]]
        }
    }

}
console.log(a)