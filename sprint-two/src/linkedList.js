// A linkedList class, in functional style, with the following properties:
// [x].head property, a linkedListNode instance
// [x].tail property, a linkedListNode instance
// [x].addToTail() method, takes a value and adds it to the end of the list
// [x].removeHead() method, removes the first node from the list and returns its value
// [x].contains() method, returns boolean reflecting whether or not the passed -in value is in the linked list
// [X] What is the time complexity of the above functions ? O(1), O(n), O(1), O(1), O(n)


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

    //define a new node object
    let newNode = Node(value);

    //assign the newly created node to the list with a key of whatever length is set to
    list[length] = newNode; 
    
    //if head is null, meaning its not assigned a node reference 
    if (list.head === null) {

      //assign it to refernce the new node
      list.head = newNode; 

      //incrase the length placeholder
      length++;

    } else {
      //because we're adding new nodes from the back of the list,
      ////we need to use tail's current reference node (which will become 2nd to last)
      //and assign its 'next' to reference the incoming node
      list.tail.next = newNode; 
  }
    
    //assign the tail to reference to the newly created node. 
    list.tail = newNode;
    
    return list; 
  };
  
  //removes the first node from the list and returns its value
  list.removeHead = function() {
    
  //create a var to save head value to return later
  let removedHead = list.head.value;

  //create a variable to hold value of next/replacement link
    let afterCurrentHead = list.head.next;

    //assign head to the next link's value
    list.head = afterCurrentHead;

    //return the value
    return removedHead;

  };

  //use iteration
  list.contains = function(target) {
    let currentNode = list.head;
    
    //nodes are objects
    //iterative through the list of nodes to search for target
    while (currentNode !== null) {

      //if node.value === target return true
      if (currentNode.value === target) {
        return true;
      }

      //if there are no matches by the end of the link, return false
      if (currentNode.next === null) {
        return false;
      }

      currentNode = currentNode.next;
    }
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
