var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  
  return newQueue; 
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function () {
  if (this.head <= this.tail) {
    let result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

queueMethods.size = function () {
  if (this.tail - this.head <= 0) {
    return 0;
  }
  return this.tail - this.head;
};

