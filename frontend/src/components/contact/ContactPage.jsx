import Section from "../../layouts/Section"
import background from "../../assets/img/footer-bg.jpg"
import ContactForm from "./ContactForm"
import "../../assets/css/pages/contact.css"

const Contact = () => {
    return (
        <Section id="section-contact">
            <ContactForm/>
            <div className="container-contact-bg">
                <img src={background}></img>
            </div>
        </Section>
    );
}

export default Contact;