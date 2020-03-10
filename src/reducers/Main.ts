import { SELET_PERSON } from "actions";
import tk from 'core/Tk';
import Person from "core/Person";

export interface IMainType {
    seletedIndex: number
}
const init:IMainType = {
    seletedIndex: -1
}

const Main = (state = init, action:any) => {
    switch(action.type) {
        case SELET_PERSON:
            return {
                ...state,
                seletedIndex: action.payload
            }
        default:
            return state;
    }
}

export default Main;