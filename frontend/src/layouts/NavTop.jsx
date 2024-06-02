import logo from "../assets/svg/logo.svg";
import IconButton from "../components/buttons/IconButton.jsx";
import TextLink from "../components/buttons/TextLink.jsx"
import { socialMedia } from "../assets/data/socialMedia.js";
import "../assets/css/layouts/navtop.css";

const NavTop = () => {
    return (
        <nav id="container-navtop">
            <img className="navtop-logo" src={logo} alt="Diego Benitez Logo"/>
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

        // <nav id="container-navtop" style={{backgroundColor: "green"}}>
        //     <div className="navtop-logo">
        //         <img src={logo} alt="Diego Benitez Logo"/>
        //     </div>
        //     <div>
        //         <TextLink text="Information"/>
        //         <TextLink text="Projects"/>
        //         <TextLink text="Contact"/>

        //         <img className="divider" src="/src/assets/svg/line.svg" alt="Divider line" />
                
        //         <span className="icons-group">
        //             {
        //                 socialMedia.slice(0,3).map((media, index) => 
        //                     <IconButton key={index} imageName={media.filename} targetUrl={media.targetUrl}/>
        //                 )
        //             }
        //         </span>
        //     </div>
        // </nav>

        // <nav id="container-navtop">
        //     <span>
        //         <img src={logo} alt="Diego Benitez Logo" className="navtop-logo" />
        //     </span>
        //     <span>
        //         <TextLink text="Information"/>
        //         <TextLink text="Projects"/>
        //         <TextLink text="Contact"/>
        //         <img className="divider" src="/src/assets/svg/line.svg" alt="Divider line" />
        //         {
        //             socialMedia.map((media, index) => 
        //                 <IconButton key={index} imageName={media.filename} targetUrl={media.targetUrl}/>
        //             )
        //         }
        //     </span>
        // </nav>
    )
};

export default NavTop;