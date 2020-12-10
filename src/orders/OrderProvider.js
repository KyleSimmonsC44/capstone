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

    const updateOrders = (order) =>{
        return fetch(`http://localhost:8088/requestedBakedGood/${order.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(getOrders)
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

 
    return (
        <OrderContext.Provider value={{
            orders, addOrder, getOrders, updateOrders
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}