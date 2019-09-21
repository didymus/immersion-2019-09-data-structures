// Implement a binarySearchTree class with the following properties:
// [ ] A .left property, a binary search tree (BST) where all values are 
//  lower than the current value.
// [ ] A .right property, a BST where all values are higher than the current value.
// [ ] A .insert() method, which accepts a value and places it in the tree in the correct position.
// [ ] A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// [ ] A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// [ ] What is the time complexity of the above functions?
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. 
// Profile this against the same operation using an array.
var BinarySearchTree = function (value) {

  var newTree = {};
  newTree.value = value; 
    
  this.left = null; //lower than the current value
  this.right = null;
    
  _.extend(newTree, biTreeMethods);

  return newTree; 
};


let biTreeMethods = {}; 

biTreeMethods.insert = function (value) {
  let currentNode = BinarySearchTree(value);
  //accepts a value and places it in the tree in the correct position.
  //inputing a value
  //if its less than node, veer left
  //if its greater than node, veer right
  if (value < this.value && this.left) {
    this.left.insert(value);
  }
  if (value < this.value && !this.left) {
    this.left = new BinarySearchTree(value);
  }
  if (value > this.value && this.right) {
    this.right.insert(value);
  }
  if (value > this.value && !this.right) {
    this.right = new BinarySearchTree(value);
  }

  // if value < node.value:
  //   if (value < this.value) {
  //     // If the left child does not exist,
  //     if (!this.left) {
  //       this.; 
  //     }
  //   }
  //   if (value > this.value) {
  //     if (!this.right) {
  //       this.right = value; 
  //     }
  //   }
  //      insert the value as the left child:
  // if node.leftChild is None:
  //    node.leftChild = TreeNode(value)
 	// else:
  //      insert(value, node.leftChild)

};

biTreeMethods.contains = function (value) {
//returns a boolean
//  Inspect the value at the node.
//  If we’ve found the value we’re looking for, great!
  if (this.value === value) {
    return true; 
  }

  //  If the value we’re looking for is less than the current node, search for it in its left subtree.
  if (value < this.value) {
      if(!this.left){
          return false; 
      } else {
          return this.left.contains(value);
      }
  } 


  if (value > this.value) {
      if (!this.right) {
          return false;
      } else {
    //  If the value we’re looking for is greater than the current node, search for it in its right subtree.
        return this.right.contains(value);
      }
  }

  return false; 
};

biTreeMethods.depthFirstLog = function (callback) {
//accepts a callback and executes it on every value contained in the tree
//   for (let node in this.newTree) {
//     callback(node);
//   }

  callback(this.value);


  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};







/*
 * Complexity: What is the time complexity of the above functions?
 */
