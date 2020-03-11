import React from 'react';
import Person from "core/Person";
import PersonComponent from 'components/PersonComponent';
import {IStateFromProps, IDispatchFromProps} from './index'

type IPersons = IStateFromProps & IDispatchFromProps;


const Persons = ({persons, seletedIndex, selectPerson}: IPersons) => {
    return (
        <div className="persons_container">
            {
                persons && persons.map((item:Person, i) => {
                    let isSeleted = false;
                    if (seletedIndex === i) {
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