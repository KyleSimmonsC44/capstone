import React, { useContext, useEffect, useState } from "react";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import { UserContext } from "../auth/UserProvider";
import "./Order.css";
import { OrderContext } from "./OrderProvider";
import { OrderInbox } from "./OrderInbox";
import { OrderDetails } from "./OrderDetails";

export const OrderList = ({ history }) => {
  const { orders, getOrders, updateOrders } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext);
  const { user, getUser } = useContext(UserContext);
  const [selectedDetail, setSelectedDetail] = useState(null)

  useEffect(() => {
    getUser().then(getBakedGoods).then(getOrders);
  }, []);
  return (
    <>
      <h3>Order Inbox</h3>
      <div className="test"> 
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

              <button onClick={()=>{setSelectedDetail(order)}}>Show Details</button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {selectedDetail && <OrderDetails order={selectedDetail}/>}
    </>
  );
};
