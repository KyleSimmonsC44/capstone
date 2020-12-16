import React, { useContext, useEffect } from "react"
import { BakedGoodsContext } from "../about/BakedGoodsProvider"
import { OrderContext } from "./OrderProvider"
import { OrderHistory } from "./OrderHistory"
// lists out all of the order history cards for the current logged in user
export const OrderHistoryList = ({history}) =>{
    const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext)
    const { orders, getOrders } = useContext(OrderContext)

    useEffect(() =>{
        getBakedGoods()
        .then(getOrders)
    }, [])

    return (
        <>
        <div className="test">
        <h1>Order History</h1>
            {
                orders.map(order =>{
                    const bakedGood = bakedGoods.find(
                        (bg) => bg.id === order.bakedGoodId
                      );
                    if(order.userId === localStorage.getItem("app_login_id")){
                        return(
                            <div className="orderCard" key={order.id}>
                                <OrderHistory bakedGood={bakedGood} order={order}/>
                            </div>
                        )
                    }
                })
            }
        </div>
        </>
    )
}
