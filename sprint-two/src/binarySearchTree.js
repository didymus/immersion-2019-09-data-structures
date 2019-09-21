// Implement a binarySearchTree class with the following properties:
// [X] A .left property, a binary search tree (BST) where all values are 
//  lower than the current value.
// [X] A .right property, a BST where all values are higher than the current value.
// [X] A .insert() method, which accepts a value and places it in the tree in the correct position.
// [X] A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// [X] A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// [X] What is the time complexity of the above functions? All O(log n)
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. 
// Profile this against the same operation using an array.
var BinarySearchTree = function (value) {


    var newTree = {};
    newTree.value = value; 
    newTree.left = null; //lower than the current value
    newTree.right = null; //higher than the current value
    
    //put all methods on the construction of each newTree
    _.extend(newTree, biTreeMethods);

    return newTree; 
};


let biTreeMethods = {}; 

//accepts a value and places it in the tree in the correct position.
biTreeMethods.insert = function (value) {
  
  //if the value is less than node, veer left
  //if the value is greater than node, veer right
  if (value < this.value && this.left) {
    this.left.insert(value);
  }
  if (value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  }
  if (value > this.value && this.right) {
    this.right.insert(value);
  }
  if (value > this.value && !this.right) {
    this.right = BinarySearchTree(value);
  }

};

biTreeMethods.contains = function (value) {
//  returns a boolean

//  Inspect the value at the node.
//  If we’ve found the value we’re looking for, great!
  if (this.value === value) {
    return true; 
  }

  //  If the value we’re looking for is less than the current node, search for it in its left subtree.
  if (value < this.value) {
      //if the left node doesnt exist, return false
      if(!this.left){
          return false; 
      } else {
          return this.left.contains(value);
      }
  } 


  //  If the value we’re looking for is greater than the current node, search for it in its right subtree.
  if (value > this.value) {
      //if the right node doesnt exist, return false
      if (!this.right) {
          return false;
      } else {
        return this.right.contains(value);
      }
  }
};

biTreeMethods.depthFirstLog = function (callback) {
//accepts a callback and executes it on every value contained in the tree

    //callback on the current value (including root)
  callback(this.value);

    //if left node exists, callback recurively 
  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  //if right node exists, callback recursively 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};







/*
 * Complexity: What is the time complexity of the above functions?
 */
