import React from "react"
import PropTypes from 'prop-types'

import "../styles/output.css"

const Output = ( {binTree}) => {

    const parseBinTree = ( node ) =>{
        const id = node?.id
        const left = node?.left
        const right = node?.right

        return(
            <div className="parent">
                {node &&
                    <>
                        <p className="id">{id}</p>
                        {(left || right) &&
                            <div className="children">
                                <div>
                                    {parseBinTree(left)}
                                </div>
                                <div>
                                    {parseBinTree(right)}
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
        )
    }
    
    return (
        <div className="content-wrapper">
            <div className="content">
                <h1>Output</h1>
                <div className="outputArea">
                    {binTree && parseBinTree(binTree)}
                </div>
                
            </div>
        </div>
    )
}

Output.propTypes = {
    binTree: PropTypes.object
}

export default Output;