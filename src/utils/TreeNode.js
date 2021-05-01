
class TreeNode {
  constructor(id,left,right) {
    this.id = id 
    if(left !== null || right !== null){
      this.left = left
      this.right = right
    }
  }

  getID() {
    return this.id
  }

  getLeft() {
    return this.left
  }

  getRight() {
    return this.right
  }

  getTreeJson(){

  }


}

export default TreeNode;