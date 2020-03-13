import React from 'react';
import tk from "core/Tk";
import Person from 'core/Person';
import PersonName from "components/PersonName";
interface IBigPerson {
    person?:Person,
    isOn: boolean
}
const BigPerson = ({person, isOn}:IBigPerson) => {
    const name:string = person ? person.name : '';

    const url = tk.utils.assetHelper(`/images/bigperson/${name}.png`);
    // const url = process.env.PUBLIC_URL + '/assets/images/bigperson/' + name +'.png';

    return (
        <div className="big-person-container">
            <div className={`__item __pictrue ${isOn ? 'show' : ''}`}>
                {
                    name && 
                    <div className="__img" style={{backgroundImage: `url(${url})`}}></div>
                }
            </div>  
            <PersonName name={name} isOn={isOn}/>
        </div>
    )
}


export default BigPerson;