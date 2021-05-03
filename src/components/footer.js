import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

import "../styles/footer.css"


const Header = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <h3>Ing. Jean Vega Díaz</h3>
                <div className="iconsBox">
                    <p>
                        <a 
                            href="https://github.com/JeanVegaD"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.linkedin.com/in/jeanvegad/"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </a>
                    </p>
                    <p>
                        <a 
                            href="mailto: jean0798@gmail.com"
                            target="_blank"
                        >
                            <EmailIcon />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;