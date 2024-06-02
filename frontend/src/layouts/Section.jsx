import "../assets/css/layouts/section.css"

const Section = ({children, id, className}) => {
    return (
        <section id={id} className={`container-section ${className}`}>
            {children}
        </section>
    );
}

export default Section;