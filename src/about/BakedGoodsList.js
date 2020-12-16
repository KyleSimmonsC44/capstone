import React, { useContext, useEffect } from "react"
import { BakedGoodsContext } from "./BakedGoodsProvider"
import {BakedGoods} from "./BakedGoods"

export const BakedGoodsList = () => {
    const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("BakedGoodsList: Initial render before data")
        getBakedGoods()
    }, [])
    
    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */

    return (

        <div className="aboutSection">
            <h3 className="bakedGoods__name">About Us!</h3>
            <div className="aboutUsDiv">
            We are a family bakery based out of Nashville, TN that specializes in elaborate cake design, and any traditional southern deserts. Our family matriarch, Sue, has been teaching all of her children and grandchildren the wonderful art of baking since as soon as we could stand on a stool and lick batter off of a spoon. We are proud to share our baked goods with you all! Feel free to check out the gallery to view any past designs done by Sue herself, or to place an order once you make an account with us!
            </div>
        <div className="bakedgoods">
            <h3  className="bakedGoods__name">We're Currently Baking:</h3>
        {
            bakedGoods.map(bakedGood => <BakedGoods key={bakedGood.id} bakedGoods={bakedGood} />)
        }
        </div>
        </div>
    )
}