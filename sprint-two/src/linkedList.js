// A linkedList class, in functional style, with the following properties:
// [].head property, a linkedListNode instance
// [].tail property, a linkedListNode instance
// [].addToTail() method, takes a value and adds it to the end of the list
// [].removeHead() method, removes the first node from the list and returns its value
// [].contains() method, returns boolean reflecting whether or not the passed -in value is in the linked list
// [] What is the time complexity of the above functions ?


var LinkedList = function() {

  //contains all the nodes
  var list = {};
  let length = 0;

  //poionts to first node in list
  list.head = null;

  //points to last node in list
  list.tail = null;


  //takes a value and adds it to the end of the list
  list.addToTail = function(value) {

    //define new node 
    let newNode = Node(value);

    //assign the newly created node to the list
    list[length] = newNode; 

    //if head is null, meaning its not assigned, it equals the new node
    if (list.head === null) {
      list.head = newNode; 
    }

    //assign the tail to the newly created node. 
    list.tail = newNode;

    //increase the length holder
    length++;
  };

  //removes the first node from the list and returns its value
  list.removeHead = function() {
  //if head is equal to a value, 
  //create a temp var to save that value
  //delete that node
  //assign head to next value
  //delete that first node 

  length--;
  //return the value

  };

  //use iteration
  list.contains = function(target) {
    //iterative through the list to search for target

    //nodes are objects, so us
    //if node.value === target
    //
  };

  return list;
};

//node constructor function
//each node is an obejct
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
