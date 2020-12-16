import React, { useState, useEffect } from "react"


export const AboutContext = React.createContext()

export const AboutProvider = (props) =>{
    const [about, setAbout] = useState([])

    const getAbout = () =>{
        return fetch("http://localhost:8088/about")
            .then(res => res.json())
            .then(setAbout)
    }

    const updateAbout = (about) =>{
        return fetch(`http://localhost:8088/about/${about.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(about)
        })
        .then(getAbout)
    }

    return (
        <AboutContext.Provider value={{
            about, getAbout, updateAbout
        }}>
            {props.children}
        </AboutContext.Provider>
    )
}