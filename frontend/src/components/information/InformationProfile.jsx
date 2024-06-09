import Card from "../../layouts/Card";
import userProfile from "../../assets/img/user-profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import "../../assets/css/components/information-profile.css"

const InformationProfile = () => {
    return (
        <Card className="card-auto card-dark">
            <img className="profile-img" src={userProfile} alt="" />
            <p className="profile-name text-lg text-medium">Diego Benitez</p>
            <FontAwesomeIcon className="profile-icon" icon={faCode} size="xl" style={{color: "var(--blue)",}}/>
            <p className="profile-description text-xs text-medium">
                I'm specialised in the fullstack area of web application 
                development with experience in both backend and frontend
            </p>
        </Card>
    )
}

export default InformationProfile;