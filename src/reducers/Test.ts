import { MAKE_PERSON } from "actions";
import tk from 'core/Tk';
import Person from "core/Person";

export interface ITestType {
    [persons:string]: Person[]
}
const init:ITestType = {
    persons:[]
}

const Test = (state = init, action:any) => {
    switch(action.type) {
        case MAKE_PERSON:
            return {
                ...state,
                persons: [
                    ...state.persons,
                    new Person(action.name)
                ]
            }
        default:
            return state;
    }
}

export default Test;