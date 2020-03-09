import React from "react";

const PersonComponent = ({name}:{name:string}) => {
    return (
        <div className="_person" onClick={abc}>
            <div className="person-frame" />
            <div>{name}</div>
        </div>
    )
}

const abc = () => {
    console.log('a');
}

export default PersonComponent;