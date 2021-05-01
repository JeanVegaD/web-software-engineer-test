import React from "react"
import '../styles/index.css';
import parseArray from '../utils/transformArray.js'

import Header from '../components/header.js'
import InputArray from '../components/inputArray.js'
import OutputJson from '../components/outputJson.js'
import Output from '../components/output.js'


const App = () => {

    parseArray([1, [2], [3, null, [5]]] )

    return (
        <>
            <Header />
            <InputArray />
            <OutputJson />
            <Output />
        </>      
    )
}

export default App;
