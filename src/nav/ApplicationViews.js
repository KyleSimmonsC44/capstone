import React from "react"
import { Route } from "react-router-dom"
import { BakedGoodsList } from "../about/BakedGoodsList"
import { BakedGoodsProvider } from "../about/BakedGoodsProvider"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { UserProvider } from "../auth/UserProvider"
import { OrderForm } from "../orders/OrderForm"
import { OrderProvider } from "../orders/OrderProvider"
import { OrderDetails } from "../orders/OrderDetails"
import { GalleryImageContext, GalleryImageProvider } from "../gallery/GalleryImageProvider"
import { GalleryImageUploadComponent } from "../gallery/GalleryImageUploadComponent"
import { GalleryImageList } from "../gallery/GalleryImageList"
import { AcceptedOrderList } from "../orders/AcceptedOrderList"
import { OrderHistoryList } from "../orders/OrderHistoryList"
import { OrderList } from "../orders/OrderList"
import { Homepage } from "../landingpage/Homepage"
import { About } from "../about/About"
import { AboutProvider } from "../about/AboutProvider"
import { EditAboutForm } from "../about/EditAboutForm"

export const ApplicationViews = (props) =>{
    return(
        <>
        <article className="about">

            <AboutProvider>
        <BakedGoodsProvider>
            <Route exact path="/about" render={(props) => <BakedGoodsList {...props} />}
            />
            
        </BakedGoodsProvider>
            </AboutProvider>
            </article>
            <article>
                <AboutProvider>
                    <Route path="/about/edit/:aboutId(\d+)" render={(props) => <EditAboutForm {...props}/>}/>
                </AboutProvider>
            </article>
            <article className="adminHome">
                <OrderProvider>
                    <BakedGoodsProvider>
                        <UserProvider>

                    <Route exact path="/order" render={(props) => <OrderForm {...props} />}
                    />

                    <Route exact path="/adminhome" render={(props) => <OrderList {...props} />}
                    />

                    {/* <Route exact path="/adminhome" render={(props) => <OrderDetails {...props} />}
                    /> */}

                    <Route exact path="/adminhome" render={(props) => <AcceptedOrderList {...props} />}
                    />

                    <Route exact path="/orderhistory" render={(props) => <OrderHistoryList {...props} />}
                    />
                    
                    </UserProvider>
                    </BakedGoodsProvider>
                </OrderProvider>
            </article>
            <article className="galleryUpload">
                <GalleryImageProvider>
                <Route exact path="/adminhome" render={(props) => <GalleryImageUploadComponent {...props}/>}
                    />
            </GalleryImageProvider>
            </article>
            <article>
                <GalleryImageProvider>

                    <Route exact path="/gallery" render={(props) => <GalleryImageList {...props}/>}
                    />
                    </GalleryImageProvider>
                    </article>
                    <article>
                        <Route exact path="/" render={(props) => <Homepage {...props} strings={[
    	'We are grandparents',
      'We are parents',
      'We are engineers',
      'We are interior designers',
      'We are teachers',
      'We are artists',
      'We are One Big Happy Family'
    ]}/>}
                        />
                    </article>
         
        </>
    )
}