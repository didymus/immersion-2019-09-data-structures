// A linkedList class, in functional style, with the following properties:
// [].head property, a linkedListNode instance
// [].tail property, a linkedListNode instance
// [].addToTail() method, takes a value and adds it to the end of the list
// [].removeHead() method, removes the first node from the list and returns its value
// [].contains() method, returns boolean reflecting whether or not the passed -in value is in the linked list
// [] What is the time complexity of the above functions ?


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //add value to end of list
    //assign tail the last value. 
    list[Node(value)];
    list.tail = value;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

//node constructor function
var Node = function(value) {
  var node = {};

  node.value = value;
  //points to the next linked node
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
