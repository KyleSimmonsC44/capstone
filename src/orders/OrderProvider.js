import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OrderContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])


    const getOrders = () => {
        return fetch("http://localhost:8088/requestedBakedGood")
            .then(res => res.json())
            .then(setOrders)
    }

    const addOrder = order => {
        return fetch("http://localhost:8088/requestedBakedGood", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrders)
    }

    /*
        You return a context provider which has the
        `employees` state, the `addEmployee` function,
        and the `getEmployee` function as keys. This
        allows any child elements to access them.
    */
    return (
        <OrderContext.Provider value={{
            orders, addOrder, getOrders
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}