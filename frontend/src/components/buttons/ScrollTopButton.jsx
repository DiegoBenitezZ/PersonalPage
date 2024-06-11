import "../../assets/css/buttons/scroll-top.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollTopButton = () => {
    return (

        <button onClick={() => {document.getElementById("presentation").scrollIntoView()}} className="scroll-top">
            <FontAwesomeIcon icon="fa-solid fa-caret-up" />
        </button>
        
    );
}

export default ScrollTopButton;


{/* <FontAwesomeIcon 
            onClick={() => {document.getElementById("presentation").scrollIntoView()}} 
            icon="fa-regular fa-square-caret-up"
            className="scroll-top"
        >Hola</FontAwesomeIcon> */}