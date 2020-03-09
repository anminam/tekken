import Person from "core/Person";

class Utils {
    public static instance:Utils;

    private constructor () {
    }

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }


    // 여기부터

    public random(start?:number, end?:number): number {
        const option = {
            start: 1,
            end: 100,
        }

        if(start) {
            option.start = start;
        }
        if(end) {
            option.end = end;
        }
        let value = Math.random() * option.end;
        value = Math.floor(value) + 1;

        return value;
    }
    
}

export default Utils.Instance;