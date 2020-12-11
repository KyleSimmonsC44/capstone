import React, { useContext } from "react"
import "./Order.css"
import { OrderContext } from "./OrderProvider"

export const Order = ({order, bakedGood, user}) =>{
    const { deleteOrder } = useContext(OrderContext)

if(order.accepted === true){
    return(
        <div className="order">
        <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <p>Your order has been accepted!</p>
        <p>Your order is beind prepared</p>
    </div>
    )
}else if(order.accepted === true && order.completed === true){
   return(
       <div className="order">
    <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
    <div>Description: {order.description}</div>
    <div>Date Needed By: {order.dateNeededBy}</div>
    <p>Your order has been accepted!</p>
    <p>Your order is ready to be picked up!</p>
    <button onClick={()=>{deleteOrder(order.id)}}>Remove Order</button>
    </div>
       )
}
else{
    <div className="order">
        <h3>You Ordered:</h3>
<div>{bakedGood.name === "Cake" ? bakedGood.name : order.quantity + " " + bakedGood.name} </div>
        <div>Description: {order.description}</div>
        <div>Date Needed By: {order.dateNeededBy}</div>
        <p>Your Order has been declined</p>
        <button onClick={()=>{deleteOrder(order.id)}}>Remove Order</button>
    </div>
}
}

