import Section from "../../layouts/Section";
import InformationHeader from "./InformationHeader";
import InformationProfile from "./InformationProfile";
import InformationSkills from "./InformationSkills";
import "../../assets/css/pages/information.css"


const Information = () => {
    return(
        <Section id="section-information">
            <div className="profile-information">
                <InformationProfile/>
            </div>
            <div className="header-information">
                <InformationHeader/>
            </div>
            <div className="body-information">
                <InformationSkills/>
            </div>
        </Section>
    );
}

export default Information;