import React, { useEffect } from "react"
import PropTypes from 'prop-types'

import '../styles/outputJson.css'
import parseJson from '../utils/transformJson.js'

const OutputJson = ( {
    inputJson,
    inputJsonError,
    setInputJson,
    setInputJsonError
} ) => {

    const handleSetFieldInputJson = (event) => {
        setInputJson(event.target.value)
    }

    const handleSetFieldsetInputArrError = (value) => {
        setInputJsonError(value)
    }

    const handleProcessJson = () => {
        if(parseJson(inputJson)) console.log(true)
        else handleSetFieldsetInputArrError(true)
    }

    useEffect(() => {
        handleSetFieldsetInputArrError(false)
    }, [inputJson])

    return (
        <div className="content-wrapper">
            <div className="content">
                <label for="output_json">Tree text</label>
                <textarea 
                    id="output_json" 
                    rows="10" 
                    name="output_json"
                    value={inputJson}
                    onChange={handleSetFieldInputJson}
                    className={inputJsonError? "inputError" : ""}
                />
                 <div className="spanBox">
                    {inputJsonError &&
                        <span>Parse error, please check the input and try again</span>
                    }
                </div>
                <button onClick={handleProcessJson}>Process</button>
            </div>
        </div>
    )
}

OutputJson.propTypes = {
    inputJson: PropTypes.string,
    inputJsonError: PropTypes.string,
    setInputJson: PropTypes.func,
    setInputJsonError: PropTypes.func,
}

export default OutputJson;