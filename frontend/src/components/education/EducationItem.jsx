import "../../assets/css/components/education-item.css"

const EducationItem = ({achievement}) => {
    return (
        <a href={achievement.url} className="education-item bg-black" target="_blank" rel="noopener noreferrer">
            <h4 className="education-name text-sm text-bold">{achievement.name}</h4>
            <span className="education-date text-3xs text-bold">{achievement.date}</span>
            <span className="education-provider text-3xs text-blue">{achievement.provider}</span>
            <span className="education-location text-3xs text-gray text-bold">{achievement.location}</span>
            <span className="education-amountTime text-3xs text-gray text-bold">{achievement.amountTime}</span>
        </a>
    )
};

export default EducationItem;