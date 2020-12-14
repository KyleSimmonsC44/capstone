import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../auth/UserProvider"
import "./NavBar.css"

export const NavBar = (props) => {
    const clearLocalStorage = () =>{
        localStorage.removeItem("app_login_id")
        localStorage.removeItem("admin")
    }

    const currentUser = localStorage.getItem("app_login_id")
        console.log("Auth User", props.authUser, localStorage.getItem("admin"))
            return (
                <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About/Pricing</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
            </li>
            {props.authUser && localStorage.getItem("admin") === "true" &&
            <li className="navbar__item">
            <Link className="navbar__link" to="/adminhome">Admin Home</Link>
            </li>
            }
            {props.authUser && localStorage.getItem("admin") === "false" &&
            <li className="navbar__item">
            <Link className="navbar__link" to="/orderhistory">Order History</Link>
            </li>
            }
            {props.authUser && localStorage.getItem("admin") === "false" &&
                <li className="navbar__item">
            <Link className="navbar__link" to="/order">Order Form</Link>
            </li>
            }
            <li className="navbar__item">
                    {localStorage.getItem("app_login_id") ? <Link className="navbar__link" to="/login" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> }
            </li>
        </ul>
        )

    
}
