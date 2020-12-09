import React from "react"
import "./BakedGoods.css"

export const BakedGoods = ({bakedGoods}) =>(
    <section className="bakedGood">
    <h3 className="bakedGoods__name">{bakedGoods.name}</h3>
    <p className="bakedGoods__price">
        {bakedGoods.price === null ? "prices will vary based on intricacies of request" : `$${bakedGoods.price}`}
        </p>
</section>
)
