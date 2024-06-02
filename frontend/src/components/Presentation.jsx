import Section from "../layouts/Section";
import NavTop from "../layouts/NavTop";
import background from "../assets/img/presentation-bg.png"
import "../assets/css/pages/presentation.css"

const Presentation = () => {
    return (
        <Section id="presentation">
            <img src={background} alt="" className="presentation-bg" />
            <NavTop/>
            <div id="presentation-content">
                <div className="greeting">
                    <h1 className="header-xl text-blue-gradient">Hi!</h1>
                    <span className="my-name">
                        <p className="header-sm text-blue-ligth text-bold">My name is...</p>
                        <h2 className="header-lg text-bold">Diego Benitez</h2>
                    </span>
                </div>
                <p className="presentation-description">
                    <span className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliquat.
                    </span>
                    <button type="button" className="btn btn-md">Send</button>
                </p>
            </div>
        </Section>
    )
}

export default Presentation;