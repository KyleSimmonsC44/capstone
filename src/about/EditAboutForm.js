import React, { useContext, useEffect, useRef, useState } from "react"
import { AboutContext } from "./AboutProvider"
import "./BakedGoods.css"

export const EditAboutForm = (props) =>{
    const { about, getAbout, updateAbout } = useContext(AboutContext)
    const [aboutState, setAboutState] = useState({})

    const aboutText = useRef(null)
    useEffect(() =>{
        getAbout()
    },[])

    useEffect(() =>{
        console.log(about[0])
        const aboutObj = about.find(a=>parseInt(a.id) === parseInt(props.match.params.aboutId))
        console.log(aboutObj)
        setAboutState(aboutObj)
    },[about])


console.log(aboutState)

    return(
        <form className="aboutEditForm">
            <h2>Edit About Section</h2>
            <fieldset className="editDiv">
                <div className="editStyleBox">
                <div className="form-group">
                    <textarea name="about" defaultValue={aboutState.text}  required autoFocus ref={aboutText} rows="6" cols="75">

                    </textarea>
                </div>
                <div className="buttonDiv"><button onClick={(evt)=>{evt.preventDefault()

                    updateAbout({
                        text:aboutText.current.value,
                        id:aboutState.id
                    }).then(getAbout).then(props.history.push("/about"))
                }}>
                    Submit Edit
                    </button></div>
                    </div>
            </fieldset>
        </form>
    )
}