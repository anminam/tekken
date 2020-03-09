import { SELET_PERSON } from "./MainType";

export const selectPerson = (payload:number) => {
    return {
        type: SELET_PERSON,
        payload
    }
}