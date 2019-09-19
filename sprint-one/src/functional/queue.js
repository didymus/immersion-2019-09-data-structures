// [] Implement a queue with the following methods:

// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let head = 0; 
  let tail = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++; 
    //value is a string 

  };

  someInstance.dequeue = function() {
    if (head <= tail) {
      let result = storage[head];
      delete storage[head];
      head++;
      return result; 
    }

  };

  someInstance.size = function() {
    if (tail - head <= 0) {
      return 0;
    }
    return tail - head;  
  };

  return someInstance;
};
