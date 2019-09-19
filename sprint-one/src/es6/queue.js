class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}; 
    this.head = 0;
    this.tail = 0; 
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  };

  dequeue() {
    if (this.head <= this.tail) {
      let result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return result;
    }
  };

  size() {
    if (this.tail - this.head <= 0) {
      return 0;
    }
    return this.tail - this.head;
  };

}

window.Queue = Queue;
