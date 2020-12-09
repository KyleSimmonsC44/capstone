import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../auth/UserProvider"
import "./NavBar.css"

export const NavBar = (props) => {
    const clearLocalStorage = () =>{
        localStorage.removeItem("app_login_id")
       
    }
    const { user, getUser } = useContext(UserContext)

    useEffect(() =>{
        getUser()
    },[])

    console.log(user)
    console.log(localStorage.getItem("app_login_id"))

    const currentUser = user.find(u=> u.id === parseInt(localStorage.getItem("app_login_id")))
    if (currentUser){
        console.log("test")
        {if (currentUser.admin === true){
            return (
                <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About/Pricing</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
            </li>
            <li className="navbar__item">
            <Link className="navbar__link" to="/adminhome">Admin Home</Link>
            </li>
            <li className="navbar__item">
                    {localStorage.getItem("app_login_id") ? <Link className="navbar__link" to="/login" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> }
            </li>
        </ul>
        )
    } else if (localStorage.getItem("app_login_id")){
        return(
            <ul className="navbar">
            
        <li className="navbar__item">
            <Link className="navbar__link" to="/about">About/Pricing</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/gallery">Gallery</Link>
        </li>
        <li className="navbar__item">
        <Link className="navbar__link" to="/order">Order Form</Link></li>
        <li className="navbar__item">
                {localStorage.getItem("app_login_id") ? <Link className="navbar__link" to="/login" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> }
        </li>
     
    </ul>
      )  
    } else{
        return(
            <ul className="navbar">
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About/Pricing</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
            </li>
            <li className="navbar__item">
                    {localStorage.getItem("app_login_id") ? <Link className="navbar__link" to="/login" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> }
            </li>
         
        </ul>
        )
    }
    }} else{
        console.log("test else")
        return("")
    }
    
}
