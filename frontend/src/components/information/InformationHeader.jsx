import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { startTypingAnimation } from "../../assets/js/typing.js";
import { profileList } from '../../assets/data/profiles.js';
import { useEffect } from "react";
import '../../assets/css/texts/typing.css'
import "../../assets/css/components/information-header.css"

const InformationHeader = () => {
    useEffect(() => {
        startTypingAnimation("typing-profile", profileList);
    });

    return (
        <>
            <p className="header-xs text-blue-gradient text-bold">I'm a</p>
            <p id="typing-profile" className="header-sm text-bold typing">
            </p>
            <p className="text-sm text-gray text-medium">
                <FontAwesomeIcon icon="fa-solid fa-user-graduate"/> &nbsp;
                Graduated in System and Computer Engineering
            </p>
            <p className="text-sm text-gray text-medium">
                <FontAwesomeIcon icon="fa-solid fa-briefcase"/> &nbsp;
                Worked in healthcare, education and commercial companies
            </p>
        </>
    );
}

export default InformationHeader;