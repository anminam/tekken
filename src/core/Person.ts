class Person {
    name:string = '';
    src:string = '';
    index:number = -1;

    static indexNumber:number = -1;

    constructor(name:string) {
        this.name = name;
        this.index = ++Person.indexNumber;
        this.src = '';
    }

    

}
export default Person;