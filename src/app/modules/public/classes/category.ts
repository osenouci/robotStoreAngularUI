export class Category {

    protected _name:string;
    protected _id:number;

    constructor(name:string, id:number) {
        this._name = name;
        this._id = id;
    }

    public get name():string {
        return this._name;
    } 
    public get id():number {
        return this._id;
    }     
}