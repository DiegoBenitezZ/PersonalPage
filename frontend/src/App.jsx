import ContactPage from "./components/contact/ContactPage.jsx";
import InformationPage from "./components/information/InformationPage.jsx";
import PresentationPage from "./components/Presentation.jsx"
import TecnologyPage from "./components/tecnology/TecnologyPage.jsx";

const App = () => {
    return (
        <>
            <PresentationPage/>
            <TecnologyPage/>
            <InformationPage/>
            <ContactPage/>
        </>
    );
}

export default App;