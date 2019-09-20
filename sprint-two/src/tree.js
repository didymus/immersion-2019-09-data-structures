// A tree class, in functional with shared methods style, with the following
// properties:
// [x].children property, an array containing a number of subtrees
// [x].addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// [x] A.contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
// [] What is the time complexity of the above functions ?


var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;

  // an array containing a number of subtrees
  newTree.children = []; 

  //put the treeMethods on the newTree
  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

//takes any value, sets that as the target of a node, 
//and adds that node as a child of the tree
treeMethods.addChild = function(value) {

  //define newChild
  let newChild = Tree(value);

  //push newChild into the children array
  this.children.push(newChild);

};

//takes any input and returns a boolean reflecting whether it 
//can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  //iterate over the children array
  for (let i = 0; i < this.children.length; i++) {

    //use recursion to check if a child contains target
    if (this.children[i].contains(target)) {

      return true; 
    }
  } 

  return false; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
