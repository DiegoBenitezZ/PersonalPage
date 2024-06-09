import Section from "../../layouts/Section"
import EducationList from "./EducationList";
import { achievements } from "../../assets/data/achievements";
import { useState } from "react";
import "../../assets/css/pages/education.css"

const EducationPage = () => {
    let [achievementType, setAchievementType] = useState("certification")
    let achievementsList = achievements[achievementType];

    const handleChangeType = (type = "grade") => {
        setAchievementType((prevState) => type)
    }

    return (
        <Section id="section-education" className="bg-dark">
            <header className="section-header">
                <h1 className="text-xl">Education</h1>
                <span className="btn-group">
                    <button 
                        className="btn btn-md" 
                        onClick={() => handleChangeType("grade")}
                    >Grade</button>
                    <button 
                        className="btn btn-md" 
                        onClick={() => handleChangeType("certification")}
                    >Certificate</button>
                    <button 
                        className="btn btn-md" 
                        onClick={() => handleChangeType("other")}
                    >Others</button>
                </span>
            </header>
            <div className="section-body">
                <EducationList 
                    achievements={achievementsList} 
                />
            </div>
        </Section>
    )
}

export default EducationPage;