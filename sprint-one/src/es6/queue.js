class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}; 
    this.head = 0;
    this.tail = 0; 
  }

  //enqueue(string) - Add a string to the back of the queue
  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  };

  //dequeue() - Remove and return the string at the front of the queue
  dequeue() {
    if (this.head <= this.tail) {
      let result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return result;
    }
  };

  // size() - Return the number of items in the queue
  size() {
    if (this.tail - this.head <= 0) {
      return 0;
    }
    return this.tail - this.head;
  };

}

window.Queue = Queue;
