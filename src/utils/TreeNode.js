
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

  get getID(){
    return this.id
  }

  get getLeft(){
    return this.left
  }

  get getRight(){
    return this.right
  }

  hasChildren(node){
    if(node){
      if(node.left || node.right){
        return true 
      }else{
        return false
      }
    }else{
      return false
    }
    
  }

  getDeeperNodeAux(node,depth,parent){
    node.depth = depth
    node.parent = parent
    if(this.hasChildren(node)){
      let tempLeft = node.left? this.getDeeperNodeAux(node.left, depth + 1 , node) : null
      let tempRight = node.right? this.getDeeperNodeAux(node.right, depth + 1 , node) : null

      if(tempLeft === null){
        return tempRight
      }
      else if (tempRight === null){
        return tempLeft
      }
      else if(tempLeft.depth === tempRight.depth){
        node.depth = node.depth + 1
        return node
      }
      else if(tempLeft.depth > tempRight.depth){
        return tempLeft
      }
      else {
        return tempRight 
      }

    }else{
      return node
    }

  }

  getDeeperNode(){
    this.getDeeperNodeAux(this,0,this).isDeepest = true
  }
}

export default TreeNode;