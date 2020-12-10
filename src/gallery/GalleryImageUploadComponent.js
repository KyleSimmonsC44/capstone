import React, { useContext } from 'react'
import { GalleryImageContext } from './GalleryImageProvider'

export const GalleryImageUploadComponent = (props) =>{
    const { pickImage, addImage } = useContext(GalleryImageContext)

    return (
        <div className="imageUpload">
          <h1>Upload Image to Cloudinary</h1>
    
            <input type="file" name="file" placeholder="Upload An Image" onChange={pickImage}
            />
            <button name='file' onClick={addImage}>
              Upload!
            </button>
        </div>
      )
}
