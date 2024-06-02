import Card from "../../layouts/Card";
import userProfile from "../../assets/img/user-profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const InformationProfile = () => {
    return (
        <Card className="card-auto card-dark">
            <img src={userProfile} alt="" />
            <p className="text-lg text-medium">Diego Benitez</p>
            <FontAwesomeIcon icon={faCode} size="xl" style={{color: "var(--blue)",}}/>
            <p className="text-xs text-medium">
                I'm specialised in the fullstack area of web application 
                development with experience in both backend and frontend
            </p>
        </Card>
    )
}

export default InformationProfile;