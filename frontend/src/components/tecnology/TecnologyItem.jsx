import "../../assets/css/components/tecnology-item.css"

const TecnologyItem = ({text, fileName}) => {
    return (
        <div className="slide-item">
            <img className="slide-img" src={`/img/tecnology/${fileName}`} alt={text} />
            <span>{text}</span>
        </div>
    )
}

export default TecnologyItem;
