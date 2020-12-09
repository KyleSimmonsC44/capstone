import React from "react"
import { Route } from "react-router-dom"
import { BakedGoodsList } from "../about/BakedGoodsList"
import { BakedGoodsProvider } from "../about/BakedGoodsProvider"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { OrderForm } from "../orders/OrderForm"
import { OrderProvider } from "../orders/OrderProvider"

export const ApplicationViews = (props) =>{
    return(
        <>
        <article className="aboutSection">

        <BakedGoodsProvider>
            <Route exact path="/about" render={(props) => <BakedGoodsList {...props} />}
            />
        </BakedGoodsProvider>
            </article>
            <article>
                <OrderProvider>
                    <BakedGoodsProvider>
                    <Route exact path="/order" render={(props) => <OrderForm {...props} />}
                    />
                    </BakedGoodsProvider>
                </OrderProvider>
            </article>
         <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props}/>} />
        </>
    )
}