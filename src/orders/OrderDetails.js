import React, { useContext, useEffect } from "react";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import { UserContext } from "../auth/UserProvider";
import "./Order.css";
import { OrderContext } from "./OrderProvider";
import { Order } from "./Orders";

export const OrderDetails = ({ order }) => {
  const { orders, getOrders, updateOrders } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext);
  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser().then(getBakedGoods).then(getOrders);
  }, []);

  const buildOrderDetail = () =>{
    const users = user.find(
        (u) => parseInt(u.id) === parseInt(order.userId)
      );
      const bakedGood = bakedGoods.find(
        (bg) => bg.id === order.bakedGoodId
      );
      if (!order.responded) {
        return (

          <div className="orderCard" key={order.id}>
              
            <Order
              user={users}
              bakedGood={bakedGood}
              order={order}
            />
              </div>
        )
      }
  }
  return (
      <>
      <h3>Order Details</h3>
      <div className="test"> 
      {buildOrderDetail()}
    
        
      </div>
    </>
  );
}