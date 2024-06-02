const Textarea = ({className, placeholder, defaultValue, changeValue}) => {
    return (
        <textarea 
            className={`textarea ${className}`} 
            text="Type" 
            placeholder={placeholder}
            defaultValue={defaultValue} 
            onChange={(e) => changeValue(e)}
            rows="8"
        ></textarea>

    );
}

export default Textarea;