import React from 'react';
import tk from "core/Tk";
import Person from 'core/Person';

interface IBigPerson {
    person?:Person,
    isOn: boolean
}
const BigPerson = ({person, isOn}:IBigPerson) => {
    // const name = 'anminam';
    const iamgePath:string = 'assets/bigperson/';
    const name:string = person ? person.name : '';

    const img = `${iamgePath}${name}.png`;
    return (
        <div className="big-person-container">
            <div className={`__item ${isOn ? 'show' : ''}`}>
                <div className="__img" style={{backgroundImage: `url(${img})`}}></div>
            </div>  
        </div>
    )
}


export default BigPerson;