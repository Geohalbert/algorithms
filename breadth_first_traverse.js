function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}    

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

function bfs(rootNode) {
  // Check that a root node exists.
  if (rootNode === null) {
    return;
  }
  
  // Create our queue and push our root node into it.
  var queue = [];
  var final = [];
  queue.push(rootNode);
  
  // Continue searching through as queue as long as it's not empty.
  while (queue.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    var currentNode = queue[0];
    
    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
      console.log('queue: ',queue);
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
      console.log('queue: ',queue);
    }
    // Remove the currentNode from the queue.
    var deque = queue.shift()
    // console.log('deque: ',deque)
    final.push(deque.data)
    // console.log('final: ',final)
    // console.log('queue: ',queue);
  }
  
  return final
}
console.log('bfs(root): ',bfs(root))