import React, { useState, useEffect } from "react"


export const BakedGoodsContext = React.createContext()

export const BakedGoodsProvider = (props) =>{
    const [bakedGoods, setBakedGoods] = useState([])

    const getBakedGoods = () =>{
        return fetch("http://localhost:8088/bakedGoods")
            .then(res => res.json())
            .then(setBakedGoods)
    }

    return (
        <BakedGoodsContext.Provider value={{
            bakedGoods, getBakedGoods
        }}>
            {props.children}
        </BakedGoodsContext.Provider>
    )
}