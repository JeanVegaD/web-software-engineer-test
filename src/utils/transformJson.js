const validateNode = (element) => {
    if(typeof element === "string" || typeof element === "number"){
        return true
    }else{
        return false
    }
}

const validateSingleKey = (object) => {
    if(typeof object === "object"){
        let keys = Object.keys(object)
        let values = Object.values(object)
        if(keys.length === 1){
            if(keys[0] === "id" ){
                return validateNode(values[0])
            }else{
                return false
            }
        }else if(keys.length === 2){
            if(keys[0] === "id" &&  keys[1]=== "left"){
                return validateNode(values[0]) && typeof values[1] === "object"
            }else{
                return false
            }
        }else if(keys.length === 3){
            if(keys[0] === "id" &&  keys[1]=== "left" &&  keys[2]=== "right"){
                return (validateNode(values[0]) 
                && (typeof values[1] === "object" || values[1] === null)
                && typeof values[2] === "object" )
            }else{
                return false
            }
        }
        else{
            return false
        }
    }else{
        return false
    }
}

const validateJson = (json) =>{
    let flag = true
    if(validateSingleKey(json)){
        let keys = Object.keys(json)
        let values = Object.values(json)
        console.log("keys",keys)
        console.log("values",values)
        if(keys.length === 2)
            return validateJson(values[1])
        if(keys.length  === 3 ){
            if(values[1] !== null){
                return validateJson(values[1]) &&  validateJson(values[2])
            }
            else{
                return validateJson(values[2])
            }
        }
    }else flag = false
    return flag
}

const parseJson = (json) =>{
    try {
        const pJson = JSON.parse(json)
        if(validateJson(pJson)){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        return false;
    }
}

export default parseJson;