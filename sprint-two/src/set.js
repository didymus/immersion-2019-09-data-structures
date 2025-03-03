// A set class, in prototypal style, with the following properties:
// [] An.add() method, takes any string and adds it to the set
// [] A.contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
// [] A.remove() method, takes any string and removes it from the set, if present
// [] What is the time complexity of the above functions ?
//  Note : Sets should not use up any more space than necessary.
//  Once a value is added to a set, adding it a second time should not increase the size of the set.
//  Note: Until the advanced section, your sets should handle only string values.
//  Note: This is a rather simple data structure.
//Take a look at the Wikipedia entry.Which native Javascript type fits the requirements best ?


//A set is like an array that only allows values to be added once, ie UNIQUE VAlUES

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if the item isnt contained in the set, add it
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  //iterate through the 
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true; 
    }
  }

  return false; 
  //if ._.storage conaints the item, 
  //return true, 
  //else return false 
};

setPrototype.remove = function(item) {
  //need 
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1); 
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
