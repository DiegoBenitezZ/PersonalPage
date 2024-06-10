import "../../assets/css/buttons/icon-button.css"

const IconButton = ({ imageName, text = "", targetUrl, className = "" }) => {
    return (
        <a className={`icon-button ${className}`} href={targetUrl} target="_blank" rel="norefer noopener">
            <img className="icon" src={`/img/icons/${imageName}`} alt="" />
            {(text) ?? text}
        </a>
    );
};

export default IconButton;