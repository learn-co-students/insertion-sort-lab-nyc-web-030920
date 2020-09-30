function findMinAndRemove(array){

    let min = Math.min(...array)
    array.splice(array.indexOf(min), 1)
    return min

} 


function selectionSort(array){
    let sortedArray = []
    let min;
    while (array.length != 0){
     let min = findMinAndRemove(array)
       sortedArray.push(min)
    }return sortedArray

}
