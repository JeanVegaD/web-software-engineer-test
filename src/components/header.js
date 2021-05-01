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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                <button>Read more</button>
            </div>
        </div>
    </div>
    );
}

export default Header;