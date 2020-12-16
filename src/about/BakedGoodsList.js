import React, { useContext, useEffect } from "react"
import { BakedGoodsContext } from "./BakedGoodsProvider"
import {BakedGoods} from "./BakedGoods"
import { AboutContext } from "./AboutProvider"
import { About } from "./About.js"

export const BakedGoodsList = (props) => {
    const { bakedGoods, getBakedGoods } = useContext(BakedGoodsContext)
    const { about, getAbout } = useContext(AboutContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        getBakedGoods()
    }, [])

    useEffect(() => {
        getAbout()
    }, [])
    
    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */

    return (

        <div className="aboutSection">
            <h3 className="bakedGoods__name">About Us!</h3>
            {
                about.map(a => <About key={a.id} about={a} props={props}/>)
            }
        <div className="bakedgoods">
            <h3  className="bakedGoods__name">We're Currently Baking:</h3>
        {
            bakedGoods.map(bakedGood => <BakedGoods key={bakedGood.id} bakedGoods={bakedGood} />)
        }
        </div>
        </div>
    )
}