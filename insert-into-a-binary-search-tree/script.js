/*
701. Insert into a Binary Search Tree

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var insertIntoBST = function (root, val) {
    const newNode = new TreeNode(val);

    if (!root) return newNode;

    let curr = root;
    let prev = null;

    while (curr) {
        if (val > curr.val) {
            prev = curr;
            curr = curr.right;
        } else if (val < curr.val) {
            prev = curr;
            curr = curr.left
        }
    }

    if (val < prev.val) {
        prev.left = newNode
    } else {
        prev.right = newNode;
    }
    return root
};