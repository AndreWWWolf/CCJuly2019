// RECURSION
function max(numArray) {
    // copy the given array
    // base case: if we're at the last number, return it
    // check the first two numbers in the array and remove the lesser
    // with one less number in the array, call the same function
        nums = numArray.slice();
    if (nums.length == 1) { 
        return nums[0]; 
    }
    if (nums[0] < nums[1]) { 
        nums.splice(0,1); 
    } else { 
        nums.splice(1,1); 
    }
    return max(nums);
};
console.log(max([ 213, 12, 66, 999 ])); // should return 999
console.log(max([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11

// // HOW TO ADD CONSOLE.TIME/ .TIMEEND PARAMETERS TO TEST EFFICIENCY
// console.time('recursive');
// for (let j = 0; j < 1000; j++) {
//     max([ 213, 12, 66, 999 ]); // should return 999
// }
// console.timeEnd('recursive');

// console.log(max([ 213, 12, 66, 999 ])); // should return 999
// console.log(max([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11



// // ITERATION
// const maxI = arr => {
//     let maxNum = arr[0];
//     for(let numbers of arr) {
//         if(numbers > maxNum) {
//             maxNum = numbers;
//         }
//     } return maxNum;
// }
// console.time('iterative');
// for (let j = 0; j < 1000; j++) {
//     maxI([ 213, 12, 66, 999 ]); // should return 999
// }
// console.timeEnd('iterative');

// console.log(maxI([ 213, 12, 66, 999 ])); // should return 999
// console.log(maxI([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11
