import React from "react";

const PersonComponent = ({name, index, selectPerson}:{name:string, index:number, selectPerson:any }) => {
    return (
        <div className="_person" onClick={abc} onMouseOver={()=> mouseOver({selectPerson, index})}>
            <div className="person-frame" />
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