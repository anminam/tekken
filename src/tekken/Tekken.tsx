import React from 'react';
import Background from "components/Background";
import Persons from "components/Persons";
import TestContainer from 'components/TestContainer';
import BigPersonContainer from 'containers/BigPersonContainer';

const Tekken = () => {

    return (
        <div>
            {/* <Background /> */}
            <Persons />
            <TestContainer />
            <BigPersonContainer />
        </div>
    )
}

export default Tekken;