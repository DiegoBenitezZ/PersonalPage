import "../assets/css/layouts/card.css"

const Card = ({ id, className,children}) => {
    return (
        <div id={id} className={`card ${className ? className : 'card-md'}`}>
            {children}
        </div>
    );
};

export default Card;