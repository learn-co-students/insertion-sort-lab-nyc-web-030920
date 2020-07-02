function findMinAndRemove(array){
    let min = array[0]; // pick first number
    let minIndex = 0; // pick position of that first number 

    for(let i = 0; i < array.length; i++){ // iterate through each 
        if(array[i] < min){ // if array element is less than "min"
            min = array[i]; // set min too array element
            minIndex =  i; // set position to array index
        }
    }
    array.splice(minIndex,1);  // starting at minIndex, remove 1 element
    return min; 
}

function insertionSort(array){
    // run minAndRemove multiple times until array is empty 
    // take the return value and append it to a new array that will be sorted 
    let sorted = []
    while(array.length > 0){
        let value = findMinAndRemove(array)
        sorted.push(value)
    }
    return sorted
}
