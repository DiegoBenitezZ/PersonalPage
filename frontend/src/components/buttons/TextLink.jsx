const TextLink = ({ text = "Link" }) => {
    return (
        <a className="text-xs">
            {text}
        </a>
    );
};

export default TextLink;