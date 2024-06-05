import Card from "../../layouts/Card"
import "../../assets/css/components/work-experience-card.css"

const WorkExperienceCard = ({ id = "",className = "", name = "", descriptionList = [], tecnologies = "", jobPositon = "", startDate = "", endDate = "" }) => {
    return (
        <Card id={id} className={`card-work-experience card-xl ${className}`}>
            <h4 className="job-name header-2xs text-blue-shadow text-bold">{name}</h4>
            
            <div className="job-date-position text-bold">
                <span className="text-xs">{(startDate != '' && endDate != '') && `${startDate}-${endDate}`}</span><br/>
                <span className="text-xs text-blue-ligth">{jobPositon}</span>
            </div>
            
            <p className="job-tecnology text-sm text-blue text-medium">{tecnologies}</p>
           
            <ul className="job-description text-xs">
                {
                    descriptionList.map((description, index) => 
                        <li key={index} className="job-description-item">{description}</li>
                    )
                }
            </ul>
        </Card>
    )
}

// const WorkExperienceCard = ({ name, descriptionList, tecnologies, jobPositon , startDate, endDate }) => {
//     return (
//         <Card className="card-dark card-job">
//             
//         </Card>
//     )
// }

export default WorkExperienceCard;