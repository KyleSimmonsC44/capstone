import React from "react"
import "./Order.css"

export const OrderInbox = ({user}) =>(
    <div className="order">
        <h3>You have an order!</h3>
<div>Submitted by: {user && user.name}</div>
    </div>
)
