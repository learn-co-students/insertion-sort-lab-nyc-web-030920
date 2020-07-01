// √ min equal to first element in array
// √ loop through the array
// √ compare each element to min
// √ if its less than min, element becomes new min,
// √ remove min from array
// √ return min


function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

// declare variable sorted = empty array
// declare variable min
// loop through the array
// set variable min === lowest number returned from findMinAndRemove()
// push min into sorted array
// return the sorted array

function insertionSort(array){
    let sorted = [];
    let min;
    while (array.length !== 0){
        min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted
}
