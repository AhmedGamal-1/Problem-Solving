/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

var productExceptSelf = function (nums) {
    const res = [];
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start * nums[i];
    }

    let start2 = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i];
        start2 = start2 * nums[i]
    }
    return res;
};