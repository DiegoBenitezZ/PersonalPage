import "../../assets/css/components/project-item.css"

const ProjectsItem = ({project}) => {
    return (
        <a className="project-item" style={{background: `linear-gradient(0deg, ${project.color1} 9%, ${project.color2} 95%)`}}> 
            <img className="project-logo text-md" src={`/img/projects/${project.logo}`} alt={project.name} />
        </a>
    )
}

export default ProjectsItem;