
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if (value <= this.value){
    // Our rule is the lesser or equal value needs to be on the left
    // If there is no left child? create node
    if (!this.left) this.left = new BST(value);
    // else we call this insert recursively
    else this.left.insert(value);
  } else if (value > this.value){
    // Our rule is the greater value needs to be on the left
    // If there is no right child? create node
    if (!this.right) this.right = new BST(value);
    // else we call this insert recursively
    else this.right.insert(value);
  }
}

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthFirstTraversal = function(iteratorfunc, order){ // Traverse up and down/ Vertical
  if (!order) return 'please secify order parameter';
  if (order ==='pre-order') iteratorfunc(this.value); // From parent node, down the left branch, then right branch towards the right [50, 30, 20, 10, 45, 35, 70, 60, 59, 100, 85, 105]
  if (this.left) this.left.depthFirstTraversal(iteratorfunc, order);
  if (order === 'in-order') iteratorfunc(this.value); // From bottom left (Lowest number to highest) In order all nodes in order from least to greatest, from left to right.[10, 20, 30, 35, 45, 50, 59, 60, 70, 85, 100, 105]
  if (this.right) this.right.depthFirstTraversal(iteratorfunc, order);
  if (order === 'post-order') iteratorfunc(this.value); // From Lowest to highest number through all the branches going through all the children [10, 20, 35, 45, 30, 59, 60, 85, 105, 100, 70, 50]
  (iteratorfunc, order);
  // 
}

BST.prototype.breadthFirstTraversal = function(iteratorfunc) { // Traverse left and right/ Horizontal Levels [50, 30, 70, 20, 45, 60, 100, 10, 35, 59, 85, 105]
  var queue = [this];
  while(queue.length){
    var treeNode = queue.shift();
    iteratorfunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

BST.prototype.getMinVal = function(){
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function(){
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}

// // Insert values
var bst = new BST(50)
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


// Testing getMinVal and getMaxVal
console.log('MIN:', bst.getMinVal());
console.log('MAX:', bst.getMaxVal());

// Testing breadthFirstTraversal
// bst.breadthFirstTraversal(log2);

function log2(node){
  console.log(node.value);
}

// Testing depthFirstTraversal
// bst.depthFirstTraversal(log, 'post-order');
function log(value){
  console.log(value);
}

// Testing contains
// console.log(bst.contains(15))

// Testing Insert
// // console.log(bst.right.left.left) // 59
// // console.log(bst.left.right.left) // 35
// console.log(bst.right.right) // 100 + child nodes