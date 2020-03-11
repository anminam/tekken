import Person from "core/Person";
import Utils from 'core/Utils';

class Tk {
    public static instance:Tk;

    private _personList:Person[];


    public utils = Utils;

    private constructor () {
        this._personList = [];
    }

    tempnum = 0;
    public makeTestPerson () {
        const personNames = [
            'anminam',
            'insun',
            'suckwind'
        ];
        
        // 랜덤
        let r = this.utils.random(0, personNames.length -1);

        // 순서대로
        r = this.tempnum++;
        const personName = personNames[r];
        return personName;
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