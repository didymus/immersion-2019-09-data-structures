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

    //define new node 
    let newNode = Node(value);

    //assign the newly created node to the list
    list[length] = newNode; 
    
    //if head is null, meaning its not assigned, it equals the new node
    if (list.head === null) {
      list.head = newNode; 
      length++;
      //if head is aleady assigned, meaning there is a node in the list, 
      //we want to assign that previous node's "next" value to reference
      //the incoming node
    } else {
      //list[length - 1].next = list[length];
      list.tail.next = newNode; 
    }
    
    //assign the tail to the newly created node. 
    list.tail = newNode;
    //increase the length holder
    return list; //$$$$
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
