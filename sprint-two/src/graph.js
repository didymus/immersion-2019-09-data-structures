// Implement a graph class, in pseudoclassical style, with the following properties:
// [] It is an undirected graph.It does not have to be ‘connected’.
// [] An.addNode() method that takes a new node and adds it to the graph
// [] A.contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// [] A.removeNode() method that takes any node and removes it from the graph, if present.All edges connected to that Node are removed as well.
// [] An.addEdge() method that creates a edge(connection) between two nodes if they both are present within the graph
// [] A.hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// [] A.removeEdge() method that removes the connection between two nodes
// [] A.forEachNode() method that traverses through the graph, calling a passed in function once on each node
// [] What is the time complexity of the above functions ?

// Instantiate a new graph{
var Graph = function() {

  this.vertices = []; 
  this.edges = []; 
  this.edgeCount = 0;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node); 
  this.edges[node] = []; 

  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true; 
    }
  }

  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      this.vertices.splice(i, 1);
    }
  }
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if edges array at the index of fromNode + 1 = toNode
  if (this.edges[fromNode++] === toNode || this.edges[toNode++] === fromNode) {
    return true; 
  }

  return false; 

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.edges[toNode].push(fromNode);
  this.edges[fromNode].push(toNode);
  //fromNode = Vertex 1, toNode is Vertex 2
  this.edgeCount++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

