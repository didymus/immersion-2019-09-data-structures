// Implement a graph class, in pseudoclassical style, with the following properties:
// [x] It is an undirected graph.It does not have to be ‘connected’.
// [x] An.addNode() method that takes a new node and adds it to the graph
// [x] A.contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// [x] A.removeNode() method that takes any node and removes it from the graph, if present.All edges connected to that Node are removed as well.
// [x] An.addEdge() method that creates a edge(connection) between two nodes if they both are present within the graph
// [x] A.hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// [x] A.removeEdge() method that removes the connection between two nodes
// [x] A.forEachNode() method that traverses through the graph, calling a passed in function once on each node
// [x] What is the time complexity of the above functions ?

// Instantiate a new graph{
var Graph = function() {

  //creating the nodes container 
  this.nodes = {};  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

    //assigning the nodes object, a key of node with a object value
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

    //does the nodes object contain the given node? returns boolean
    return this.nodes[node] ? true : false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

    //iterate over the nodes 
  for (let nodeKey in this.nodes) {
    
    //call the remove edge function on node
      this.removeEdge(node, nodeKey);
    }
    
    //remove matching node from nodes object
  delete this.nodes[node];

};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

    //are the nodes next to eachother?
  return this.nodes[fromNode][toNode] ? true : false; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

    //assign each node a key of the other, and assign it to true
    this.nodes[fromNode][toNode] = true; 
    this.nodes[toNode][fromNode] = true; 

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    
    //delete each nodes reference to the other
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  //iterate through the nodes, and apply cb function to each node
    for (let node in this.nodes) {
    cb(node);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

