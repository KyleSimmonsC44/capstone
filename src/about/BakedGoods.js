import React from "react"
import "./BakedGoods.css"

export const BakedGoods = ({bakedGoods}) =>(
    <section className="bakedGood">
    <h3 className="bakedGoods__name">{bakedGoods.name}</h3>
        {bakedGoods.price === null ? "prices will vary based on intricacies of request" : `This item costs $${bakedGoods.price} per`}
        
</section>
)
