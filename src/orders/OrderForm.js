import React, { useContext, useRef, useEffect, useState } from "react";
import { OrderContext } from "./OrderProvider";
import { BakedGoodsContext } from "../about/BakedGoodsProvider";
import "./Order.css"

export const OrderForm = (props) => {
  const { addOrder } = useContext(OrderContext);
  const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext)

  const [dropdown, setdropdown] = useState(0)
  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */

  const bakedGood = useRef(null);
  const quantity = useRef(null)
  const dateNeededBy = useRef(null)
  const description = useRef(null)
//  whenever the dropdown has an id of 2 of 3, which is the id for the cupcakes and cake pops, render the number field
  const renderInput = () =>{
      if (dropdown === "2" || dropdown === "3"){
          return (
            <fieldset>
            <div className="form-group">
                <label htmlFor="quantity">How many would you like (Numerical values only):</label>
              <input name="quantity" id="quantity" ref={quantity} type="number" className="form-control">
              </input>
            </div>
                </fieldset>
          )
      }else{
         return <></>
      }
  }

  useEffect(() => {
    getBakedGoods()
  }, []);

  const constructNewOrder = () => {
   
    const bakedGoodId = parseInt(bakedGood.current.value);

    if (!bakedGoodId) {
      window.alert("Please select a baked good");
    } else {
      addOrder({
          bakedGoodId,
          userId: localStorage.getItem("app_login_id"),
          quantity: bakedGoodId === 1 ? 1 : parseInt(quantity.current.value),
          dateNeededBy: dateNeededBy.current.value,
          description: description.current.value,
          accepted: false,
          responded: false,
          completed: false
      }).then(() => props.history.push("/"));
    }
  };

  return (
    <form className="orderForm">
        <div className="testForm">
            <div className="testDiv">
      <h2 className="orderForm__title">New Order</h2>

          <fieldset>
            <div className="form-group">
              <label htmlFor="location">What baked good would you like?: </label>
              <select
              required
                defaultValue=""
                name="location"
                ref={bakedGood}
                id="orderLocation"
                className="form-control"
                // when ever a dropdown is selected, set the dropdown value to be equal to the baked good's id
                onChange ={ev=>{
                    setdropdown(ev.target.value)
                }}
                >
                <option value="0">Select a baked good</option>
                {bakedGoods.map((bg) => (
                    <option key={bg.id} value={bg.id}>
                    {bg.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
                    {renderInput()}
      <fieldset>
          <div className="form-group">
            <label htmlFor="orderPay">Date Needed By: </label>
            <input
            name="orderPay"
              type="date"
              id="orderPay"
              ref={dateNeededBy}
              required
              autoFocus
              className="form-control"
              />
          </div>
        </fieldset>
        <fieldset>
          <div className="checkBox">
              <label htmlFor="description">Description: </label>
            <input
             type="text"
             name="description"
             ref={description}
             id="description"
             className="check"
             className="form-control"
             >
            </input>
          </div>
        </fieldset>
        <div className="button">
          <button
            type="submit"
            onClick={(evt) => {
              console.log("when will this display?")
                evt.preventDefault(); 
                constructNewOrder();
            }}
            className="btn btn-primary"
            >
            Submit Order
          </button>
            </div>
        </div>
      </div>
    </form>
  );
};