import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    const clearLocalStorage = () =>{
        localStorage.removeItem("app_login_id")
       
    }

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Candy Stores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About/Pricing</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/cart">Cart</Link>
            </li>
            <li className="navbar__item">
                    {localStorage.getItem("app_login_id") ? <Link className="navbar__link" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> }
            </li>
         
        </ul>
    )
}