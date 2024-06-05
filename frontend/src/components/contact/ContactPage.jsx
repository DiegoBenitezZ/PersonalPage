import Section from "../../layouts/Section"
import { socialMedia } from "../../assets/data/socialMedia"
import IconButton from "../buttons/IconButton"
import ContactForm from "./ContactForm"
import "../../assets/css/pages/contact.css"

const Contact = () => {
    return (
        <Section id="section-contact">
            <div className="container-contact">
                <h3 className="header-xs text-bold">CONTACT ME</h3>
                <summary className="text-sm text-blue">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                    ipsum dolor sit amet,  ipsum dolor sit amet,
                </summary>
                <br/>
                <br/>
                {
                    socialMedia.map((media) => {
                        return (
                            <>
                                <IconButton key={media.id} targetUrl={media.targetUrl} className="text-md" imageName={media.filename} text={media.user} /><br/>
                            </>
                        );
                    })
                }
            </div>
            <ContactForm/>
        </Section>
    );
}

export default Contact;