var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = Object.create(stackMethods);
  newStack.storage = {}; 
  newStack.length = 0; 

  return newStack; 
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}; 

stackMethods.pop = function() {
  if (this.size() > 0) {
    let result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  } else {
    return null;
  }
};

stackMethods.size = function() {
  return this.length;
};



