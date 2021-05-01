import React from "react"
import "../styles/inputArray.css"

const InputArray= () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <h1>Process the input into a tree</h1>
                <label for="input_array">Tree source</label>
                <input type="text" id="input_array" name="input_array"></input>
                <button>Fetch</button>
                <button className="secondaryButton">Sample data 1</button>
                <button className="secondaryButton">Sample data 2</button>
            </div>
        </div>
    );
}

export default InputArray;