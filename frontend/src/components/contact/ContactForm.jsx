import Card from "../../layouts/Card";
import InputText from "../inputs/InputText";
import Textarea from "../inputs/Textarea"
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
        event.preventDefault()
    }

    return(
        <Card className="card-lg">
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
                    <button type="submit" className="btn btn-lg">Send</button>
                </div>
            </form>
        </Card>       
    )
}

export default ContactForm;