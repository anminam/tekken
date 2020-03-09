import React from 'react';
import Person from "core/Person";
import PersonComponent from 'components/PersonComponent';
import {ITestType} from "reducers/Test";


const Persons = ({persons}:{persons:Person[]}) => {
    return (
        <div className="persons_container">
            {
                persons && persons.map((item:Person) => <PersonComponent key={item.index} index={item.index} name={item.name} />)
            }
            {/* <div className="_filter"></div> */}
        </div>
    )
}

export default Persons;