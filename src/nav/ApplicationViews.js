import React from "react"
import { Route } from "react-router-dom"
import { BakedGoodsList } from "../about/BakedGoodsList"
import { BakedGoodsProvider } from "../about/BakedGoodsProvider"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const ApplicationViews = (props) =>{
    return(
        <>
        <article>

        <BakedGoodsProvider>
            <Route exact path="/about" render={(props) => <BakedGoodsList {...props} />}
            />
        </BakedGoodsProvider>
            </article>
         <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props}/>} />
        </>
    )
}