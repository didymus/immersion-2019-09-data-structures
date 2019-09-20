// [ ] A hashTable class, in pseudoclassical style:
// [ ] First: Play with each of the helper functions provided to get a sense of what they do.
// You will use the provided hash function to convert any key into an array index. 
// Try interacting with it from the console first.
// A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.
// Make the following properties appear on all instances:
// [ ] An .insert() method
// [ ] A .retrieve() method
// [ ] A .remove() method
// [ ] What is the time complexity of the above functions?
// [ ] Using your understanding of hash tables, refactor your set implementation from above to run in constant time


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

