
function LinkedList() {
  this.head = null; // Initially set to null
  this.tail = null; // Initially set to null
};

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};

LinkedList.prototype.addToHead = function(value) {
  // Make a new node as the head with no other nodes after
  var newNode = new Node(value, this.head, null);
  // If there is nodes, make this new node that old nodes previous node
  if (this.head) this.head.prev = newNode
  // if linklist is empty make the new node the tail and head node
  else this.tail = newNode;
  // Make the new node the head node
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null
  else this.tail = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  // Loop through nodes from the head
  while(currentNode){
    // if you find the searchvalue return the node value;
    if (currentNode.value === searchValue) return currentNode.value;
    // increment/switch the currentnode to the next one
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value){
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while (currentNode){
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex ++
  }
  return indexes
}
// indexOf method
var ll = new LinkedList();
// ll.addToHead(8);
// ll.addToHead(3);
// ll.addToHead(5);
// ll.addToHead(3);
ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);
console.log(ll.indexOf(5));



// Search method
// var ll = new LinkedList();
// ll.addToHead(123);
// ll.addToHead(70);
// ll.addToHead('hello');
// ll.addToTail(19);
// ll.addToTail('world');
// ll.addToTail(20);
// console.log(ll.search('world'));

// Test while loop
// var ll = new LinkedList();
// ll.search();

// Create removeTail function
// var ll = new LinkedList();
// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');
// // ll.removeTail();
// console.log(ll.removeTail());

// Create removeHead function
// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// ll.removeHead();
// console.log(ll.removeHead());

// Create addToTail function
// var myLL = new LinkedList();
// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);
// myLL.addToHead(100);
// console.log(myLL.tail.prev.prev.prev);
// console.log(myLL.tail.prev.prev);
// console.log(myLL.tail.prev);
// console.log(myLL);

// Create addToHead function
// var ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll)

// create node instance
// var node1 = new Node(100, 'node2', null);
// console.log(node1)

// Create LinkedList instances
// var LL = new LinkedList();
// var userList = new LinkedList();
// var toDoList = new LinkedList();
// console.log(LL);
