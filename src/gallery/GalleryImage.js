import React, { useContext } from "react"
import "./GalleryImage.css"
import { GalleryImageContext } from "./GalleryImageProvider"

export const GalleryImage = ({url}) =>{
    const {deleteImage} = useContext(GalleryImageContext)

    if(localStorage.getItem("admin") === "true"){
        return(
            <div className="imageDiv">
            <img src={url.url}/>
            <div className="buttonDiv">
            <button onClick={()=>{deleteImage(url.id)}}>&times;</button>
            </div>
        </div>
        )
    }else{
      return(
      <div className="imageDiv">
        <img src={url.url}/>
    </div>
      )  
    }
}
    
   
