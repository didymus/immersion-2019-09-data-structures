var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use the keyword this in your methods
  // Use _.extend to copy the methods onto the instance
    //takes arguments and adds its properties to the first argument

  let someInstance = {};
  //create a container, some instance {}
  let storage = {}; 
  //create a storage container//cache
  let size = 0;
  //created a size increimetor 

  //add a push method
    //
    someInstance.push = function(value) {
      this.storage[this.size] = value; 
      this.size++; 
      //value is a string

    };

  //add a pop method
  someInstance.pop = function() {
    this.size--; 
    //decrease size
  }

  //add a size method 
  someInstance.size = function() {
    //return size; 
    return this.size; 
  }


};

var stackMethods = {};

