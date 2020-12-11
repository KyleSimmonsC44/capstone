import React, { useContext } from "react"
import "./Order.css"
import { OrderContext } from "./OrderProvider";

export const Order = ({order, bakedGood, user}) =>{

    const { updateOrders } = useContext(OrderContext)
    
return(
<div className="order">
    <h3>You have an order!</h3>
    <div>Submitted by: {user.name}</div>
<div>They want: {bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        {!order.responded &&
        <div className="buttons">
                  <button
                    onClick={() => {
                        updateOrders({
                            bakedGoodId: order.bakedGoodId,
                        userId: order.userId,
                        quantity: order.quantity,
                        dateNeededBy: order.dateNeededBy,
                        description: order.description,
                        accepted: true,
                        responded: true,
                        completed: false,
                        id: parseInt(order.id),
                    });
                }}
                >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                        updateOrders({
                            bakedGoodId: order.bakedGoodId,
                            userId: order.userId,
                            quantity: order.quantity,
                            dateNeededBy: order.dateNeededBy,
                            description: order.description,
                            accepted: false,
                            responded: true,
                            completed: false,
                            id: parseInt(order.id),
                        });
                    }}
                    >
                    Deny
                  </button>
                </div>
                }
    </div>
    )    
}
