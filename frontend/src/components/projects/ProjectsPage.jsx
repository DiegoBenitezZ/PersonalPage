import Section from "../../layouts/Section"
import ProjectsList from "./ProjectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { projects } from "../../assets/data/projects";
import "../../assets/css/pages/projects.css"

const ProjectsPage = () => {
    const [indexPosition, setIndexPosition] = useState(0);
    const [showMore, setShowMore] = useState (false);
    let projectList = (showMore) ? projects : projects.slice(indexPosition, indexPosition + 4); 
    let timeout = 400;

    useEffect(() => {
        return () => {
            let elements = document.getElementsByClassName("project-item");

            Array.prototype.slice.call(elements).map((el) => {
                el.classList.add("pop-up");
            })
        }
    }, [indexPosition]);

    const handleShowMore = () => {
        setShowMore((prevState) => !prevState);
        setIndexPosition(() => 0);
    }

    const nextPage = () => {
        if(!showMore && projects[indexPosition + 4] != undefined) {
            setIndexPosition((prevState) => prevState + 4);
        }
    }

    const backPage = () => {
        if(!showMore && projects[indexPosition - 4] != undefined) {
            setIndexPosition((prevState) => prevState - 4);
        }
    }

    return (
        <Section id="section-projects">
            <header className="section-header">
                <h1 className="text-xl">Featured Projects</h1>
                <span className="btn-group">
                    {
                        !showMore && 
                        <>
                            <button className={`btn btn-sm ${showMore && "btn-disabled"}`} onClick={() => backPage()}>
                                <FontAwesomeIcon icon="fa-solid fa-caret-left" />
                            </button>
                            <button className={`btn btn-sm ${showMore && "btn-disabled"}`} onClick={() => nextPage()}>
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />
                            </button>
                        </>
                    }
                    
                    <button className="btn btn-md" onClick={() => handleShowMore()}>
                        {(showMore) ? "Show Less" : "Show More"}
                    </button>
                </span>
            </header>
            <div className="section-body">
                <ProjectsList projects={projectList}/>
            </div>
        </Section>
    )
}

export default ProjectsPage;