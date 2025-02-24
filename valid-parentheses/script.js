/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/


var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        } else {
            let prevChar = stack.pop();
            if (prevChar == '(' && s[i] != ')') return false;
            if (prevChar == '[' && s[i] != ']') return false;
            if (prevChar == '{' && s[i] != '}') return false;
            if (prevChar == undefined) return false;
        }
    }
    return stack.length == 0;
};



// Another solution

// var isValid = function (s) {
//     const stack = [];
//     const template = "() [] {}";

//     let i = 0;

//     while (i < s.length) {
//         stack.push(s[i]);
//         i++;

//         const open = stack.at(-2);
//         const close = stack.at(-1);

//         const fullParanthes = open + close;

//         if (template.includes(fullParanthes)) {
//             stack.pop();
//             stack.pop();
//         }

//     }
//     return stack.length == 0;
// };