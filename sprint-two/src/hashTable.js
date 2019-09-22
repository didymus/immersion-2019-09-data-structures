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
  this.size = 0; 
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  //assign the key to the index of storage 
  //if that storage index (bucket)if empty, push an array of key and value
  //if that storage 
  //assing value to storage at that index

  //make a variable that accesses 'a bucket'
  //bucket should be an array 
  let bucket = this._storage.get(index) || []; 

  bucket.push([key, value]); 
 
  console.log(this.size);
  //use set
  this._storage.set(index, bucket);
  
  //iterate through the bucket 
  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;  
    }
  }

  this.size++; 
  if (this.size / this._limit >= .75){
     this.resize(this._limit * 2); 
  }
  //if the key is at the 0 index, 
  //set value to 1st index
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  let bucket = this._storage.get(index) || []; 

  for (var i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === key) { 
      return tuple[1];
    }
  }
};
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  let bucket = this._storage.get(index) || []; 
  for (var i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === key) { 
      bucket.splice(i, 1);
      //took our return tuple here because it prematurely eneded the code
      //not allowing the below decrementer and resize call 
    }
  }

  this.size--;
  if (this.size <= (.25 * this._limit) && this._limit > 8){
    this.resize(this._limit / 2); 
 }
};

// create resize method/function 
HashTable.prototype.resize = function (newLimit){
  
  //assign the limit to the new one
  this._limit = newLimit;
  
  //hold all the old values and 
  let oldHashStorage = []; 
  
  //iterate over the original storage, and hold all the old values 
  this._storage.each((bucket, index, storage) => {
    
    oldHashStorage.push(bucket); 
    
    //if bucket is not undefined/empty
    if (oldHashStorage.length === storage.length){

      //create a new storage array based off the new limit 
      this._storage = LimitedArray(this._limit)
      
      //reset the size
      this.size = 0; 
    }
  }); 
  
  //create a new hashtable with them spread out 
    //iterate over the old values 
    oldHashStorage.forEach((bucket, index) => {
    //if the index contanins value 
      if (bucket){
        //loop through the bucket
        for (var i = 0; i < bucket.length; i++) {
          //create varibles to designate each tuple its key and value
          let tuple = bucket[i];
          let val = tuple[1];
          let key = tuple[0]
          //re-insert them into the empty storage array that has been setup 
          //with the new limit 
          this.insert(key, val);
        }
      }
    })
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

