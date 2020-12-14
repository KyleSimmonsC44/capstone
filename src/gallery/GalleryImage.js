import React, { useContext } from "react"
import "./GalleryImage.css"
import { GalleryImageContext } from "./GalleryImageProvider"
// delete button only renders if the user is an admin
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
    
   
