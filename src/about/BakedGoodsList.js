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
        console.log(bakedGoods)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */

    return (

        <div>
            <h3>About Us!</h3>
            <p>Ipsum</p>
        <div className="bakedgoods">
            <h3>Pricing Information</h3>
        {
            bakedGoods.map(bakedGood => <BakedGoods key={bakedGood.id} bakedGoods={bakedGood} />)
        }
        </div>
        </div>
    )
}