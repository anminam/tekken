import React from 'react';
import BigPerson from 'components/BigPerson';
import { connect } from "react-redux";
import Person from 'core/Person';
import tk from 'core/Tk';
const BigPersonContainer = ({seletedIndex, persons}: IBigPersonContainer) => {
    const {
        isOn0,
        isOn1,
        person0,
        person1
    } = init({seletedIndex, persons});
    return (
        <>
            <BigPerson person={person0} isOn={isOn0} />
            <BigPerson person={person1} isOn={isOn1} />
        </>
    )
}


interface IInitInterface {
    isOn0: boolean
    isOn1: boolean
    person0?: Person
    person1?: Person
}


interface IConfig {
    nowFlag: number,
    flagLength: number
}

const config:IConfig = {
    nowFlag: 1,
    flagLength: 2
}

type IBigPersonContainer = IStateFromProps & IDispatchFromProps;


const init = ({seletedIndex, persons}: IStateFromProps) : IInitInterface => {

    const returnObj:IInitInterface = {
        isOn0: false,
        isOn1: false,
        person0: undefined,
        person1: undefined,
    }
    
    const person = tk.utils.findObj<Person, number>(persons, 'index', seletedIndex);
    if (!person) {
        return returnObj;

    }

    // flag 초기화
    const nowFlag:number = config.nowFlag;
    // 셋팅
    
    const nextFlag = nowFlag === 1 ? 0 : 1;

    if (nextFlag === 0) {
        returnObj.isOn0 = true;
        returnObj.person0 = person;

    } else {
        returnObj.isOn1 = true;
        returnObj.person1 = person;

    }

    config.nowFlag = nextFlag;

    return returnObj;
}





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
        selectPerson: () => {}
    }
}


export default connect<IStateFromProps, IDispatchFromProps>(
    mapStateToProps,
    mapDispatchToProps
)(BigPersonContainer);
