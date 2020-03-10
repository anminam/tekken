import React from 'react';
import { connect } from "react-redux";
import Person from "core/Person";
import Persons from "./Persons";

import {selectPerson} from "actions/Main";

export interface IStateFromProps {
    persons: Person[];
    seletedIndex: number;
}
  
export interface IDispatchFromProps {
    selectPerson: (index:number) => void;
}


const mapStateToProps = (state:any, other:any) : IStateFromProps => {
    return {
        persons: state.test.persons,
        seletedIndex: state.main.seletedIndex
    }
}

const mapDispatchToProps = (dispatch:any, other:any) : IDispatchFromProps => {
    return {
        selectPerson: (index:number) => dispatch(selectPerson(index))
    }
}


export default connect<IStateFromProps, IDispatchFromProps>(
    mapStateToProps,
    mapDispatchToProps
)(Persons);