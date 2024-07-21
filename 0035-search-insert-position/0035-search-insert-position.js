/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let initial = 0;
    let final = nums.length;

    while(initial < final) {
        const mid = initial + Math.floor( (final-initial) / 2);
        if (nums[mid]< target) {
            initial = mid + 1;
        }
        else {
            final = mid;
            guess = mid;
        }
    }
    return initial;
};