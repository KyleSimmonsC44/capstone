import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
    const [user, setUser] = useState([])

    const getUser = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUser)
    }


    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <UserContext.Provider value={{
            user, getUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}