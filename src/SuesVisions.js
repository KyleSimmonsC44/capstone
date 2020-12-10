import React from "react"
import { Route, Redirect } from "react-router-dom"
import { UserProvider } from "./auth/UserProvider"
import { ApplicationViews } from "./nav/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./SuesVisions.css"
import { useState } from "react"

export const SuesVisions = () => {
    const [authUser, setAuthUser] = useState(false)
    return (
        <>
            <Route render={props => <NavBar {...props} authUser={authUser}/>} />
            <Route render={() => {
                if (authUser && localStorage.getItem("app_login_id")) {
                    return (
                        <>
                            <Route render={props => <ApplicationViews {...props} />} />
                        </>
                    )
                } else {
                    return <Route render={props => <ApplicationViews {...props} />} />
                }
            }} />
            <Route path="/login" render={props => <Login {...props} setAuthUser={setAuthUser} />} />
            <Route path="/register" render={props => <Register {...props} setAuthUser={setAuthUser} />} />
        </>
    )
        
    }
