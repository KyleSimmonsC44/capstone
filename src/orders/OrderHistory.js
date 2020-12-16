import React, { useContext } from "react"
import "./Order.css"
import { OrderContext } from "./OrderProvider"
// sets all of the conditional logic for the user's order history. 
export const OrderHistory = ({order, bakedGood, user}) =>{
    const { deleteOrder } = useContext(OrderContext)
if(order.responded === true){

    if(order.accepted === true && order.completed === false){
        return(
            <div className="order">
        <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <div class="dynamicHistoryResponses">
        Your order has been accepted!
        Your order is beind prepared
        </div>
    </div>
    )
}else if(order.accepted === true && order.completed === true){
    return(
        <div className="order">
    <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
    <div>Description: {order.description}</div>
    <div>Date Needed By: {order.dateNeededBy}</div>
    <div className="dynamicHistoryResponses">
    Your order has been accepted!
    Your order is ready to be picked up!
    </div>
    <button onClick={()=>{deleteOrder(order.id)}}>Remove Order</button>
    </div>
       )
    }
    else{
        return(
            <div className="order">
        <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <div className="dynamicHistoryResponses">

        Your Order has been declined
        </div>
        <button onClick={()=>{deleteOrder(order.id)}}>Remove Order</button>
    </div>
)
}
}else{
    return(
        <div className="order">
        <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <div className="dynamicHistoryResponses">
        Your order is waiting to be reviewed
        </div>
        </div>
    )
}
}

