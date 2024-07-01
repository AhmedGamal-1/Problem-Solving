/*
71. Simplify Path

Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.

*/

var simplifyPath = function (path) {
    const stack = [];
    const pathArray = path.split('/').filter(el => el !== "." && el !== '');

    for (let p of pathArray) {
        if (p == '..') {
            stack.pop();
        } else {
            stack.push(p)
        }
    }
    return '/' + stack.join('/')
};