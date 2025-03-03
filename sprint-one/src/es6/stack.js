class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0; 
  }

  push(value) {
    this.storage[this.length] = value; 
    this.length++;
  }

  pop() {
    if (this.size() > 0) {
      let result = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return result;
    } else {
      return null;
    }
  }

  size() {
    return this.length;
  }
}

window.Stack = Stack;
