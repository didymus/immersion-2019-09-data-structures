var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; 
    //value is going to be a string
    // Add the given value into storage w / a key of current count
    size++;
    
  };

  someInstance.pop = function() {
    if (size === 0) {
      return size; 
    }
    size--;

    // Check to see if stack is empty
    // if so, return undefined
    // Decrement count
    // Save element at top of stack to a var (to later return)
    // Delete that element from storage
    // Return saved element
    let result = storage[size]; 
    return result; 
  };

  someInstance.size = function() {
    return size; 

  };

  return someInstance;
};
