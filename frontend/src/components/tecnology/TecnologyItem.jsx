const TecnologyItem = ({text, fileName}) => {
    return (
        <div className="slide-item">
            <img className="slide-img" src={`/src/assets/svg/${fileName}`} alt={text} />
            <span>{text}</span>
        </div>
    )
}

export default TecnologyItem;
