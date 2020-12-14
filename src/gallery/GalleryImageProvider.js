import React, { useState } from 'react'

export const GalleryImageContext = React.createContext()

export const GalleryImageProvider = (props) =>{
    const [image, setImages] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
// component that fetches the urls from the local json
    const getImageUrl = () => {
        return fetch("http://localhost:8088/images")
        .then(res => res.json())
        .then(setImageUrls)
    }
// component that saves the url that we wish to upload to the local api
    const storeImageUrl = (url) =>{
        return fetch ("http://localhost:8088/images",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(url)
        })
        .then(getImageUrl)
    }
// component responsible for deleting image urls from the local json
    const deleteImage = imageUrlId =>{
        return fetch(`http://localhost:8088/images/${imageUrlId}`,{
            method: "DELETE"
        })
        .then(getImageUrl)
    }

    // component to set what we want to upload using the use state hook
    const pickImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'test-images')
        setImages(data)
    }

    // component that adds the url of the picture to cloudinary, which creates the url that we are storing
    const addImage = () =>{
        return fetch ("https://api.cloudinary.com/v1_1/dksimmons/image/upload", {
            method:"POST",
            body:image
        })
        .then(response => response.json())
        .then(parsedResponse => storeImageUrl({url:parsedResponse.url}))
    }
    
    return (
        <GalleryImageContext.Provider value={{
            image, addImage, pickImage, storeImageUrl, getImageUrl, imageUrls, deleteImage
        }}>
            {props.children}
            </GalleryImageContext.Provider>
    )
}

