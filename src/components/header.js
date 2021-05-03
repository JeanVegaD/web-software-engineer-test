import React from "react"

import "../styles/header.css"

const Header = () => {
    return (
        <div>
            <div className="navbar-wrapper">
                <div className="navbar">
                    <h1>Web Software Engineer Test</h1>
                </div>
            </div>
        <div className="header-wrapper">
            <div className="header">
                <h1>About this test</h1>
                <p>In the following test, a series of problems that web developers face every day will be exposed. 
                <br /> With it, problem solving skills will be put to the test using the most advanced web technology, to give users the best possible experience.</p>
                <button
                    onClick={() => window.open('https://github.com/JeanVegaD/web-software-engineer-test/blob/master/README.md', "_blank")}
                >
                    Read more
                </button>
            </div>
        </div>
    </div>
    );
}

export default Header;