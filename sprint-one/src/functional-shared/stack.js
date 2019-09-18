// Functional instantiation with shared methods: same as step 1, but with shared methods
// Do:
// Work within the src / functional - shared / folder
// Create an object that holds the methods that will be shared by all instances of the class
//   Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance
// Don’t: Use the keyword new or prototype chains

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // let  = {};
  //create a storage container//cache
  let newStack = {};
  newStack.storage = {};
  newStack.length = 0; 
  //created a size increimetor 
  _.extend(newStack, stackMethods);

  return newStack; 
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value; 
  this.length++; 
};
  

//add a pop method
stackMethods.pop = function() {

  if (this.size() > 0) {
    //save result of stroage place 
    var result = this.storage[this.length - 1];
    //delete it from storage
    delete this.storage[this.length - 1];

    this.length--;
    //return the saved result 
    return result;

  } else {
    return null;
  }
};

  
//add a size method 
stackMethods.size = function() {
  //return size; 
  return this.length; 
};