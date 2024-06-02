import Card from "../../layouts/Card";
import { skills } from "../../assets/data/skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'


const InformationSkills = () => {
    
    return (
        <>
            {
                skills.map((skill, index) => {
                    return (
                        <Card className="card-md" key={index}>
                            <FontAwesomeIcon icon={skill.icon} size="xl"/>
                            <p>{skill.description}</p>
                        </Card>
                    )
                })
            }
        </>
    );
}

export default InformationSkills;