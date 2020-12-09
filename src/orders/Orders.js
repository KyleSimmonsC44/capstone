import React from "react"
import "./Order.css"

export const Order = ({order, bakedGood, user}) =>(
    <div className="order">
        <h3>You have an order!</h3>
        <div>Submitted by: {user.firstName} {user.lastName}</div>
<div>They want: {bakedGood.name === "cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <div className="buttons">
            <button>
                Accept
            </button>
            <button>
                Deny
            </button>
        </div>
    </div>
)