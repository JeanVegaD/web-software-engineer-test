import React from "react"
import '../styles/outputJson.css';

const OutputJson = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <label for="output_json">First Name</label>
                <textarea id="output_json" rows="10" name="output_json" />
                <button>Fetch</button>
            </div>
        </div>
    );
}

export default OutputJson;