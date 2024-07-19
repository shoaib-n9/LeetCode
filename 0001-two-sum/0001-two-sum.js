/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();
    for (let i = 0; i<nums.length; i++) {

        let no1 = nums[i];
        let no2 = target-no1;

        if(map.has(no2)) {
            return [i,map.get(no2)];
        }
        map.set(no1,i);
    }
};