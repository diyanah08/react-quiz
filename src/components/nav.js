import React from "react"
import {Link} from "react-router-dom"

export default function Nav() {
    const [isActive, setisActive] = React.useState(false);
    
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <img src = {require("../images/logo.jpg")} width="35px" height="18px"/> FUN MATHS
                

                <div
                    onClick={() => {
                    setisActive(!isActive);
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>

            </div>

            <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >

                <div className="navbar-start">
                    <li className="nav-item">
                        <Link to='/react-quiz/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/react-quiz/numbers-to-10000' className="nav-link">Numbers to 10 000</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/react-quiz/addition-and-subtraction' className="nav-link">Addition and Subtraction</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/react-quiz/multiplication-and-division' className="nav-link">Multiplication and Division</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}