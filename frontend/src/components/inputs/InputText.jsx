const InputText = ({className, placeholder, defaultValue, changeValue}) => {
    return (
        <input 
            className={`input-text ${className}`} 
            text="Type" 
            placeholder={placeholder}
            defaultValue={defaultValue} 
            onChange={(e) => changeValue(e)}
        />

    );
}

export default InputText;