import IconButton from "../components/buttons/IconButton.jsx";
import TextLink from "../components/buttons/TextLink.jsx"
import { socialMedia } from "../assets/data/socialMedia.js";
import "../assets/css/layouts/navtop.css";

const NavTop = () => {
    return (
        <nav id="container-navtop">
            <img className="navtop-logo" src="/img/icons/logo.svg" alt="Diego Benitez Logo"/>
            <span>
                <TextLink text="Information" scrollTarget="section-information"/>
                <TextLink text="Projects" scrollTarget="section-projects"/>
                <TextLink text="Contact" scrollTarget="section-contact"/>

                <span className="icons-group">
                    {
                        socialMedia.map((media, index) => 
                            <IconButton key={index} imageName={media.filename} targetUrl={media.targetUrl}/>
                        )
                    }
                </span>
            </span>
        </nav>
    )
};

export default NavTop;