import React, { useState } from "react"
import '../styles/index.css'

import Header from '../components/header.js'
import InputArray from '../components/inputArray.js'
import OutputJson from '../components/outputJson.js'
//import Output from '../components/output.js'


const App = () => {
    const [inputArr, setInputArr] = useState('')
    const [inputArrError, setInputArrError] = useState(false)

    const [inputJson, setInputJson] = useState('')

    return (
        <>
            <Header />
            <InputArray 
                inputArr = {inputArr}
                inputArrError = {inputArrError}
                setInputArr = {setInputArr}
                setInputArrError = {setInputArrError}
                setInputJson={setInputJson}
            />
            <OutputJson />
        </>      
    )
}

export default App;
