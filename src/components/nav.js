import React from "react"
import {Link} from "react-router-dom"

export default function Nav()
{
    return (
        <ul className="navbar">
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
        </ul>
    )
}