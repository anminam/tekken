import React from "react";


interface IPersonName {
    name: string
    isOn: boolean
}

const PersonName = ({name, isOn}:IPersonName) => {
    return (
        <div className="person-name-wapper">
            <div className={`text-1 ${isOn ? '__selected': ''}`}>
                {name && name.toUpperCase()}
            </div>
        </div>
    )
}

export default PersonName;