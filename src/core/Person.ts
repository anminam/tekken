class Person {
    name:string = '';
    src:string = '';
    index:number = 0;

    static makeindex:number = 0;

    constructor(name:string) {
        this.name = name;
        this.index = ++Person.makeindex;
    }

    

}
export default Person;