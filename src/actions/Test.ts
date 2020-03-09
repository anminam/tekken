import { MAKE_PERSON } from "./TestType";

export const makePerson = (name:string) => {
    return {
        type: MAKE_PERSON,
        name
    }
}