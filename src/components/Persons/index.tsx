import React from 'react';
import { connect } from "react-redux";
import Persons from "./Persons";
import Person from "core/Person";
import {ITestType} from "reducers/Test";

import {selectPerson} from "actions/Main";

const mapStateToProps = (state:any, other:any) => {

    return {
        persons: state.test.persons,
        seletedIndex: state.main.seletedIndex
    }
}
const mapDispatchToProps = (dispatch:any, other:any) => {
    return {
        selectPerson: (index:number) => dispatch(selectPerson(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);