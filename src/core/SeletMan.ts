class SelectMan {
    static _instance:SelectMan;
    _index:number = -1;

    static get Instance() {
        return this._instance || (this._instance = new SelectMan())
    }

    get Index(): number {
        return this._index;

    }

    whereIs() {

    }
}


export default SelectMan.Instance;
