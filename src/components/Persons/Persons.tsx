import React from 'react';
import Person from "core/Person";
import PersonComponent from 'components/PersonComponent';
import {ITestType} from "reducers/Test";

export interface IPersons {
    persons:Person[],
    seletedIndex:number,
    selectPerson:any
}


const Persons = ({persons, seletedIndex, selectPerson}:IPersons) => {
    return (
        <div className="persons_container">
            {
                persons && persons.map((item:Person, i) => {
                    let isSeleted = false;
                    if (seletedIndex === i + 1) {
                        isSeleted = true;
                    }
                    return <PersonComponent key={item.index} index={item.index} name={item.name} selectPerson={selectPerson} isSeleted={isSeleted}/>
                })
            }
            {/* <div className="_filter"></div> */}
        </div>
    )
}

export default Persons;