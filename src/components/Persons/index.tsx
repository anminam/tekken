import React from 'react';
import { connect } from "react-redux";
import Persons from "./Persons";
import Person from "core/Person";
import {ITestType} from "reducers/Test";

const mapStateToProps = (state:any, other:any) => {

    return {
        persons: state.test.persons
    }
}
const mapDispatchToProps = (dispatch:any, other:any) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);