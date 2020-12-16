import React, { useContext, useState } from "react"
import { AboutContext } from "./AboutProvider"
import "./BakedGoods.css"

export const About = ({about, props}) =>{
    
    if(localStorage.getItem("admin") === "true"){

        return(
            <section className="aboutUsDiv">
        {about.text}
        <div className="buttonDiv">
            <button onClick={()=>{props.history.push(`/about/edit/${about.id}`)}}>Edit About</button>
        </div>
</section>
      )  
    }else{
        return(
            <section className="aboutUsDiv">
        {about.text}
</section>)
    }
    }


