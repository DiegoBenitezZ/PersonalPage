import Card from "../../layouts/Card";
import InputText from "../inputs/InputText";
import Textarea from "../inputs/Textarea"
import IconButton from "../buttons/IconButton"
import { socialMedia } from "../../assets/data/socialMedia"
import { useState } from "react";
import "../../assets/css/components/contact-form.css"


const ContactForm = () => {
    const [messageState, setMessageState] = useState(() => {
        return {
            fullName: '',
            email: '',
            message: '',
        };
    })

    const handleSubmitForm = (e) => {
        e.preventDefault()
    }

    return(
        <div className="container-contact-form ">
            <h4 className="contact-form-title text-md">
                Do you want know <br/>
                some more about me ?
            </h4>
           <div className="icon-group">
            {
                    socialMedia.map((media) => {
                        return (
                            <>
                                <IconButton key={media.id} targetUrl={media.targetUrl} className="text-md" imageName={media.filename}/><br/>
                            </>
                        );
                    })
                }
           </div>
            <form id="contact-form" className="">
                <InputText 
                    className="input-text-md" 
                    placeholder="Full Name"
                    defaultValue={messageState.fullName}
                    changeValue = {(e) => setMessageState((prevState) => { 
                        return {...prevState, fullName: e.target.value}
                    })}
                />
                <InputText 
                    className="input-text-md" 
                    placeholder="Email Address"
                    defaultValue={messageState.email}
                    changeValue = {(e) => setMessageState((prevState) => { 
                        return {...prevState, email: e.target.value}
                    })}
                />
                <Textarea 
                    className="textarea-md" 
                    placeholder="Message..."
                    defaultValue={messageState.message}
                    changeValue = {(e) => setMessageState((prevState) => { 
                        return {...prevState, message: e.target.value}
                    })}
                />
                <div>
                    <button type="submit" className="btn btn-md">Send</button>
                </div>
            </form>
        </div>       
    )
}

export default ContactForm;