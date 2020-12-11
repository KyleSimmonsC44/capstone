import React, { useContext, useEffect } from "react";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import { UserContext } from "../auth/UserProvider";
import "./Order.css";
import { OrderContext } from "./OrderProvider";
import { Order } from "./Orders";

export const AcceptedOrderList = ({ history }) => {
  const { orders, getOrders, updateOrders } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext);
  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser().then(getBakedGoods).then(getOrders);
  }, []);
  return (
    <>
      <h3>Cakes To Make</h3>
      <div className="test">
        {orders.map((order) => {
          const users = user.find(
            (u) => parseInt(u.id) === parseInt(order.userId)
          );
          const bakedGood = bakedGoods.find(
            (bg) => bg.id === order.bakedGoodId
          );
          if (order.responded && !order.completed && order.accepted) {
            return (
              <div className="orderCard" key={order.id}>
                <Order
                  user={users}
                  bakedGood={bakedGood}
                  order={order}
                />
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
                        completed: true,
                        id: parseInt(order.id),
                      });
                    }}
                  >
                    Completed
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