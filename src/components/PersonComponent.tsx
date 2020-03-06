import React from "react";

const PersonComponent = ({name}:{name:string}) => {
    return (
        <div className="_person">
            <div>{name}</div>
        </div>
    )
}

export default PersonComponent;