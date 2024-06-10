import IconButton from "../components/buttons/IconButton.jsx";
import TextLink from "../components/buttons/TextLink.jsx"
import { socialMedia } from "../assets/data/socialMedia.js";
import "../assets/css/layouts/navtop.css";

const NavTop = () => {
    return (
        <nav id="container-navtop">
            <img className="navtop-logo" src="/img/icons/logo.svg" alt="Diego Benitez Logo"/>
            <span>
                <TextLink text="Information"/>
                <TextLink text="Projects"/>
                <TextLink text="Contact"/>

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