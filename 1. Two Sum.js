function twoSum(nums,target){
    // creating a new map to store the numbers and their indices
    const numMap = new Map()
    // loop through the array nums
    for(let i =0; i<nums.length; i++){
        // calculate the complement needed to achieve the target sum
        const complement = target - nums[i]
        if(numMap.has(complement)){
            return [numMap.get(complement),i]
        }
        numMap.set(nums[i],i)
        
    }
    return null
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [0, 1]

// const nums2 = [3, 2, 4];
// const target2 = 6;
// console.log(twoSum(nums2, target2));  // Output: [1, 2]

// const nums3 = [3, 3];
// const target3 = 6;
// console.log(twoSum(nums3, target3));  // Output: [0, 1]
