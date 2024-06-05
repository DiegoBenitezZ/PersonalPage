import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperienceCarrousel = ( { positionIndex, jobs, className}) => {

    let jobsSlice = [undefined, jobs[positionIndex - 1], jobs[positionIndex], jobs[positionIndex + 1], [undefined]]

    return (
        <div id="container-carrusel-work-experience">   
            {
                jobsSlice.map((job, index) => {
                    if(job == undefined) {
                        return <WorkExperienceCard key={index} className={`card-lg card-muted bg-purple-gradient ${className}`}/>   
                    }
                    else {
                        let id = `card-experience-${index}`;
                        let classCard = (index != 2) ? "card-muted bg-purple-gradient" : "card-dark";
    
                        return (
                            <WorkExperienceCard
                                key={index}
                                id={id}
                                className={`card-lg ${classCard} ${className}`}
                                name = {job.name} 
                                tecnologies = {job.tecnologies}
                                jobPositon = {job.jobPosition}
                                startDate={job.startDate}
                                endDate={job.endDate}
                                descriptionList={job.descriptionList}
                            />
                        );
                    }
                })
            }
        </div>
    )
}   

export default WorkExperienceCarrousel;