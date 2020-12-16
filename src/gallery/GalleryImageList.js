import React, { useContext, useEffect } from "react"
import { GalleryImage } from "./GalleryImage"
import { GalleryImageContext } from "./GalleryImageProvider"
// component that just lists out all of the gallery images to the dom
export const GalleryImageList = ({history}) =>{
    const { imageUrls, getImageUrl } = useContext(GalleryImageContext)

    useEffect(() =>{
        getImageUrl()
    }, [])

    return (
        <>
        <h1>Gallery</h1>
        <div className="test--gallery">
            {
                imageUrls.map(iu =>{
                    return <GalleryImage key={iu.id} url={iu}/>
                })
            }
        </div>
        </>
    )
}