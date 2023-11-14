let a = [-1, 150, 190, 170, -1, -1, 160, 180]
a =[4, 2, 9, 11, 2, 16];

for (let i = 0; i < a.length - 1; i++) {
    let j = 0;
    let nextIndex = j+1;
    while (j < a.length - i -1) {
        if(a[j] === -1) {
            j = j+1;
            nextIndex=j+1;
            continue;
        }
        if(a[nextIndex] === -1) {
            nextIndex++;
            continue;
        }
        if(a[j] !== -1 && a[nextIndex] !== -1) {
            if(a[j] > a[nextIndex]) {
                [a[j], a[nextIndex]] = [a[nextIndex], a[j]]
            }
            j++;
            nextIndex = j+1;
        }
    }
}


console.log(a)