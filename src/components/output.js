import React from "react"
import PropTypes from 'prop-types'

import "../styles/output.css"

const Output = ( {binTree}) => {
    
    const parseBinTree = ( node ) =>{
        const id = node?.id
        const left = node?.left
        const right = node?.right
        const isDeepest = node?.isDeepest

        return(
            <div className={isDeepest ? "parentDeepst" : "parent"} >
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
                    {binTree && binTree.getDeeperNode()}
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