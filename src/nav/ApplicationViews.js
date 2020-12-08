import React from "react"
import { Route } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const ApplicationViews = (props) =>{
    return(
        <>
         <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props}/>} />
        </>
    )
}