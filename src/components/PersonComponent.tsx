import React from "react";
import Person from "core/Person";

export interface IPersonComponent {
    name: string;
    index: number;
    selectPerson(index:number): any;
    isSeleted: boolean
}

interface IUserEvnet {
    selectPerson(index: number): any;
    index: number;
}

const PersonComponent = ({name, index, selectPerson, isSeleted}: IPersonComponent) => {
    return (
        <div className={`_person ${isSeleted ? '__selected' : '' }`} onClick={()=>onClick({selectPerson, index})} onMouseOver={()=> mouseOver({selectPerson, index})}>
            <div className={`person-frame ${isSeleted ? '__selected' : '' }`} />
            <div>{name}</div>
        </div>
    )
}

const onClick = ({selectPerson, index}: IUserEvnet) => {
    selectPerson(index);
}

const mouseOver = ({selectPerson, index}: IUserEvnet) => {
    selectPerson(index);
}

export default PersonComponent;