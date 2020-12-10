import React, { useState } from 'react'

export const GalleryImageContext = React.createContext()

export const GalleryImageProvider = (props) =>{
    const [image, setImages] = useState(null)


    const pickImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'test-images')
        setImages(data)
    }

    const addImage = () =>{
        return fetch ("https://api.cloudinary.com/v1_1/dksimmons/image/upload", {
            method:"POST",
            body:image
        })
        .then(response => response.json())
        .then(parsedResponse => console.log(parsedResponse.url))
    }
    
    return (
        <GalleryImageContext.Provider value={{
            image, addImage, pickImage
        }}>
            {props.children}
            </GalleryImageContext.Provider>
    )
}

