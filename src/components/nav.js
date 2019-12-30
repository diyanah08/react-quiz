import React from "react"
import {Link} from "react-router-dom"

export default function Nav() {
    const [isActive, setisActive] = React.useState(false);
    
    return (
    
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                {/* <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a> */}

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

                <div class="navbar-start">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/numbers-to-1000' className="nav-link">Numbers to 1000</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/addition-and-subtraction' className="nav-link">Addition and Subtraction</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/multiplication-and-division' className="nav-link">Multiplication and Division</Link>
                    </li>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        Maths Is Fun!
                    </div>
                </div>
            </div>
        </nav>
    )
}