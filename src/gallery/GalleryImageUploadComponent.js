import React, { useContext } from 'react'
import { GalleryImageContext } from './GalleryImageProvider'
import  "./GalleryImage.css"

export const GalleryImageUploadComponent = (props) =>{
    const { pickImage, addImage } = useContext(GalleryImageContext)

    return (
        <div className="imageUpload">
          <h3>Upload Image to Cloudinary</h3>
    
            <input type="file" name="file" placeholder="Upload An Image" onChange={pickImage} className="fileInput"
            />
            <div className="buttonDiv">
            <button name='file' onClick={addImage}>
              Upload!
            </button>
            </div>
        </div>
      )
}
