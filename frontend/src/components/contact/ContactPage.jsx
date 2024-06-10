import Section from "../../layouts/Section"
import ContactForm from "./ContactForm"
import "../../assets/css/pages/contact.css"

const Contact = () => {
    return (
        <Section id="section-contact">
            <ContactForm/>
            <div className="container-contact-bg">
                <img src="/img/backgrounds/contact-bg.jpg"></img>
            </div>
        </Section>
    );
}

export default Contact;