import React, { useContext, useEffect } from "react";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import { UserContext } from "../auth/UserProvider";
import "./Order.css";
import { OrderContext } from "./OrderProvider";
import { Order } from "./Orders";

export const OrderList = ({ history }) => {
  const { orders, getOrders, updateOrders } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext);
  const { user, getUser } = useContext(UserContext);

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
          const bakedGood = bakedGoods.find(
            (bg) => bg.id === order.bakedGoodId
          );
          if (!order.responded) {
            return (
              <div className="orderCard">
                <Order
                  key={order.id}
                  user={users}
                  bakedGood={bakedGood}
                  order={order}
                />
                <div className="buttons">
                  <button
                    onClick={() => {
                      updateOrders({
                        bakedGoodId: 2,
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
                            bakedGoodId: 2,
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
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
