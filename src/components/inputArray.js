import React from "react"
import PropTypes from 'prop-types'

import "../styles/inputArray.css"
import parseArray from '../utils/transformArray.js'
import sampleData1 from "../sampleData/sampleTreeArray1.json"
import sampleData2 from "../sampleData/sampleTreeArray2.json"

const InputArray = ( {
    inputArr,
    inputArrError,
    setInputArr,
    setInputArrError,
    setInputJson
} ) => {

    const handleSetFieldInputArr = (event) => {
        handleSetFieldsetInputArrError(false)
        setInputArr(event.target.value)
    }

    const handleSetFieldsetInputArrError = (value) => {
        setInputArrError(value)
    }
    
    const handleFillSampleData1 = () => {
        handleSetFieldsetInputArrError(false)
        setInputArr(JSON.stringify(sampleData1))
    }

    const handleFillSampleData2 = () => {
        handleSetFieldsetInputArrError(false)
        setInputArr(JSON.stringify(sampleData2))
    }

    const handleFetch = () => {
        handleSetFieldsetInputArrError(false)
        try {
            const parse = parseArray(JSON.parse(inputArr))
            if(parse) setInputJson(parse)
            else handleSetFieldsetInputArrError(true)
        } catch(e) {
            handleSetFieldsetInputArrError(true)
        }
    }

    return (
        <div className="content-wrapper">
            <div className="content">
                <h1>Process the input into a tree</h1>
                <label for="input_array">Tree source</label>
                <input
                    type="text"
                    id="input_array"
                    name="input_array"
                    className={inputArrError? "inputError" : ""}
                    value={inputArr || ""}
                    onChange={handleSetFieldInputArr}
                />
                <div className="spanBox">
                    {inputArrError &&
                        <span>Parse error, please check the input and try again</span>
                    }
                </div>
                <button 
                    onClick={handleFetch}
                    disabled = {!inputArr}
                >Fetch</button>
                <button 
                    className="secondaryButton"
                    onClick={handleFillSampleData1}
                >
                    Sample data 1
                </button>
                <button 
                    className="secondaryButton"
                    onClick={handleFillSampleData2}
                >
                    Sample data 2
                </button>
            </div>
        </div>
    );
}

InputArray.propTypes = {
    inputArr: PropTypes.string,
    inputArrError: PropTypes.string,
    setInputArr: PropTypes.func,
    setInputArrError: PropTypes.func,
    setInputJson: PropTypes.func,
}

export default InputArray;