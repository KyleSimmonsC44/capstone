import React, { useContext, useEffect, useState } from "react";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import { UserContext } from "../auth/UserProvider";
import "./Order.css";
import { OrderContext } from "./OrderProvider";
import { OrderInbox } from "./OrderInbox";
import { OrderDetails } from "./OrderDetails";

export const OrderList = ({ history }) => {
  const { orders, getOrders, updateOrders, setSelectedDetail, selectedDetail } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext);
  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    getBakedGoods().then(getUser).then(getOrders);
  }, []);
// useEffect is watching orders to change to run getUser()
  useEffect(() =>{
    getUser()
  },[orders]);

  return (
    <>
      <div className="test--left"> 
      <h3>Order Inbox</h3>
        {orders.map((order) => {
          const users = user.find(
            (u) => parseInt(u.id) === parseInt(order.userId)
          );
          if (!order.responded) {
            return (
              <div className="orderCard" key={order.id}>
                <OrderInbox
                  user={users}
                  order={order}
                />
                <div className="buttonDiv">
            {/* show details button sets the selectedDetail variable to  the specific order that has been chosen*/}
              <button onClick={()=>{setSelectedDetail(order)}}>Show Details</button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* if selected detail has a value and responded is false, render the order details */}
      {(selectedDetail && !selectedDetail.responded) && <OrderDetails order={selectedDetail}/>}
    </>
  );
};
