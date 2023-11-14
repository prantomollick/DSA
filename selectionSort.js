// code for find the smallst element in an array

function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }

    return smallest_index;
}


// console.log(findSmallest([5, 3, 6, 2, 10]));


function selectionSort(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr);
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1));
    }

    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]));

console.log([5, 3, 6, 2, 10].slice(0, 1));