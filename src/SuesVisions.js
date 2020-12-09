import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./auth/UserProvider"
import { ApplicationViews } from "./nav/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./SuesVisions.css"

export const SuesVisions = () => {
                return(
                    <> 
                    <UserProvider>

                    <NavBar/>
                    </UserProvider>
                    <ApplicationViews/>
                    </>
                    )   
        
    }
