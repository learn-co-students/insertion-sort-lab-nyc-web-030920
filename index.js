function findMinAndRemove(array){
    let min = Number.POSITIVE_INFINITY;
    let min_index = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            min_index = i;
        }
    }

    array.splice(min_index, 1);

    return min;
}

function insertionSort(array){
    const sorted = [];
    const length = array.length;

    for(let i = 0; i < length; i++){
        let min = findMinAndRemove(array);
        console.log(min);
        sorted.push(min);
    }

    return sorted;
}
