import ContactPage from "./components/contact/ContactPage.jsx";
import EducationPage from "./components/education/EducationPage.jsx";
import InformationPage from "./components/information/InformationPage.jsx";
import PresentationPage from "./components/Presentation.jsx"
import ProjectsPage from "./components/projects/ProjectsPage.jsx";
import TecnologyPage from "./components/tecnology/TecnologyPage.jsx";
import WorkExperiencePage from "./components/workExperience/WorkExperiencePage.jsx";

const App = () => {
    return (
        <>
            <PresentationPage/>
            <TecnologyPage/>
            <InformationPage/>
            <ProjectsPage/>
            <WorkExperiencePage/>
            <EducationPage/>
            <ContactPage/>
        </>
    );
}

export default App;