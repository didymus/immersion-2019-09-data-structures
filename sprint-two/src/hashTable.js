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
//O(1) for insert O(1), retrieve O(1), remove
// [ ] Using your understanding of hash tables, refactor your set implementation from above to run in constant time


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  //create a property of length to check size of hashtable
  //
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  //assign the key to the index
  //assing value to storage at that index



  //make a variable that accesses 'a bucket'
  //bucket should be an array 
  let bucket = this._storage.get(index); //|| []; 

  let filled = false; 
  
  if (filled === true) {
    bucket.push([key, value]); 
    //use set
    this._storage.set(index, bucket);
  }

  //iterate through the bucket 
  for (var i = 0; i < bucket.length; i ++) {
  
    if (bucket[i][0] === key) {
      bucket[i][1] = value; 
      filled = true; 
    }
  }

  //if the key is at the 0 index, 
  //set value to 1st index
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  let bucket = this._storage.get(index);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  let bucket = this._storage.get(index);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

