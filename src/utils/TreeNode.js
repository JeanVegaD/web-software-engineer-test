
class TreeNode {
  constructor(id,left,right) {
    this.id = id 
    if(left != null && right != null){
      this.left = left
      this.right = right
    }
    else if(left === null && right != null){
      this.left = null
      this.right = right
    }
  }

  get getID() {
    return this.id
  }

  get getLeft() {
    return this.left
  }

  get getRight() {
    return this.right
  }

}

export default TreeNode;