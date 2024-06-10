import EducationItem from "./EducationItem"

const EducationList = ({achievements}) => {
    return (
        <div id="container-education-list" className="">
            {
                (achievements.length > 0) ?
                    achievements.map((achievement) => 
                        <EducationItem key={achievement.id} achievement={achievement}/>
                    )
                :
                <span className="empty text-xs">No items available</span>
            }
        </div>
    )
}

export default EducationList