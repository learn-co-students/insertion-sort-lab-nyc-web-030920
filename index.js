function findMinAndRemove(array) {
  let smallest = array[0];
  let smIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smIndex = i;
    }
  }
  array.splice(smIndex, 1);
  return smallest;
}

function insertionSort(array) {
  let sorted = [];
  let smallest;
  while (array.length != 0) {
    smallest = findMinAndRemove(array)
    sorted.push(smallest)
  }
  return sorted;
}
