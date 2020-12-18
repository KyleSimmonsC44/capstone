import React, { useContext } from "react"
import "./Order.css"
import { OrderContext } from "./OrderProvider";

export const Order = ({order, bakedGood, user}) =>{
    const { updateOrders, setSelectedDetail } = useContext(OrderContext)
    if(!order){
        order = {}
    }
    if(!bakedGood){
        bakedGood ={}
    }
    if(!user){
        user={}
    }
return(
<div className="order">
    <h3>You have an order!</h3>
    <div>Submitted by: {user && user.name}</div>
<div>They want: {bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        {!order.responded &&
        <div className="buttons">
                  <button
                //   update the order booleans
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
                    })
                    // set the Selected Detail value to null to remove it from the detail order component
                    setSelectedDetail(null);
                }}
                >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                        //   update the order booleans
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
                        // set the Selected Detail value to null to remove it from the detail order component
                        setSelectedDetail(null)
                    }}
                    >
                    Deny
                  </button>
                </div>
                }
    </div>
    )    
}
