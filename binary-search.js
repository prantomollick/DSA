// Find the item 3 position


function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    
    while(low <= high) {
        let mid = Math.round((low + high) / 2);
        let guess = list[mid];

        if(guess === item) {
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    return;
}



const myDataList = [1, 3, 5, 7, 9];
console.log(binarySearch(myDataList, 9)); //4
