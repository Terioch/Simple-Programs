// function to count duplicates in an array

function countDuplicates(array) {
 let obj = {};
 let duplicates = [];

 for (let i = 0; i < array.length; i++) {
  !obj[array[i]] ? obj[array[i]] = 'x' : duplicates.push(array[i]);
 }

 return 'Duplicates are ' + duplicates;
}  

console.log(countDuplicates([1, 3, 4, 5, 3, 6, 6, 7, 1, 8]));