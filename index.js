
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

BST.prototype.depthFirstTraversal = function(iteratorfunc){
  // In order all nodes in order from least to greatest, from left to right.
  if (this.left) this.left.depthFirstTraversal(iteratorfunc);
  iteratorfunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorfunc);
  // 
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

// Testing depthFirstTraversal
bst.depthFirstTraversal(log);

function log(value){
  console.log(value);
}

// Testing contains
// console.log(bst.contains(15))

// Testing Insert
// // console.log(bst.right.left.left) // 59
// // console.log(bst.left.right.left) // 35
// console.log(bst.right.right) // 100 + child nodes