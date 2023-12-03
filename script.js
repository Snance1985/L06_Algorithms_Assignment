// Create a Function to handle the Array and store the Variables
function findArray(arr) {
    if (arr.length === 0) {
        return 0; // Handle the case of an empty input array
    }

    let maxSum = arr[0];// First Variable
    let currentSum = arr[0];//Second Variable

    // For Loop to iterate through the Array one element at a time
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the final Output from the first Variable from the For Loop Iteration
    return maxSum;
}

// Test cases
console.log(findArray([1, -3, 2, -5, 7, 6, -1, -4, 11, -23])); // Output: 19
console.log(findArray([1, 2, -5, 4, 2, -1, 3, -2, 5])); // Output: 11
console.log(findArray([1, -2, 3, -4, 5, -6])); // Output: 5
console.log(findArray([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7
console.log(findArray([5, -8, 6, 7, -4, 10, -5])); // Output: 19
console.log(findArray([3, 2, 1, 0, -1, -2, -3])); // Output: 6
//Additional Test Cases:
console.log(findArray([-2, -3, -4, -1, -2]));
//Output: -1 (corresponding to the subarray [-1])
console.log(findArray([1, 2, 3, 4, 5]));
//Output: 15 (corresponding to the entire array, as it's a contiguous subarray)
console.log(findArray([-1, -2, -3, -4, -5]));
//Output: -1 (corresponding to the subarray [-1])
console.log(findArray([5, 4, 3, 2, 1]));
//Output: 15 (corresponding to the entire array, as it's a contiguous subarray)
console.log(findArray([0, 0, 0, 0, 0]));
//Output: 0 (corresponding to the entire array, as it's a contiguous subarray with a sum of zero)
console.log(findArray([10]));
//Output: 10 (corresponding to the single element in the array)
console.log(findArray([]));
//Output: 0 (corresponding to an empty input array)
