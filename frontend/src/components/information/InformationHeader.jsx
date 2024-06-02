import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { startTypingAnimation } from "../../assets/js/typing.js";
import { profileList } from '../../assets/data/profiles.js';
import { useEffect } from "react";
import '../../assets/css/texts/typing.css'

const InformationHeader = () => {
    useEffect(() => {
        startTypingAnimation("typing-profile", profileList);
    });

    return (
        <>
            <p className="header-sm text-blue-gradient text-bold">I'm a</p>
            <span id="typing-profile" className="header-md text-bold typing">
                {
                    profileList.slice(0,1).map(profile =>
                        <span>{profile}</span>
                    )
                }
            </span>
            <p className="text-md text-gray text-medium">
                <FontAwesomeIcon icon="fa-solid fa-user-graduate"/> &nbsp;
                Graduated in System and Computer Engineer
            </p>
            <p className="text-md text-gray text-medium">
                <FontAwesomeIcon icon="fa-solid fa-briefcase"/> &nbsp;
                Worked in healthcare, education and commercial companies
            </p>
        </>
    );
}

export default InformationHeader;