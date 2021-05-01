import TreeNode from './treeNode';


const validateNode = (element) => {
    if(typeof element === "string" || typeof element === "number"){
        return true
    }else{
        return false
    }
}

const validateSingleArray = (array) => {
    if(Array.isArray(array)){
        if(array.length === 1)
            return validateNode(array[0])
        else if(array.length === 2)
            return (validateNode(array[0])  && Array.isArray(array[1]))
        else if(array.length === 3){
            return (
                validateNode(array[0])
                && (Array.isArray(array[1]) || array[1] === null)
                && Array.isArray(array[2])  
            )
        }
        else{
            return false
        }
    }else{
        return false
    } 
}

const validateArray = (array) => {
    let flag = true
    if(validateSingleArray(array)){
        if(array.length === 2)
            return validateArray(array[1])
        if(array.length  === 3 ){
            if(Array.isArray(array[1])){
                return validateArray(array[1]) &&  validateArray(array[2])
            }
            else{
                return validateArray(array[2])
            }
        }
    }else flag = false
    return flag
}

const createDataStrcuture = (array) => {
    let id
    let left
    let right

    switch (array.length) {
        case 1:
            id = array[0]
            left = null
            right = null
            break;
        case 2:
            id = array[0]
            left = createDataStrcuture((array[1]))
            right = null
            break;
        case 3:
            id = array[0]
            left = Array.isArray(array[1]) ? createDataStrcuture((array[1])) :  null
            right = createDataStrcuture((array[2]))
            break;
        default:
            break;
    }

    return new TreeNode(id,left,right)

}

const parseArray = (array) =>{
    if(validateArray(array)){
        console.log( JSON.stringify(createDataStrcuture(array)))
    }

}

export default parseArray;