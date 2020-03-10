import React from "react";

export interface IPersonComponent {
    name:string,
    index:number,
    selectPerson:any,
    isSeleted:boolean
}

const PersonComponent = ({name, index, selectPerson, isSeleted}:IPersonComponent) => {
    return (
        <div className={`_person ${isSeleted ? '__selected' : '' }`} onClick={abc} onMouseOver={()=> mouseOver({selectPerson, index})}>
            <div className={`person-frame ${isSeleted ? '__selected' : '' }`} />
            <div>{name}</div>
        </div>
    )
}

const abc = () => {
    console.log('a');
}

const mouseOver = ({selectPerson, index}:{selectPerson:any, index:number}) => {
    selectPerson(index);
}

export default PersonComponent;