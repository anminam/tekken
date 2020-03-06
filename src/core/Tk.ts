import Person from "core/Person";

class Tk {
    public static instance:Tk;

    private _personList:Person[];

    private constructor () {
        this._personList = [];
    }



    public MakePerson (name:string) {
        this._personList.push(new Person(name));
    }

    public getPersons() {
        return this._personList;
    }

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }
    
}

export default Tk.Instance;