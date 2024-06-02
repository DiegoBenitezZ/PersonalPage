import Section from "../../layouts/Section"
import TecnologyItem from "./TecnologyItem"
import { tecnologies } from "../../assets/data/tecnology"
import { useState, useEffect } from "react"
import "../../assets/css/pages/tecnology.css"


const Tecnology = () => {
    const [pivoteIndex, setPivoteIndex] = useState(0);
    let max_index = pivoteIndex + 4;
    let tecnolgyList = tecnologies.slice(pivoteIndex, max_index);

    useEffect(() => {
        const interval = setInterval(() => {
            setPivoteIndex(() => {
                if(tecnologies[pivoteIndex + 4] == undefined){
                    return 0;
                }
                
                return pivoteIndex + 4;
            });
        }, 8000);
 
        return () => clearInterval(interval);
    }, [pivoteIndex]);

    return (
        <Section id="section-tecnology" className="bg-purple-gradient">
            <div className="slide-track">
                {
                    tecnolgyList.map((tecnology) => 
                      <TecnologyItem key={tecnology.id} text={tecnology.name} fileName={tecnology.filename}/>
                    )
                }
            </div>
        </Section>
    )
}

export default Tecnology