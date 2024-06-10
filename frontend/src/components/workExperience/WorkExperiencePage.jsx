import Section from "../../layouts/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/pages/work-experience.css"
import WorkExperienceCarrousel from "./WorkExperienceCarrousel";
import { jobs } from "../../assets/data/jobs";
import { useState, useEffect } from "react";

const WorkExperiencePage = () => {
    const [position, setPosition] = useState(() => {
        return {
            index: 1,
            direction: "",
        }
    });

    useEffect(() => {
        return () => {
            let elements = document.getElementsByClassName("card-work-experience");

            Array.prototype.slice.call(elements).map((el) => {
                el.classList.add("pop-up");
            })
        }
    }, [position]);

    const nextCard = () => {
        if(jobs[position.index + 1] != undefined) {
            setPosition((prevState) => {
                return {
                    index: prevState.index + 1,
                    direction: 'right'
                }
            });
        }
    }

    const backCard = () => {
        if(jobs[position.index - 1] != undefined) {
            setPosition((prevState) => {
                return {
                    index: prevState.index - 1,
                    direction: 'left'
                }
            });
        }
    }
    
    return (
        <Section id="section-work-experience">
            <header className="section-header">
                <h1 className="text-xl">Work Experience</h1>
                <span className="btn-group">
                    <button className="btn btn-sm" onClick={() => backCard()}>
                        <FontAwesomeIcon icon="fa-solid fa-caret-left" />
                    </button>
                    <button className="btn btn-sm" onClick={() => nextCard()}>
                        <FontAwesomeIcon icon="fa-solid fa-caret-right" />
                    </button>
                </span>
            </header>
            <div className="section-body">
              <WorkExperienceCarrousel 
                positionIndex={position.index} 
                jobs={jobs}
            />
            </div>
        </Section>
    )
};

export default WorkExperiencePage;