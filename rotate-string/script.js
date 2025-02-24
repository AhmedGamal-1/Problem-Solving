/*
796. Rotate String

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

*/


var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    if (s.length === 0 && goal.length === 0) return true

    s = s + s;

    return s.includes(goal)
};