import React from 'react';
import Background from "components/Background";
import Persons from "components/Persons";
import TestContainer from 'components/TestContainer';
import BigPerson from 'components/BigPerson';

const Tekken = () => {

    return (
        <div>
            {/* <Background /> */}
            <Persons />
            <TestContainer />
            <BigPerson />
        </div>
    )
}

export default Tekken;