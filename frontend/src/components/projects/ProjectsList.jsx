import ProjectsItem from "./ProjectsItem"

const ProjectsList = ({projects}) => {
    return (
        <div id="projects-list">
            {
                projects.map(project => 
                    <ProjectsItem 
                        key={project.id}
                        project={project}
                    /> 
                )
            }
        </div>
    )
}

export default ProjectsList;