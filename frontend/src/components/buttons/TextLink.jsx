const TextLink = ({ text = "Link", scrollTarget = "" }) => {
    return (
        <a onClick={() => {document.getElementById(scrollTarget).scrollIntoView();}} className="text-link text-xs">
            {text}
        </a>
    );
};

export default TextLink;