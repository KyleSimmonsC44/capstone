import React from "react"
import { Route } from "react-router-dom"
import { BakedGoodsList } from "../about/BakedGoodsList"
import { BakedGoodsProvider } from "../about/BakedGoodsProvider"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { UserProvider } from "../auth/UserProvider"
import { OrderForm } from "../orders/OrderForm"
import { OrderProvider } from "../orders/OrderProvider"
import { OrderList } from "../orders/OrderList"
import { GalleryImageContext, GalleryImageProvider } from "../gallery/GalleryImageProvider"
import { GalleryImageUploadComponent } from "../gallery/GalleryImageUploadComponent"

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
                        <UserProvider>

                    <Route exact path="/order" render={(props) => <OrderForm {...props} />}
                    />
                    <Route exact path="/adminhome" render={(props) => <OrderList {...props} />}
                    />
                    </UserProvider>
                    </BakedGoodsProvider>
                </OrderProvider>
            </article>
            <article>
                <GalleryImageProvider>
                <Route exact path="/adminhome" render={(props) => <GalleryImageUploadComponent {...props}/>}
                    />
                </GalleryImageProvider>
            </article>
        </>
    )
}