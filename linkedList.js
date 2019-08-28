//to find the middle of a linked list
// here we use a one node pointer that moves in increments of 1 (slow)
// and another for incrmementing by 2 (fast)
//whenever the fast pointer reaches it's limit, we know that the current position of the slow
// pointer is at the halfway position
function Node(data,next) {
  this.data = data;
  this.next = next;
}

var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 
var n4 = new Node("Blue", n3); 
var n5 = new Node("Daniel", n4); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n5;  

var slow = head;
var fast = head;
console.log('initial slow.data: ',slow.data)
console.log('initial fast.data: ',fast.data)
while (slow.next !== null && fast.next !== null) {
  slow= slow.next
  fast = fast.next.next
  console.log('slow.data: ',slow.data)
  console.log('fast.data: ',fast.data)
}
console.log(slow.data)